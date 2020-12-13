# Web

Criação de app react, sem utilização do create react app, a fim de entender os conceitos que rodam por trás da abstração.

## Instalações
- **React**
- **React-dom:** React para Web.
<br>
- **Babel:** Transpilar o código para que o browser entenda.
- **@babel/cli:** Interface de linha de comando para interagir com o babel.
- **@babel/core:** Módulo principal do babel.
- **@babel/preset-env:** Consegue converter de acordo com o ambiente que está sendo executado, por exemplo o Internet Explorer 10, Chrome 88. Ao configurar estas informações, ficará encarregado de transpilar o js para que estes ambientes entendam.
- **@babel/preset-react:** Adicionar funcionalidades do react na conversão.
<br>
- **Webpack:** Para cada tipo de arquivo(js,css,png), converterá o código para que o javascript entenda.
    - **Loaders do Webpack:** converte para o javascript poder entender cada código(babel-loader, css-loader, image-loader, file-loader).
- **webpack-cli:** Command line interface para utilizar comandos do webpack.
- **webpack-dev-server:** Transpilar toda vez que realiza um novo bundle.

## Exemplos de comandos

yarn babel src/index.js --out-file public/bundle.js