# OpenChat

Backend da aplicação OpenChat desenvolvida para um desafio utilizando a Stack MERN.
O App consiste em um chat aberto onde usuários podem se cadastrar e enviar mensages em tempo real.

# O projeto
- [frontend](https://github.com/gustavocrvls/open-chat-frontend)
- [backend](https://github.com/gustavocrvls/open-chat-backend)

# Perfis de Usuário

- Usuário Padrão: Pode enviar e receber mensagens no grupo.
- Admin: Pode enviar, receber e filtrar mensagens no grupo.

# Funcionalidades

- Cadastrar usuários.
- Salvar novas mensagens no banco de dados.
- Enviar atualizações para o frontend quando uma mensagem for adicionada.
- Filtrar mensagens.

# Instalação

```bash
> npm install
```

# Inicialização
Precisa ter o mongodb rodando na máquina.

```bash
> npm start
```
# Author

Gustavo Carvalho Silva - [gustavocrvl42@gmail.com](gustavocrvl42@gmail.com) 

# Melhorias Futuras

- Adicionar autenticação no envio e recebimento das mensagens;
- Adicionar a autenticação no nas filtragems feitas pelo usuário do tipo Admin;
- Implementar função de excluir mensagens no perfil de Admin;