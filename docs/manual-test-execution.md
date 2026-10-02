
# TaskFlow — Registo de Execução Manual dos Testes

## Objetivo

Este documento regista a execução manual dos casos de teste definidos para a aplicação TaskFlow.

Cada teste é executado manualmente no browser e o resultado obtido é comparado com o resultado esperado.

---

## Ambiente de Teste

Sistema Operativo:
Windows 11

Browser:
Microsoft Edge / Google Chrome

Frontend:
React + Vite

URL:
http://localhost:5173

Data de execução:
01/10/2026

---

## Resultados

| ID   | Caso de Teste                   | Resultado Esperado           | Resultado Obtido          | Estado |
| ---- | ------------------------------- | ---------------------------- | ------------------------- | ------ |
| TC01 | Login com credenciais válidas  | Dashboard apresentado        | Dashboard apresentado     | PASS   |
| TC02 | Login com password inválida    | Mensagem de erro             | Mensagem apresentada      | PASS   |
| TC03 | Login com campos vazios         | Validação apresentada      | Validação apresentada   | PASS   |
| TC04 | Criar tarefa válida            | Tarefa criada                | Tarefa criada             | PASS   |
| TC05 | Criar tarefa sem título        | Tarefa não criada           | Tarefa não criada        | PASS   |
| TC06 | Marcar tarefa como concluída   | Estado passa para Concluída | Estado alterado           | PASS   |
| TC07 | Reabrir tarefa concluída       | Estado volta para Pendente   | Estado alterado           | PASS   |
| TC08 | Editar tarefa                   | Título atualizado           | Título atualizado        | PASS   |
| TC09 | Editar tarefa com título vazio | Alteração rejeitada        | Alteração rejeitada     | PASS   |
| TC10 | Cancelar edição               | Alteração não guardada    | Alteração não guardada | PASS   |
| TC11 | Eliminar tarefa                 | Tarefa eliminada             | Tarefa eliminada          | PASS   |
| TC12 | Contador de tarefas             | Contador atualizado          | Contador atualizado       | PASS   |
| TC13 | Terminar sessão                | Regresso ao login            | Login apresentado         | PASS   |
| TC14 | Remover espaços do título     | Título normalizado          | Título normalizado       | PASS   |

---

## Resumo da Execução

Total de testes executados:

14

Testes aprovados:

14

Testes falhados:

0

Taxa de sucesso:

14 / 14 × 100 = 100%

Taxa de sucesso = 100%

---

## Conclusão

Todos os casos de teste manuais definidos foram executados com sucesso.

A aplicação apresentou o comportamento esperado para os cenários positivos,
negativos e de validação testados.

A próxima fase consiste na automatização destes testes utilizando diferentes níveis de teste.
