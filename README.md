# Depressão1.0-master

Dependências a serem instaladas:
Instalação do node.js (Reinicie o VS Code)
	https://nodejs.org/en/download/
Para uso do GitHub é necessário instalar o GIT no dispositivo:
        https://git-scm.com/

É IMPORTANTE SEMPRE O USO DO TERMINAL CMD NO VSCODE (NÃO POWERSHELL)

# Clonar repositório:
git clone https://github.com/vitorbss12/depressao1.0-master.git

Caso clone o projeto em uma pasta especifica mude para a pasta raiz do projeto
    cd depressão1.0-master

# Na pasta do projeto:
Instalação dos pacotes npm – Gerenciados Node.js *NA PASTA FUNCTIONS
        
        cd functions
        npm install
        **instalação das dependencias (Caso de erro)
	    npm install firebase-functions@3.7.0
	    npm install firebase-admin@^8.0.0

# Instalação firebase tools

    Ainda na pasta functions
    npm install -g firebase-tools

    Login no firebase para pode fazer o deploy do código
        firebase login
        *Yes para o CLI
    Faça o login na conta google que vai estar linkada ao projeto. Caso o navegador não inicie automaticamente, basta clicar na URL lançada no terminal.
    Para acessar o projeto com diretorio já configurado (Que vamos usar nos projetos da PIBIC)
	firebase use depwhats-syptni
 
Agora já esta conectado ao dialogflow, qualquer alteração feita no arquivo index.js sera enviado para o dialogflow. Após alteração basta um deploy.
	firebase deploy (sempre salvar o arquivo antes de fazer o deploy, atalho ctrl + S)

    O Firebase Deploy pode demorar, principalmente na primeira execução. Por conta da atualização do Node.js
    Para testes é possivel usar a versão demo do Bot, no painel do dialogflow basta ir em integrations -> web demo -> Selecionar o link na parte superior.
    O link da versão 1 e:
    https://bot.dialogflow.com/3cd7d233-f4b6-40a8-9d33-291a250fe295

# Pull request GitHub
    No canto inferior esquerdo do Visual Code Studio é possivel fazer login usando a conta criada no GitHub, isso facilitará o acesso as permissões do projeto. 
    Caso seu VS Code não esteja conectado ao GitHub basta instalar a última atualização do plugin:
    GitHub Pull Requests and Issues ou Solicitações de pull e problemas do GitHub

        Na Pasta Raiz cd ..
        git init

    Após instalação declarar seu e-mail e usuário no CMD;
        git config --global user.email "you@example.com"
        git config --global user.name "Your Name"

    

    Após alteração em algum arquivo para salvar alteraçõe no GitHub:
    git branch -M main

    Add index.js
    git add functions/index.js

    git commit -m "commit" path/file (Faça o commit com as modificações realizadas).
    git push

# Faça Push apenas nos arquivos com código, um push completo enviará todos as dependências do Node e Firebase