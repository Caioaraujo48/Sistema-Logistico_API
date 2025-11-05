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
| **Segurança** | `bcrypt` | Utilizado para hash de senhas de forma segura. |
| **Produtividade** | `dotenv` | Gerenciamento de variáveis de ambiente. |
| **Desenvolvimento**| `nodemon` | Reinicia o servidor automaticamente durante o desenvolvimento. |

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

### 1. Clonar o Repositório

```bash
git clone [https://github.com/Caioaraujo48/Sistema-Logistico_API.git](https://github.com/Caioaraujo48/Sistema-Logistico_API.git)
cd Sistema-Logistico_API
