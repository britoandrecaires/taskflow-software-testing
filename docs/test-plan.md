
# TaskFlow — Plano de Testes

## 1. Objetivo

O objetivo deste plano é definir a estratégia de testes da aplicação TaskFlow,
incluindo os tipos de teste, responsabilidades, critérios de execução,
riscos, ferramentas e atividades de automação.

---

## 2. Sistema em Teste

Sistema:
TaskFlow

Tipo:
Aplicação Web de gestão de tarefas.

Principais funcionalidades:

- Login
- Logout
- Criação de tarefas
- Edição de tarefas
- Alteração do estado de tarefas
- Eliminação de tarefas

---

## 3. Âmbito dos Testes

Serão testadas as seguintes áreas:

- Autenticação
- Gestão de tarefas
- Validação de dados
- Interface do utilizador
- API REST
- Integração entre componentes
- Comportamento end-to-end
- Desempenho básico
- Segurança básica

---

## 4. Fora do Âmbito

Nesta versão do projeto não serão realizados:

- Testes de carga em larga escala
- Testes avançados de penetração
- Testes em dispositivos móveis nativos
- Testes de acessibilidade avançados
- Testes de recuperação de desastre

---

## 5. Estratégia de Testes

Serão utilizados vários níveis e tipos de teste.

### 5.1 Testes Unitários

Objetivo:
Validar funções isoladas e lógica da aplicação.

Ferramenta:
Vitest

Exemplos:

- Validação de credenciais
- Criação de objetos tarefa
- Alteração do estado de uma tarefa
- Validação de campos

---

### 5.2 Testes de Componentes

Objetivo:
Validar componentes React de forma isolada.

Ferramentas:
Vitest
React Testing Library

Exemplos:

- Componente de Login
- Formulário de criação de tarefa
- Lista de tarefas

---

### 5.3 Testes de API

Objetivo:
Validar os endpoints da API REST.

Ferramentas:
Supertest
Postman

Endpoints previstos:

POST /api/login
GET /api/tasks
POST /api/tasks
PUT /api/tasks/:id
PATCH /api/tasks/:id/status
DELETE /api/tasks/:id

---

### 5.4 Testes de Integração

Objetivo:
Verificar a comunicação entre diferentes componentes do sistema.

Exemplos:

- API + lógica de negócio
- API + base de dados
- Frontend + API

---

### 5.5 Testes End-to-End

Objetivo:
Simular a utilização real da aplicação.

Ferramenta:
Playwright

Fluxo principal:

Login
→ Criar tarefa
→ Editar tarefa
→ Concluir tarefa
→ Eliminar tarefa
→ Logout

---

### 5.6 Smoke Tests

Objetivo:
Verificar rapidamente se as funcionalidades críticas estão operacionais.

Exemplos:

- Aplicação abre
- Login funciona
- Dashboard é carregado
- Criação de tarefa funciona

---

### 5.7 Testes de Regressão

Objetivo:
Garantir que alterações no código não afetam funcionalidades existentes.

Os testes automáticos serão executados novamente após alterações ao código.

---

### 5.8 Testes Negativos

Objetivo:
Verificar o comportamento do sistema perante dados inválidos.

Exemplos:

- Login com password errada
- Campos vazios
- Criar tarefa sem título
- Editar tarefa com valor vazio
- Pedido API inválido

---

### 5.9 Testes de Desempenho

Objetivo:
Avaliar o tempo de resposta de algumas operações.

Exemplos:

- Tempo de resposta da API
- Tempo de carregamento da aplicação

Ferramenta prevista:
k6

---

### 5.10 Testes de Segurança Básicos

Objetivo:
Identificar problemas básicos de segurança.

Exemplos:

- Acesso ao dashboard sem autenticação
- Dados inválidos na API
- Validação de inputs
- Autorização de operações

---

## 6. Ambiente de Testes

Frontend:
React + Vite

Backend:
Node.js + Express

Base de Dados:
SQLite

Testes Unitários:
Vitest

Testes de Componentes:
React Testing Library

Testes de API:
Supertest / Postman

Testes E2E:
Playwright

Automação:
GitHub Actions

Controlo de Versões:
GitHub

---

## 7. Critérios de Entrada

Os testes podem começar quando:

- Os requisitos estiverem definidos.
- A funcionalidade a testar estiver implementada.
- O ambiente de testes estiver disponível.
- Os dados necessários estiverem preparados.

---

## 8. Critérios de Saída

Uma fase de testes pode ser considerada concluída quando:

- Todos os testes críticos tiverem sido executados.
- Não existirem defeitos críticos abertos.
- A taxa de sucesso dos testes for considerada aceitável.
- Os resultados estiverem documentados.
- Os testes de regressão tiverem sido executados.

---

## 9. Prioridades

Alta:

- Login
- Logout
- Criar tarefa
- Eliminar tarefa
- Alterar estado da tarefa

Média:

- Editar tarefa
- Validações secundárias
- Aspetos visuais

Baixa:

- Melhorias cosméticas

---

## 10. Gestão de Defeitos

Os defeitos encontrados serão registados através de GitHub Issues.

Cada defeito deverá incluir:

- Identificador
- Título
- Descrição
- Passos para reproduzir
- Resultado esperado
- Resultado obtido
- Severidade
- Prioridade
- Estado
- Evidências

Estados possíveis:

Open
→ In Progress
→ Fixed
→ Retest
→ Closed

---

## 11. Métricas

Serão analisadas as seguintes métricas:

- Número total de testes
- Testes Passed
- Testes Failed
- Taxa de sucesso
- Número de defeitos
- Cobertura de código
- Tempo de execução
- Testes automatizados
- Testes manuais

---

## 12. Automação

Os testes automáticos serão integrados com GitHub Actions.

Fluxo:

Código alterado
→ Git Push
→ GitHub Actions
→ Testes Unitários
→ Testes de API
→ Testes E2E
→ Relatório
→ Passed / Failed

---

## 13. Gestão de Risco

Os principais riscos identificados são:

### Risco 1 — Falha de autenticação

Impacto: Alto
Prioridade de teste: Alta

### Risco 2 — Perda ou alteração incorreta de tarefas

Impacto: Alto
Prioridade de teste: Alta

### Risco 3 — Problemas de comunicação com a API

Impacto: Alto
Prioridade de teste: Alta

### Risco 4 — Interface inconsistente

Impacto: Médio
Prioridade de teste: Média

### Risco 5 — Lentidão da aplicação

Impacto: Médio
Prioridade de teste: Média
