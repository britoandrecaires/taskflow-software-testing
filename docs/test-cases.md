
# TaskFlow — Casos de Teste

## Objetivo

Este documento define os principais casos de teste funcionais da aplicação TaskFlow.

Cada caso de teste contém:

- Identificador
- Requisito associado
- Prioridade
- Pré-condições
- Dados de teste
- Passos
- Resultado esperado

---

# TC01 — Login com credenciais válidas

Requisito: RF01
Prioridade: Alta
Tipo: Funcional / Positivo

## Pré-condições

- A aplicação está disponível.
- O utilizador encontra-se na página de login.

## Dados de teste

Email:
teste@taskflow.pt

Palavra-passe:
123456

## Passos

1. Introduzir o email válido.
2. Introduzir a palavra-passe válida.
3. Clicar em "Entrar".

## Resultado esperado

- O login é realizado com sucesso.
- O dashboard é apresentado.
- O utilizador visualiza "As minhas tarefas".

---

# TC02 — Login com palavra-passe inválida

Requisito: RF02
Prioridade: Alta
Tipo: Funcional / Negativo

## Dados de teste

Email:
teste@taskflow.pt

Palavra-passe:
errada123

## Passos

1. Introduzir o email válido.
2. Introduzir uma palavra-passe inválida.
3. Clicar em "Entrar".

## Resultado esperado

- O acesso é recusado.
- O utilizador permanece na página de login.
- É apresentada a mensagem:

"Email ou palavra-passe incorretos."

---

# TC03 — Login com campos vazios

Requisito: RF03
Prioridade: Alta
Tipo: Validação / Negativo

## Passos

1. Não preencher o email.
2. Não preencher a palavra-passe.
3. Clicar em "Entrar".

## Resultado esperado

- O login não é realizado.
- É apresentada a mensagem:

"Preencha todos os campos."

---

# TC04 — Criar tarefa válida

Requisito: RF04
Prioridade: Alta
Tipo: Funcional / Positivo

## Pré-condições

- Utilizador autenticado.

## Dados de teste

Título:
Preparar apresentação de testes

## Passos

1. Introduzir o título da tarefa.
2. Clicar em "+ Adicionar tarefa".

## Resultado esperado

- A tarefa aparece na lista.
- A tarefa apresenta o estado "Pendente".
- O contador aumenta em uma unidade.

---

# TC05 — Criar tarefa sem título

Requisito: RF04
Prioridade: Média
Tipo: Validação / Negativo

## Pré-condições

- Utilizador autenticado.

## Passos

1. Deixar o campo da nova tarefa vazio.
2. Clicar em "+ Adicionar tarefa".

## Resultado esperado

- Nenhuma tarefa é criada.
- O contador não é alterado.
- A lista permanece inalterada.

---

# TC06 — Marcar tarefa como concluída

Requisito: RF06
Prioridade: Alta
Tipo: Funcional / Positivo

## Pré-condições

- Utilizador autenticado.
- Existe uma tarefa pendente.

## Passos

1. Localizar uma tarefa pendente.
2. Clicar no botão circular junto da tarefa.

## Resultado esperado

- O estado muda de "Pendente" para "Concluída".
- O símbolo muda para ✓.
- O título da tarefa aparece riscado.

---

# TC07 — Reabrir tarefa concluída

Requisito: RF06
Prioridade: Média
Tipo: Funcional

## Pré-condições

- Existe uma tarefa com estado "Concluída".

## Passos

1. Clicar novamente no botão de estado da tarefa.

## Resultado esperado

- O estado volta para "Pendente".
- O título deixa de aparecer riscado.

---

# TC08 — Editar tarefa

Requisito: RF05
Prioridade: Média
Tipo: Funcional / Positivo

## Pré-condições

- Existe pelo menos uma tarefa.

## Dados de teste

Título inicial:
Preparar apresentação

Novo título:
Preparar apresentação final

## Passos

1. Clicar em "Editar".
2. Alterar o título.
3. Clicar em "Guardar".

## Resultado esperado

- O novo título é apresentado.
- A tarefa não é duplicada.
- O número total de tarefas mantém-se.

---

# TC09 — Editar tarefa com título vazio

Requisito: RF05
Prioridade: Média
Tipo: Validação / Negativo

## Pré-condições

- Existe pelo menos uma tarefa.

## Passos

1. Clicar em "Editar".
2. Apagar completamente o título.
3. Clicar em "Guardar".

## Resultado esperado

- A tarefa não deve ser guardada com título vazio.
- O sistema deve impedir a alteração inválida.

---

# TC10 — Cancelar edição

Requisito: RF05
Prioridade: Baixa
Tipo: Funcional

## Pré-condições

- Existe uma tarefa.

## Passos

1. Clicar em "Editar".
2. Alterar o texto.
3. Clicar em "Cancelar".

## Resultado esperado

- A alteração não é guardada.
- O título anterior mantém-se.

---

# TC11 — Eliminar tarefa

Requisito: RF07
Prioridade: Alta
Tipo: Funcional / Positivo

## Pré-condições

- Existe pelo menos uma tarefa.

## Passos

1. Localizar uma tarefa.
2. Clicar em "Eliminar".

## Resultado esperado

- A tarefa desaparece da lista.
- O contador diminui em uma unidade.

---

# TC12 — Contador de tarefas

Requisito: RF04 / RF07
Prioridade: Média
Tipo: Funcional

## Pré-condições

- Utilizador autenticado.

## Passos

1. Criar uma tarefa.
2. Verificar o contador.
3. Criar uma segunda tarefa.
4. Verificar novamente.
5. Eliminar uma tarefa.
6. Verificar novamente.

## Resultado esperado

O contador apresenta:

0 tarefas
→ 1 tarefa
→ 2 tarefas
→ 1 tarefa

---

# TC13 — Terminar sessão

Requisito: RF08
Prioridade: Alta
Tipo: Funcional

## Pré-condições

- Utilizador autenticado.

## Passos

1. Clicar em "Terminar sessão".

## Resultado esperado

- A sessão é terminada.
- A página de login é apresentada.

---

# TC14 — Utilização de espaços num título

Requisito: RF04
Prioridade: Média
Tipo: Validação

## Dados de teste

"   Preparar testes   "

## Passos

1. Introduzir o título com espaços antes e depois.
2. Criar a tarefa.

## Resultado esperado

A tarefa deve ser criada como:

"Preparar testes"

sem os espaços adicionais.
