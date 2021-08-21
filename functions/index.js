// Copyright 2017, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Dialogflow fulfillment getting started guide:
// https://dialogflow.com/docs/how-tos/getting-started-fulfillment

'use strict';

const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
const mysql = require('mysql');

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

  var MYSQL_HOST = "bancopibic.mysql.dbaas.com.br";
  var MYSQL_USER = "bancopibic"; 
  var MYSQL_PASS = "bancopibic2021";
  var MYSQL_DB = "bancopibic";
  var lastusername = "none";
  var lastname = "none";

  function welcome (agent) {
    agent.add(`Welcome to my agent!`);
  }

  function fallback (agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }

//connect to database
  function connectToDatabase () {
  	const connection = mysql.createConnection({
		host     : MYSQL_HOST,
		user     : MYSQL_USER,
		password : MYSQL_PASS,
		database : MYSQL_DB
		});
		
	return new Promise((resolve, reject) => {
		connection.connect();
		resolve(connection);
	});
  }
//insert to database
  function insertIntoDatabase(connection, data){
  	return new Promise((resolve, reject) => {
      connection.query('INSERT INTO usuarios SET ?', data, (error, results, fields) => {
        resolve(results);
      });
    });
   }

//create user to database
  function CreateUsers (agent) {
	const data = {
		name: agent.parameters.name,
		username: agent.parameters.username,
		pass: agent.parameters.pass
	};
  //lastname = data.name;
  //lastusername = data.username;
	return connectToDatabase()
	.then(connection => {
		return insertIntoDatabase(connection, data)
		.then(result => {
			agent.add(`Seu usuário foi criado com sucesso ` + data.name);
			connection.end();
		});
	});
}

//query database
function queryDatabase(connection){
    return new Promise((resolve, reject) => {
      connection.query('SELECT * from usuarios', (error, results, fields) => {
        resolve(results);
      });
    });
}

//read login informations
//function Login(agent){
//  return connectToDatabase()
//  .then(connection => {
//    return queryDatabase(connection)
//    .then(result => {
//      agent.add(`First name: ${result[0].name}`)
//      connection.end();
//    });
//  });
//}

//read login informations
function Login(agent){
  const loginemail = agent.parameters.username;
  const loginpass = agent.parameters.loginpass;
  return connectToDatabase()
  .then(connection => {
    return queryDatabase(connection)
    .then(result => {
      console.log(result);
      result.map(usuarios => {
        if(loginemail === usuarios.username){
          if(loginpass === usuarios.pass) {
            //lastname = usuarios.name;
            //lastusername = usuarios.username;
            agent.add(`Que bom te ter de volta ${usuarios.name}`);
            //agent.add(`First Name: ${usuarios.name}`);
          } else {
            agent.add(`Senha incorreta. Digite "Login" para tentar novamente ou "Criar" para criar usuário.`);
          };
        } else {
          agent.add(`Usuário não encontrado. Digite "Login" para tentar novamente ou "Criar" para criar usuário.`);
        };
      });     
      connection.end();
    });
  });
}

