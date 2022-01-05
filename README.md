<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabela de Conteúdo</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#tecnologias">Tecnologias</a></li>
      </ul>
    </li>
    <li>
      <a href="#começando">Começando</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-Requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
        <li><a href="#rodando-o-projeto">Rodando o projeto</a></li>
      </ul>
    </li>
    <li><a href="#como-usar">Como usar</a></li>
    <li><a href="#contribuindo">Contribuindo</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre o projeto

Sistema web para listar e cadastrar usuários.



### Tecnologias

* NodeJs
* Express
* MongoDB
* React



<!-- GETTING STARTED -->
## Começando

### Pré-Requisitos

#### Node
- #### Instalação no Windows

  Basta acessar o [site oficial do Node.js](https://nodejs.org/) e fazer o download do instalador.
Além disso, certifique-se de ter `git` disponível em seu PATH, `npm` pode precisar (você pode encontrar o git [aqui](https://git-scm.com/)).

- ##### Instalação no Ubuntu

  Você pode instalar o nodejs e o npm facilmente com apt install, basta executar os seguintes comandos.

      $ sudo apt install nodejs
      $ sudo apt install npm

- ##### Outros sistemas operacionais
  Você pode encontrar mais informações sobre a instalação no [site oficial do Node.js](https://nodejs.org/) e no [site oficial do NPM](https://npmjs.org/).

Se a instalação foi bem-sucedida, você deve ser capaz de executar o seguinte comando.

    $ node --version
    v16.3.0

    $ npm --version
    7.24.0

Se você precisa atualizar o `npm`, pode fazê-lo usando `npm`! Legal, certo? Depois de executar o seguinte comando, basta abrir novamente a linha de comando e ser feliz.

    $ npm install npm -g

####




### Instalação

1. Clone o repositório
   ```sh
   git clone https://github.com/christhian12rv/Users-App.git
   ```
2. Vá até a pasta /backend e instale os pacotes NPM
   ```sh
   npm install
   ```
3. Vá até a pasta /frontend e instale os pacotes NPM
   ```sh
   npm install
   ```




### Rodando o projeto
Para rodar o frontend e o backend juntos, vá até a pasta /backend e execute

    $ npm run dev

Para rodar o backend, vá até a pasta /backend e execute

    $ npm run server

Para rodar o frontend, vá até a pasta /frontend e execute

    $ npm start

Ou vá até a pasta /backend e execute

    $ npm run client

<!-- USAGE EXAMPLES -->
## Como usar

Na rota /registrar, você pode registrar um usuário digitando seu nome.
Na rota inicial "/" são listados todos os usuários cadastrados com seus IDs.



<!-- CONTRIBUTING -->
## Contrubuindo

Se você tiver uma sugestão que torne isso melhor, faça um fork do repositório e crie uma solicitação pull. Você também pode simplesmente abrir um problema com a tag "aprimoramento".
Não se esqueça de dar uma estrela ao projeto! Obrigado novamente!

1. Faça um fork do projeto
2. Crie seu Feature Branch (`git checkout -b feature / AmazingFeature`)
3. Faça commit de suas alterações (`git commit -m 'Add some AmazingFeature'`)
4. Envie para o Branch (`git push origin feature / AmazingFeature`)
5. Abra uma solicitação pull

<p align="right">(<a href="#top">voltar para o topo</a>)</p>