import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('Componente App - Login', () => {
    it('deve apresentar o formulário de login', () => {
        render(<App />)

        expect(
            screen.getByText('Iniciar sessão')
        ).toBeInTheDocument()

        expect(
            screen.getByLabelText('Email')
        ).toBeInTheDocument()

        expect(
            screen.getByLabelText('Palavra-passe')
        ).toBeInTheDocument()

        expect(
            screen.getByRole('button', { name: 'Entrar' })
        ).toBeInTheDocument()
    })

    it('deve apresentar erro com credenciais inválidas', async () => {
        const user = userEvent.setup()

        render(<App />)

        await user.type(
            screen.getByLabelText('Email'),
            'teste@taskflow.pt'
        )

        await user.type(
            screen.getByLabelText('Palavra-passe'),
            'errada123'
        )

        await user.click(
            screen.getByRole('button', { name: 'Entrar' })
        )

        expect(
            screen.getByText('Email ou palavra-passe incorretos.')
        ).toBeInTheDocument()
    })

    it('deve permitir login com credenciais válidas', async () => {
        const user = userEvent.setup()

        render(<App />)

        await user.type(
            screen.getByLabelText('Email'),
            'teste@taskflow.pt'
        )

        await user.type(
            screen.getByLabelText('Palavra-passe'),
            '123456'
        )

        await user.click(
            screen.getByRole('button', { name: 'Entrar' })
        )

        expect(
            screen.getByText('As minhas tarefas')
        ).toBeInTheDocument()
    })
})