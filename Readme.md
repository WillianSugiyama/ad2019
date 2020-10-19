# Como rodar este projeto:

## Back End:

- Mudar de .env.sample para .env
- Alterar os nomes das variaveis de ambientes para as que você definir, ou deixar o padrão ( junto com o docker-compose do mongodb );
- Adicionar o seu e-mail (GMAIL) e sua SENHA (GMAIL) para que o backend envie corretamente o e-mail para os sorteados
- Subir o docker-compose do mongo db com um `docker-compose up -d`
- Rodar um install da aplicação com o `npm install`
- Subir a aplicação em desenvolvimento com um `npm run backend:dev`

## Front End:

- Rodar um `npm install`
- Rodar um `yarn start`

e pronto, a aplicação estará pronta para testes.
