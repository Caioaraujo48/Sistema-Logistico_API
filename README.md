# 🚚 Sistema Logístico API

Uma API RESTful desenvolvida em Node.js com Express para gerenciar operações de um sistema logístico. Atualmente, a persistência de dados é feita através de **arquivos JSON locais**, simulando um banco de dados relacional para agilidade no desenvolvimento.

## ⚠️ AVISO IMPORTANTE

**Persistência de Dados:** Este projeto utiliza arquivos JSON (dentro de `src/database/`) para simular o banco de dados. Os dados **não são persistentes** após o servidor ser reiniciado (a não ser que você implemente a lógica de salvar o arquivo JSON a cada alteração).

## 🚀 Tecnologias Utilizadas

| Categoria | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Backend** | Node.js | Ambiente de execução JavaScript. |
| **Framework** | Express | Framework web minimalista e flexível para construir a API. |
| **Simulação DB** | **Arquivos JSON** | Usados para armazenar temporariamente os dados (`usuarios.json`, `cargas.json`). |

## 📐 Arquitetura do Projeto (M-S-C)

A arquitetura de camadas é mantida, garantindo que a lógica de negócio seja isolada. Se o projeto migrar para PostgreSQL futuramente, apenas a camada **Model** precisará ser reescrita.

* `src/controllers`: Recebe as requisições HTTP (`req`, `res`), faz validações iniciais e chama a camada Service.
* `src/services`: Contém a **Regra de Negócio** (ex: fazer hash de senha, validações). Chama os Models.
* `src/models`: Responsável pela **interação com o arquivo JSON**. Ele simula as operações CRUD lendo e escrevendo no arquivo.

## ⚙️ Instalação e Configuração

Siga os passos abaixo para clonar e configurar a API em seu ambiente de desenvolvimento.

### Pré-requisitos

Você deve ter instalado em sua máquina:

* [Node.js](https://nodejs.org/) (versão LTS recomendada)

### Clonar o Repositório

```bash
git clone [https://github.com/Caioaraujo48/Sistema-Logistico_API.git](https://github.com/Caioaraujo48/Sistema-Logistico_API.git)
cd Sistema-Logistico_API
```


## 🗺️ Endpoints da API

Esta seção detalha todos os endpoints disponíveis na API, incluindo o método HTTP, o caminho da URL e uma breve descrição da sua funcionalidade.
| Método HTTP | Rota (Endpoint) | Descrição |
| :---: | :--- | :--- |
| **--- ENTIDADE: USUÁRIOS ---** | | |
| `GET` | `/usuarios` | Lista todos os usuários cadastrados. |
| `GET` | `/usuarios/:id` | Recupera os detalhes de um usuário específico pelo ID. |
| `POST` | `/usuarios` | Cria um novo usuário no sistema. |
| `PUT` | `/usuarios` | Atualiza completamente as informações de um usuário existente. |
| `DELETE` | `/usuarios` | Remove um usuário específico. |
| **--- ENTIDADE: PRODUTOS ---** | | |
| `GET` | `/produtos` | Lista todos os produtos disponíveis. |
| `GET` | `/produtos/:id` | Recupera os detalhes de um produto específico pelo ID. |
| `POST` | `/produtos` | Cria um novo produto. |
| `PUT` | `/produtos` | Atualiza completamente as informações de um produto existente. |
| `DELETE` | `/produtos` | Remove um produto específico. |
| **--- ENTIDADE: NOTAS FISCAIS ---** | | |
| `GET` | `/notasFiscais` | Lista todas as notas fiscais emitidas. |
| `GET` | `/notasFiscais/:id` | Recupera os detalhes de uma nota fiscal específica pelo ID. |
| `POST` | `/notasFiscais` | Emite uma nova nota fiscal. |
| `PUT` | `/notasFiscais` | Atualiza completamente os dados de uma nota fiscal. |
| `DELETE` | `/notasFiscais` | Cancela/Remove uma nota fiscal específica. |
| **--- ENTIDADE: ENTREGAS ---** | | |
| `GET` | `/entregas` | Lista todas as entregas registradas. |
| `GET` | `/entregas/:id` | Recupera os detalhes de uma entrega específica pelo ID. |
| `POST` | `/entregas` | Cria um novo registro de entrega. |
| `PUT` | `/entregas` | Atualiza completamente o status ou dados de uma entrega. |
| `DELETE` | `/entregas` | Cancela/Remove uma entrega. |
| **--- ENTIDADE: ENTREGADORES ---** | | |
| `GET` | `/entregadores` | Lista todos os entregadores disponíveis. |
| `GET` | `/entregadores/:id` | Recupera os detalhes de um entregador específico pelo ID. |
| `POST` | `/entregadores` | Cadastra um novo entregador. |
| `PUT` | `/entregadores` | Atualiza completamente os dados cadastrais de um entregador. |
| `DELETE` | `/entregadores` | Desativa/Remove um entregador. |
| **--- ENTIDADE: ENTREGAS PRODUTO ---** | | |
| `GET` | `/entregasProduto` | Lista todas as associações entre entregas e produtos. |
| `GET` | `/entregasProduto/:id` | Recupera a associação específica (entrega-produto) pelo ID. |
| `POST` | `/entregasProduto` | Cria uma nova associação entre uma entrega e um produto. |
| `PUT` | `/entregasProduto` | Atualiza a associação entre entrega e produto (ex: quantidade). |
| `DELETE` | `/entregasProduto` | Remove a associação entre entrega e produto. |

---