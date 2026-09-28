# site-soma

Exercício de requisições **POST** com **Express.js** no **Node.js**. O servidor expõe quatro rotas que recebem dois números via JSON e retornam o resultado de uma operação matemática (soma, subtração, multiplicação e divisão).

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (inclui o npm)
- [Postman](https://www.postman.com/downloads/) (ou similar) para testar as rotas

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/SEU-USUARIO/site-soma.git
cd site-soma
npm install
```

## Como rodar

```bash
node app.js
```

Se tudo estiver certo, o terminal mostra:

```
App de Exemplo escutando na porta http://localhost:3001/
```

Abra `http://localhost:3001` no navegador para confirmar que o servidor está no ar (deve aparecer "Oi, mundo :-)").

## Rotas disponíveis

Todas as rotas abaixo usam o método **POST** e esperam um corpo em **JSON** com dois números, `a` e `b`.

| Rota              | Operação       |
|-------------------|----------------|
| `/soma`           | Adição         |
| `/subtracao`      | Subtração      |
| `/multiplicacao`  | Multiplicação  |
| `/divisao`        | Divisão        |

### Exemplo de requisição

```
POST http://localhost:3001/soma
Content-Type: application/json

{
  "a": 5,
  "b": 3
}
```

**Resposta:**

```
O resultado da soma de 5 e 3 é 8
```

A rota `/divisao` retorna erro `400` caso `b` seja `0`.

## Testando com o Postman

1. Abra o Postman e crie uma nova requisição.
2. No dropdown ao lado da URL, troque o método para **POST** (por padrão vem como GET).
3. Digite a URL da rota desejada, por exemplo `http://localhost:3001/soma`.
4. Vá na aba **Body** → marque **raw** → escolha **JSON** no dropdown à direita.
5. Digite o JSON com os valores, por exemplo:
   ```json
   { "a": 5, "b": 3 }
   ```
6. Clique em **Send** e confira a resposta na parte de baixo da tela.
7. Repita o processo trocando a URL para `/subtracao`, `/multiplicacao` e `/divisao`.

## Estrutura do projeto

```
site-soma/
├── app.js          # servidor Express e rotas
├── package.json
└── README.md
```

## Autor

Lucas Oliveira Chaves — exercício da disciplina de Ambientes de Software (Unifor).
