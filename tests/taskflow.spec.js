import { test, expect } from '@playwright/test'

async function login(page) {
    await page.goto('/')

    await page.getByLabel('Email').fill('teste@taskflow.pt')
    await page.getByLabel('Palavra-passe').fill('123456')

    await page.getByRole('button', { name: 'Entrar' }).click()

    await expect(
        page.getByText('As minhas tarefas')
    ).toBeVisible()
}

test.describe('TaskFlow - Testes E2E', () => {

    test('E2E01 - deve apresentar o formulário de login', async ({ page }) => {
        await page.goto('/')

        await expect(
            page.getByText('Iniciar sessão')
        ).toBeVisible()

        await expect(
            page.getByLabel('Email')
        ).toBeVisible()

        await expect(
            page.getByLabel('Palavra-passe')
        ).toBeVisible()
    })


    test('E2E02 - deve rejeitar credenciais inválidas', async ({ page }) => {
        await page.goto('/')

        await page
            .getByLabel('Email')
            .fill('teste@taskflow.pt')

        await page
            .getByLabel('Palavra-passe')
            .fill('passwordErrada')

        await page
            .getByRole('button', { name: 'Entrar' })
            .click()

        await expect(
            page.getByText('Email ou palavra-passe incorretos.')
        ).toBeVisible()
    })


    test('E2E03 - utilizador consegue fazer login', async ({ page }) => {
        await login(page)

        await expect(
            page.getByText('As minhas tarefas')
        ).toBeVisible()
    })


    test('E2E04 - utilizador consegue criar uma tarefa', async ({ page }) => {
        await login(page)

        await page
            .getByPlaceholder('Escreva uma nova tarefa...')
            .fill('Preparar apresentação de testes')

        await page
            .getByRole('button', { name: '+ Adicionar tarefa' })
            .click()

        await expect(
            page.getByText('Preparar apresentação de testes')
        ).toBeVisible()

        await expect(
            page.getByText('Pendente')
        ).toBeVisible()

        await expect(
            page.getByText('1 tarefa')
        ).toBeVisible()
    })


    test('E2E05 - utilizador consegue concluir uma tarefa', async ({ page }) => {
        await login(page)

        await page
            .getByPlaceholder('Escreva uma nova tarefa...')
            .fill('Preparar testes')

        await page
            .getByRole('button', { name: '+ Adicionar tarefa' })
            .click()

        await page
            .getByRole('button', { name: 'Alterar estado da tarefa' })
            .click()

        await expect(
            page.getByText('Concluída')
        ).toBeVisible()
    })


    test('E2E06 - utilizador consegue editar uma tarefa', async ({ page }) => {
        await login(page)

        await page
            .getByPlaceholder('Escreva uma nova tarefa...')
            .fill('Preparar testes')

        await page
            .getByRole('button', { name: '+ Adicionar tarefa' })
            .click()

        await page
            .getByRole('button', { name: 'Editar' })
            .click()

        const editInput = page.locator('.edit-task-input')

        await editInput.fill('Preparar apresentação final')

        await page
            .getByRole('button', { name: 'Guardar' })
            .click()

        await expect(
            page.getByText('Preparar apresentação final')
        ).toBeVisible()
    })


    test('E2E07 - utilizador consegue eliminar uma tarefa', async ({ page }) => {
        await login(page)

        await page
            .getByPlaceholder('Escreva uma nova tarefa...')
            .fill('Tarefa para eliminar')

        await page
            .getByRole('button', { name: '+ Adicionar tarefa' })
            .click()

        await expect(
            page.getByText('Tarefa para eliminar')
        ).toBeVisible()

        await page
            .getByRole('button', { name: 'Eliminar' })
            .click()

        await expect(
            page.getByText('Tarefa para eliminar')
        ).not.toBeVisible()

        await expect(
            page.getByText('0 tarefas')
        ).toBeVisible()
    })


    test('E2E08 - utilizador consegue terminar sessão', async ({ page }) => {
        await login(page)

        await page
            .getByRole('button', { name: 'Terminar sessão' })
            .click()

        await expect(
            page.getByText('Iniciar sessão')
        ).toBeVisible()
    })

})