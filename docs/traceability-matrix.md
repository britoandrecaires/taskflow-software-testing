
# TaskFlow — Matriz de Rastreabilidade

## Objetivo

Esta matriz relaciona os requisitos definidos para a aplicação TaskFlow com os respetivos casos de teste.

O objetivo é garantir que todos os requisitos têm cobertura de teste e facilitar o acompanhamento dos resultados.

---

## Matriz de Rastreabilidade

| Requisito | Descrição                          | Casos de Teste         | Prioridade | Cobertura |
| --------- | ------------------------------------ | ---------------------- | ---------- | --------- |
| RF01      | Login com credenciais válidas       | TC01                   | Alta       | Coberto   |
| RF02      | Rejeição de credenciais inválidas | TC02                   | Alta       | Coberto   |
| RF03      | Validação de campos obrigatórios  | TC03                   | Alta       | Coberto   |
| RF04      | Criar tarefa                         | TC04, TC05, TC12, TC14 | Alta       | Coberto   |
| RF05      | Editar tarefa                        | TC08, TC09, TC10       | Média     | Coberto   |
| RF06      | Alterar estado da tarefa             | TC06, TC07             | Alta       | Coberto   |
| RF07      | Eliminar tarefa                      | TC11, TC12             | Alta       | Coberto   |
| RF08      | Terminar sessão                     | TC13                   | Alta       | Coberto   |

---

## Requisitos Não Funcionais

| Requisito | Descrição     | Estratégia de Teste                                        |
| --------- | --------------- | ----------------------------------------------------------- |
| RNF01     | Usabilidade     | Verificação manual da interface                           |
| RNF02     | Desempenho      | Testes de desempenho com k6                                 |
| RNF03     | Compatibilidade | Execução E2E em diferentes browsers                       |
| RNF04     | Segurança      | Testes de autenticação e acesso indevido                  |
| RNF05     | Testabilidade   | Utilização de seletores estáveis nos testes automáticos |

---

## Cobertura dos Requisitos

Total de requisitos funcionais: 8

Requisitos cobertos: 8

Cobertura funcional:

8 / 8 × 100 = 100%

Cobertura dos requisitos funcionais: 100%

---

## Relação entre Requisitos e Testes

RF01
→ TC01
→ Login válido

RF02
→ TC02
→ Login inválido

RF03
→ TC03
→ Campos obrigatórios

RF04
→ TC04
→ TC05
→ TC12
→ TC14
→ Gestão da criação de tarefas

RF05
→ TC08
→ TC09
→ TC10
→ Edição de tarefas

RF06
→ TC06
→ TC07
→ Alteração de estado

RF07
→ TC11
→ TC12
→ Eliminação de tarefas

RF08
→ TC13
→ Logout
