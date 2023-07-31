const readline = require('readline');

// interface readline
const rlApp = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// tableau des contacts (name, phone)
const contacts = [];

/**
 * add user contact
 */
function addContact() {
    rlApp.question("\nSaisissez le nom du contact : ", (name) => {
        rlApp.question("Saisissez le numéro de téléphone : ", (phone) => {
            contacts.push({name, phone});
            console.log("\nContact ajouté avec succès !");
            showMenu();
        });
    });
}

/**
 * show contact list
 */
function showContacts() {
    if (contacts.length > 0) {
        console.log("\n");
        console.log("--------------------------------------------------");
        console.log("*************** Liste des contacts ***************");
        console.log("--------------------------------------------------");
        
        contacts.forEach((contactItem, contactIndex) => {
            console.log(`${contactIndex + 1} - ${contactItem.name} - ${contactItem.phone}`);
            console.log("--------------------------------------------------");
        });
    } else {
        console.log("\nAucun contact trouvé !");
    }

    showMenu();
}

/**
 * search contact (find contact)
 */
function searchContact() {
    rlApp.question("\nSaisissez le nom du contact à recherhcer : ", (search) => {
        const contact = contacts.find((c) => c.name.toLowerCase() === search.toLowerCase());
        if(contact) {
            console.log("\n");
            console.log("---------------------------------------------------");
            console.log("**************** Contact recherché ****************");
            console.log("---------------------------------------------------");
            console.log(`Nom du contact  : ${contact.name}`);
            console.log(`N° de téléphone : ${contact.phone}`);
            console.log("---------------------------------------------------");
        } else {
            console.log("\nContact non trouvé !");
        }

        showMenu();
    });
}

/**
 * exit app / exit readline interface
 */
function exitApp() {
    console.log("\nMerci d'avoir utilisé l'application , Au revoir ! \n");
    rlApp.close();
}

/**
 * fonction principale
 * interface utilisateur (show menu)
 */
function showMenu() {
    console.log("\nChoisissez une option en saississant le chiffre correspondant :");
    console.log("1 - Ajouter un contact");
    console.log("2 - Afficher la liste des contacts");
    console.log("3 - Rechercher un contact");
    console.log("4 - Quitter l'application");

    rlApp.question("\nSaisissez votre choix : ", (option) => {
        switch (option) {
            case '1':
                addContact();
                break;

            case '2':
                showContacts();
                break;

            case '3':
                searchContact();
                break;
            
            case '4':
                exitApp();
                break;
            
            default:
                console.log("\nOption invalide, Veuillez choisir une option valide !");
                showMenu();
        }
    })
}

console.log("**************************************************************");
console.log("***** Bienvenu dans l'application de gestion de contacts *****");
console.log("**************************************************************");
showMenu();
