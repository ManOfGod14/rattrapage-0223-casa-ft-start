/**
 * Event-Driven architecture
 */
// const EventEmitter = require('events');
// const { read } = require('fs');

// // création d'une instance de la classe EventEmitter
// const eventEmitter = new EventEmitter();

// // Définition d'un evenement
// const eventHandler = (value) => {
//     console.log("Ma valeur passée en paramètre : "+ value)
// }

// // Enregistrement de mon evenement eventHandler
// eventEmitter.on("myEvent", eventHandler);

// // Simulation de l'evenement
// eventEmitter.emit('myEvent', "Hello Maliki !");

/**
 * readline module (nodejs)
 */
const readline = require('readline');

// création de l'interface readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// question dans la console nodejs
// name : va stocker la réponse que l'utilisateur va donner dans la console
rl.question("Comment vous vous appelez ? ", (name) => {
    console.log("Réponse de l'utilisateur : "+ name);

    // fermeture de l'interface readline
    rl.close();
});

