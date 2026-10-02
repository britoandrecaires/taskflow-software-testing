import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [editingTaskId, setEditingTaskId] = useState(null)
  const [editingTitle, setEditingTitle] = useState('')

  // LOGIN
  const handleLogin = (event) => {
    event.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Preencha todos os campos.')
      return
    }

    if (
      email === 'teste@taskflow.pt' &&
      password === '123456'
    ) {
      setLoggedIn(true)
      return
    }

    setError('Email ou palavra-passe incorretos.')
  }

  // LOGOUT
  const handleLogout = () => {
    setLoggedIn(false)
    setEmail('')
    setPassword('')
    setError('')
  }

  // ADICIONAR TAREFA
  const handleAddTask = (event) => {
    event.preventDefault()

    if (!newTask.trim()) {
      return
    }

    const task = {
      id: Date.now(),
      title: newTask.trim(),
      completed: false,
    }

    setTasks((currentTasks) => [...currentTasks, task])
    setNewTask('')
  }

  // CONCLUIR / REABRIR TAREFA
  const handleToggleTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
            ...task,
            completed: !task.completed,
          }
          : task
      )
    )
  }
  const handleDeleteTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    )
  }
  const handleStartEdit = (task) => {
    setEditingTaskId(task.id)
    setEditingTitle(task.title)
  }

  const handleSaveEdit = (id) => {
    if (!editingTitle.trim()) {
      return
    }

    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, title: editingTitle.trim() }
          : task
      )
    )

    setEditingTaskId(null)
    setEditingTitle('')
  }

  const handleCancelEdit = () => {
    setEditingTaskId(null)
    setEditingTitle('')
  }

  // DASHBOARD
  if (loggedIn) {
    return (
      <main className="task-page">
        <header className="task-header">
          <div className="task-brand">
            <span className="logo">✓</span>

            <div>
              <h1>TaskFlow</h1>
              <p>Gestão de tarefas</p>
            </div>
          </div>

          <button
            id="logout-button"
            className="logout-small"
            type="button"
            onClick={handleLogout}
          >
            Terminar sessão
          </button>
        </header>

        <section className="task-container">
          <div className="task-title">
            <div>
              <h2>As minhas tarefas</h2>
              <p>Organize e acompanhe as suas atividades.</p>
            </div>

            <span id="task-counter">
              {tasks.length}{' '}
              {tasks.length === 1 ? 'tarefa' : 'tarefas'}
            </span>
          </div>

          <form
            className="task-form"
            onSubmit={handleAddTask}
          >
            <input
              id="new-task"
              type="text"
              placeholder="Escreva uma nova tarefa..."
              value={newTask}
              onChange={(event) =>
                setNewTask(event.target.value)
              }
            />

            <button
              id="add-task-button"
              type="submit"
            >
              + Adicionar tarefa
            </button>
          </form>

          <div className="task-list">
            {tasks.length === 0 && (
              <div
                id="empty-tasks"
                className="empty-tasks"
              >
                <span>✓</span>
                <h3>Ainda não existem tarefas</h3>
                <p>
                  Adicione a sua primeira tarefa para começar.
                </p>
              </div>
            )}

            {tasks.map((task) => (
              <div
                className={`task-item ${task.completed ? 'completed' : ''
                  }`}
                key={task.id}
              >
                <div className="task-main">
                  <button
                    type="button"
                    className={`task-check ${task.completed ? 'checked' : ''
                      }`}
                    onClick={() => handleToggleTask(task.id)}
                    aria-label="Alterar estado da tarefa"
                  >
                    {task.completed ? '✓' : '○'}
                  </button>

                  <div className="task-info">
                    <div className="task-info">
                      {editingTaskId === task.id ? (
                        <input
                          id={`edit-task-${task.id}`}
                          className="edit-task-input"
                          type="text"
                          value={editingTitle}
                          onChange={(event) =>
                            setEditingTitle(event.target.value)
                          }
                        />
                      ) : (
                        <>
                          <strong>{task.title}</strong>

                          <p>
                            {task.completed
                              ? 'Concluída'
                              : 'Pendente'}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="task-actions">
                  {editingTaskId === task.id ? (
                    <>
                      <button
                        type="button"
                        className="save-task-button"
                        onClick={() => handleSaveEdit(task.id)}
                      >
                        Guardar
                      </button>

                      <button
                        type="button"
                        className="cancel-task-button"
                        onClick={handleCancelEdit}
                      >
                        Cancelar
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="edit-task-button"
                        onClick={() => handleStartEdit(task)}
                      >
                        Editar
                      </button>

                      <button
                        type="button"
                        className="delete-task-button"
                        onClick={() => handleDeleteTask(task.id)}
                      >
                        Eliminar
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    )
  }

  // LOGIN
  return (
    <main className="login-page">
      <section className="login-card">
        <div className="brand">
          <span className="logo">✓</span>

          <div>
            <h1>TaskFlow</h1>
            <p>Organize. Priorize. Conclua.</p>
          </div>
        </div>

        <div className="login-header">
          <h2>Iniciar sessão</h2>
          <p>
            Introduza as suas credenciais para continuar.
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="exemplo@email.com"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Palavra-passe
            </label>

            <input
              id="password"
              type="password"
              placeholder="Introduza a palavra-passe"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
            />
          </div>

          {error && (
            <div
              id="login-error"
              className="error-message"
            >
              {error}
            </div>
          )}

          <button
            id="login-button"
            type="submit"
          >
            Entrar
          </button>
        </form>

        <div className="demo-account">
          <strong>Conta de demonstração</strong>
          <p>Email: teste@taskflow.pt</p>
          <p>Palavra-passe: 123456</p>
        </div>
      </section>
    </main>
  )
}

export default App