function depressionTest(agent) {
  var rp1, rp2, rp3, rp4, rp5, rp6, rp7, rp8, rp9, dpResult;
  if(agent.parameters['p1'].toLowerCase() == 'nunca') {
    rp1 = 0;
  } else if(agent.parameters['p1'].toLowerCase() == 'varios dias') {
    rp1 = 1;
  } else if(agent.parameters['p1'].toLowerCase() == 'mais da metade dos dias') {
    rp1 = 2;
  } else if(agent.parameters['p1'].toLowerCase() == 'quase todos os dias') {
    rp1 = 3;
  };

  if(agent.parameters['p2'].toLowerCase() == 'nunca') {
    rp2 = 0;
  } else if(agent.parameters['p2'].toLowerCase() == 'varios dias') {
    rp2 = 1;
  } else if(agent.parameters['p2'].toLowerCase() == 'mais da metade dos dias') {
    rp2 = 2;
  } else if(agent.parameters['p2'].toLowerCase() == 'quase todos os dias') {
    rp2 = 3;
  };

  if(agent.parameters['p3'].toLowerCase() == 'nunca') {
    rp3 = 0;
  } else if(agent.parameters['p3'].toLowerCase() == 'varios dias') {
    rp3 = 1;
  } else if(agent.parameters['p3'].toLowerCase() == 'mais da metade dos dias') {
    rp3 = 2;
  } else if(agent.parameters['p3'].toLowerCase() == 'quase todos os dias') {
    rp3 = 3;
  };

  if(agent.parameters['p4'].toLowerCase() == 'nunca') {
    rp4 = 0;
  } else if(agent.parameters['p4'].toLowerCase() == 'varios dias') {
    rp4 = 1;
  } else if(agent.parameters['p4'].toLowerCase() == 'mais da metade dos dias') {
    rp4 = 2;
  } else if(agent.parameters['p4'].toLowerCase() == 'quase todos os dias') {
    rp4 = 3;
  };

  if(agent.parameters['p5'].toLowerCase() == 'nunca') {
    rp5 = 0;
  } else if(agent.parameters['p5'].toLowerCase() == 'varios dias') {
    rp5 = 1;
  } else if(agent.parameters['p5'].toLowerCase() == 'mais da metade dos dias') {
    rp5 = 2;
  } else if(agent.parameters['p5'].toLowerCase() == 'quase todos os dias') {
    rp5 = 3;
  };

  if(agent.parameters['p6'].toLowerCase() == 'nunca') {
    rp6 = 0;
  } else if(agent.parameters['p6'].toLowerCase() == 'varios dias') {
    rp6 = 1;
  } else if(agent.parameters['p6'].toLowerCase() == 'mais da metade dos dias') {
    rp6 = 2;
  } else if(agent.parameters['p6'].toLowerCase() == 'quase todos os dias') {
    rp6 = 3;
  };

  if(agent.parameters['p7'].toLowerCase() == 'nunca') {
    rp7 = 0;
  } else if(agent.parameters['p7'].toLowerCase() == 'varios dias') {
    rp7 = 1;
  } else if(agent.parameters['p7'].toLowerCase() == 'mais da metade dos dias') {
    rp7 = 2;
  } else if(agent.parameters['p7'].toLowerCase() == 'quase todos os dias') {
    rp7 = 3;
  };

  if(agent.parameters['p8'].toLowerCase() == 'nunca') {
    rp8 = 0;
  } else if(agent.parameters['p8'].toLowerCase() == 'varios dias') {
    rp8 = 1;
  } else if(agent.parameters['p8'].toLowerCase() == 'mais da metade dos dias') {
    rp8 = 2;
  } else if(agent.parameters['p8'].toLowerCase() == 'quase todos os dias') {
    rp8 = 3;
  };

  if(agent.parameters['p9'].toLowerCase() == 'nunca') {
    rp9 = 0;
  } else if(agent.parameters['p9'].toLowerCase() == 'varios dias') {
    rp9 = 1;
  } else if(agent.parameters['p9'].toLowerCase() == 'mais da metade dos dias') {
    rp9 = 2;
  } else if(agent.parameters['p9'].toLowerCase() == 'quase todos os dias') {
    rp9 = 3;
  };

  dpResult = rp1+rp2+rp3+rp4+rp5+rp6+rp7+rp8+rp9;

  if(dpResult >= 0 && dpResult <= 4 ) {
    agent.add(lastuser +' sua pontuação foi: ' + dpResult + ' - TESTE Sem depressão');
  } else if(dpResult >= 5 && dpResult <= 9) {
    agent.add(lastuser +' sua pontuação foi: ' + dpResult + ' - Transtorno depressivo leve');
  } else if(dpResult >= 10 && dpResult <= 14) {
    agent.add(lastuser +' sua pontuação foi: ' + dpResult + ' - Transtorno depressivo moderado');
  } else if(dpResult >= 15 && dpResult <= 19) {
    agent.add(lastuser +' sua pontuação foi: ' + dpResult + ' - Transtorno depressivo moderadamente grave');
  } else if(dpResult >= 20 && dpResult <= 27) {
    agent.add(lastuser +' sua pontuação foi: ' + dpResult + ' - Transtorno depressivo grave');
  };
}

  // // Uncomment and edit to make your own intent handler
  // // uncomment `intentMap.set('your intent name here', yourFunctionHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  // function yourFunctionHandler(agent) {
  //   agent.add(`This message is from Dialogflow's Cloud Functions for Firebase inline editor!`);
  //   agent.add(new Card({
  //       title: `Title: this is a card title`,
  //       imageUrl: 'https://dialogflow.com/images/api_home_laptop.svg',
  //       text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
  //       buttonText: 'This is a button',
  //       buttonUrl: 'https://docs.dialogflow.com/'
  //     })
  //   );
  //   agent.add(new Suggestion(`Quick Reply`));
  //   agent.add(new Suggestion(`Suggestion`));
  //   agent.setContext({ name: 'weather', lifespan: 2, parameters: { city: 'Rome' }});
  // }

  // // Uncomment and edit to make your own Google Assistant intent handler
  // // uncomment `intentMap.set('your intent name here', googleAssistantHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  // function googleAssistantHandler(agent) {
  //   let conv = agent.conv(); // Get Actions on Google library conv instance
  //   conv.ask('Hello from the Actions on Google client library!'); // Use Actions on Google library
  //   agent.add(conv); // Add Actions on Google library responses to your agent's response
  // }

  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('CreateUsers', CreateUsers);
  intentMap.set('Login', Login);
  intentMap.set('PHQ-9', depressionTest);
  // intentMap.set('<INTENT_NAME_HERE>', googleAssistantHandler);
  agent.handleRequest(intentMap);
});
