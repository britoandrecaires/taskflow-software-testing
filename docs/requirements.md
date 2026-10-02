
# TaskFlow — Especificação de Requisitos

## 1. Objetivo

A TaskFlow é uma aplicação Web de gestão de tarefas utilizada como caso de estudo
para aplicação de técnicas de Teste de Software, Gestão de Testes e Automação de Testes.

O sistema deverá permitir autenticar utilizadores e gerir tarefas através de uma
interface Web e, numa fase posterior, através de uma API REST.

---

# 2. Requisitos Funcionais

## RF01 — Autenticação com credenciais válidas

O sistema deve permitir que um utilizador inicie sessão quando introduz
um email e uma palavra-passe válidos.

Resultado esperado:

- O utilizador obtém acesso ao dashboard.

Prioridade: Alta

---

## RF02 — Rejeição de credenciais inválidas

O sistema deve impedir o acesso quando o email ou a palavra-passe são inválidos.

Resultado esperado:

- O acesso é recusado.
- É apresentada uma mensagem de erro.

Prioridade: Alta

---

## RF03 — Validação de campos obrigatórios

O sistema deve impedir a submissão do formulário de login quando os campos
obrigatórios não estão preenchidos.

Resultado esperado:

- O utilizador permanece na página de login.
- É apresentada uma mensagem de validação.

Prioridade: Alta

---

## RF04 — Criar tarefa

O utilizador autenticado deve conseguir criar uma nova tarefa.

Resultado esperado:

- A tarefa aparece na lista.
- O contador de tarefas é atualizado.

Prioridade: Alta

---

## RF05 — Editar tarefa

O utilizador deve conseguir alterar o título de uma tarefa existente.

Resultado esperado:

- O novo título substitui o título anterior.
- A tarefa continua presente na lista.

Prioridade: Média

---

## RF06 — Alterar estado da tarefa

O utilizador deve conseguir alterar uma tarefa entre os estados:

- Pendente
- Concluída

Resultado esperado:

- O estado apresentado é atualizado.
- Uma tarefa concluída é visualmente identificada.

Prioridade: Alta

---

## RF07 — Eliminar tarefa

O utilizador deve conseguir eliminar uma tarefa.

Resultado esperado:

- A tarefa desaparece da lista.
- O contador de tarefas é atualizado.

Prioridade: Alta

---

## RF08 — Terminar sessão

O utilizador autenticado deve conseguir terminar a sessão.

Resultado esperado:

- O dashboard deixa de estar acessível.
- O utilizador regressa à página de login.

Prioridade: Alta

---

# 3. Requisitos Não Funcionais

## RNF01 — Usabilidade

A interface deve ser simples, clara e consistente.

## RNF02 — Desempenho

As operações principais devem apresentar resposta rápida ao utilizador.

## RNF03 — Compatibilidade

A aplicação deve funcionar nos browsers modernos mais utilizados.

## RNF04 — Segurança

Áreas protegidas da aplicação não devem estar disponíveis para utilizadores
não autenticados.

## RNF05 — Testabilidade

Os elementos principais da interface devem possuir identificadores ou
seletores estáveis que permitam a realização de testes automáticos.
