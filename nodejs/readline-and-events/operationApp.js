/**
 * Exercice
 * créér une application en utilisant readline de node
 * qui prends en entrée deux nombres et afficher
 * le resultat de leur division
 * 
 * faire les opérations usuelles en math
 */
const readline = require('readline');

const opApp = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function addition() {
    console.log("Pour faire l'opération d'addition :")
    opApp.question("\nVeuillez saisir le premier nombre : ", (number1) => {
        opApp.question("Veuillez saisir le deuxième nombre : ", (number2) => {
            const result = parseFloat(number1) + parseFloat(number2);
            console.log(`Le resultat de ${number1} + ${number2} = ${result}`);
            main();
        });
    });
}

function subtraction() {
    console.log("Pour faire l'opération de soustraction :")
    opApp.question("\nVeuillez saisir le premier nombre : ", (number1) => {
        opApp.question("Veuillez saisir le deuxième nombre : ", (number2) => {
            const result = parseFloat(number1) - parseFloat(number2);
            console.log(`Le resultat de ${number1} - ${number2} = ${result}`);
            main();
        });
    });
}

function multiplication() {
    console.log("Pour faire l'opération de multiplication :")
    opApp.question("\nVeuillez saisir le premier nombre : ", (number1) => {
        opApp.question("Veuillez saisir le deuxième nombre : ", (number2) => {
            const result = parseFloat(number1) * parseFloat(number2);
            console.log(`Le resultat de ${number1} x ${number2} = ${result}`);
            main();
        });
    });
}

function division() {
    console.log("Pour faire l'opération de division :")
    opApp.question("\nVeuillez saisir le premier nombre : ", (number1) => {
        opApp.question("Veuillez saisir le deuxième nombre : ", (number2) => {
            if(parseFloat(number2) === 0) {
                console.log("La division par 0 est imposible !")
            } else {
                const result = parseFloat(number1) / parseFloat(number2);
                console.log(`Le resultat de ${number1} / ${number2} = ${result}`);
            }
            main();
        });
    });
}

/**
 * pour quitter l'app
 */
function exitApp() {
    console.log("\nMerci d'avoir utilisé l'application , Au revoir ! \n");
    opApp.close();
}

/**
 * la fonction main
 */
function main() {
    console.log("\nChoisissez une option en saississant le chiffre correspondant :");
    console.log("1 - Opération d'addition");
    console.log("2 - Opération de soustraction");
    console.log("3 - Opération de multiplication");
    console.log("4 - Opération de division");
    console.log("5 - Quitter l'application");

    opApp.question("\nFaites votre choix : ", (option) => {
        switch (option) {
            case '1':
                addition();
                break;

            case '2':
                subtraction();
                break;

            case '3':
                multiplication();
                break;

            case '4':
                division();
                break;

            case '5':
                exitApp();
                break;
        
            default:
                console.log("\nOption invalide, Veuillez choisir une option valide !");
                main();
        }
    })
}

console.log("**************************************************************");
console.log("*********** Bienvenu dans l'application de calcule ***********");
console.log("**************************************************************");
main();
