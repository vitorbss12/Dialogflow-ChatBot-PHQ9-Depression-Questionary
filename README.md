# ChatBot - Aplicação Questionário PHQ-9
Dependências a serem instaladas:
Instalação do node.js (Reinicie o VS Code)

    https://nodejs.org/en/download/

Para uso do GitHub é necessário instalar o GIT no dispositivo:

    https://git-scm.com/

É IMPORTANTE SEMPRE O USO DO TERMINAL CMD NO VSCODE (NÃO POWERSHELL)

# Clonar repositório:
Caso clone o projeto em uma pasta especifica mude para a pasta raiz do projeto

        cd depressão1.0-master

# Na pasta do projeto:
Instalação dos pacotes npm – Gerenciados Node.js *NA PASTA FUNCTIONS
        
        cd functions
        npm install

**instalação das dependencias (Caso de erro)

        npm install firebase-functions@3.7.0
        npm install firebase-admin@^8.0.0

Instalação do mySQL

        npm install mysql
        
Instalação firebase tools

        npm install -g firebase-tools

Login no firebase para pode fazer o deploy do código

        firebase login
        *Yes para o CLI
    
Faça o login na conta google que vai estar linkada ao projeto. Caso o navegador não inicie automaticamente, basta clicar na URL lançada no terminal.
Para acessar o projeto com diretorio já configurado.

    	firebase use NOME_DO_PROJETO
 
Agora já esta conectado ao Dialogflow, qualquer alteração feita no arquivo index.js sera enviado para o dialogflow. Após alteração basta um deploy.

    	firebase deploy

O Firebase Deploy pode demorar, principalmente na primeira execução.
Para testes é possível usar a versão demo do Bot, no painel do Dialogflow basta ir em integrations -> web demo -> Selecionar o link na parte superior.

DEMO: https://bot.dialogflow.com/e301d948-7c0b-4a4c-8e56-c0123a2d1165

# Pull request GitHub
No canto inferior esquerdo do Visual Code Studio é possivel fazer login usando a conta criada no GitHub, isso facilitará o acesso as permissões do projeto. 
Caso seu VS Code não esteja conectado ao GitHub basta instalar a última atualização do plugin:
GitHub Pull Requests and Issues ou Solicitações de pull e problemas do GitHub

Na Pasta Raiz
        cd ..

Após instalação declarar seu e-mail e usuário no CMD;
        git config --global user.email "you@example.com"
        git config --global user.name "Your Name"

Crie uma branch para alteração do código
        git checkout -b NOME_DA_BRANCH

Após alteração em algum arquivo para salvar alteraçõe no GitHub:
        git add .
        git commit -m "MENSAGEM"
        git push origin NOME_DA_BRANCH

Adicionar index.js (Assim como aquivos na pasta Functions, isso se dá por um conflito no Firebase e GitHub)

        git add functions/index.js
        git commit -m "MENSAGEM"
        git push origin NOME_DA_BRANCH

# Variáveis de ambiente:

Alterar o nome do arquivo .env.example para .env e adicionar as variáveis de ambiente, substituindo os valores pelas informações do seu banco de dados.

Caso as variáveis não estejam funcionando no arquivo .env, remova o trecho do index.js e faça a atribuição manualmente.
````JavaScript
const dotenv = require("dotenv");
dotenv.config();
````

Alterações manuais
````JavaScript
var MYSQL_HOST = "HOST";
var MYSQL_USER = "USER";
var MYSQL_PASS = "PASS";
var MYSQL_DB = "DB";
````