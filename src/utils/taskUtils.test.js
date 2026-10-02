import { describe, expect, it } from 'vitest'
import {
    validateLogin,
    normalizeTaskTitle,
    createTask,
    toggleTaskStatus,
} from './taskUtils'

describe('validateLogin', () => {
    it('deve aceitar credenciais válidas', () => {
        const result = validateLogin(
            'teste@taskflow.pt',
            '123456'
        )

        expect(result).toBe(true)
    })

    it('deve rejeitar uma password inválida', () => {
        const result = validateLogin(
            'teste@taskflow.pt',
            'passwordErrada'
        )

        expect(result).toBe(false)
    })
})

describe('normalizeTaskTitle', () => {
    it('deve remover espaços antes e depois do título', () => {
        const result = normalizeTaskTitle(
            '   Preparar testes   '
        )

        expect(result).toBe('Preparar testes')
    })
})

describe('createTask', () => {
    it('deve criar uma tarefa válida', () => {
        const task = createTask(
            'Preparar apresentação',
            1
        )

        expect(task).toEqual({
            id: 1,
            title: 'Preparar apresentação',
            completed: false,
        })
    })

    it('não deve criar uma tarefa vazia', () => {
        const task = createTask('   ', 1)

        expect(task).toBeNull()
    })
})

describe('toggleTaskStatus', () => {
    it('deve alterar uma tarefa pendente para concluída', () => {
        const task = {
            id: 1,
            title: 'Preparar testes',
            completed: false,
        }

        const result = toggleTaskStatus(task)

        expect(result.completed).toBe(true)
    })

    it('deve alterar uma tarefa concluída para pendente', () => {
        const task = {
            id: 1,
            title: 'Preparar testes',
            completed: true,
        }

        const result = toggleTaskStatus(task)

        expect(result.completed).toBe(false)
    })
})