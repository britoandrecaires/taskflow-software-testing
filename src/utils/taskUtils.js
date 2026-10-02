export function validateLogin(email, password) {
    return email === 'teste@taskflow.pt' && password === '123456'
}

export function normalizeTaskTitle(title) {
    return title.trim()
}

export function createTask(title, id = Date.now()) {
    const normalizedTitle = normalizeTaskTitle(title)

    if (!normalizedTitle) {
        return null
    }

    return {
        id,
        title: normalizedTitle,
        completed: false,
    }
}

export function toggleTaskStatus(task) {
    return {
        ...task,
        completed: !task.completed,
    }
}