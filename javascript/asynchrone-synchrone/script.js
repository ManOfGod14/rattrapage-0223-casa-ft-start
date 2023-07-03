/**
 * 
 */
// let i = 0;
// while(i < 1000000) {
//     i++;
// }
// alert("La suite de mon code!");

// setTimeout : s'execute de facon asynchrone
// setTimeout(alert, 3000, 'Bonjour tout le monde !');
// alert("La suite de mon code !");

/**
 * les promesses en JS
 */
// syntaxe d'une promesse
const promesse = new Promise((resolve, reject) => {
    //
});

// async function salutation() {
//     return "Bonjour la classe ! ";
// }
// await salutation();

async function fnTest() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Promesse résolu !"), 3000);
    });

    let result = await promise; // j'attend que ma promesse soit resolue ou rejetée
    alert(result);
}
// fnTest();

/**
 * Stockage des données dans le navigateur
 */
// les cookie en JS : c'est un fichier contenant une donnée
// console.log(document.cookie);
// 1h = 3 600 s => 3 600 000 ms
// 1 jour = 24 * 3 600 000 => 86 400 000 ms
let expire = new Date(Date.now() + 86400000).toUTCString();
console.log(expire);
document.cookie = 'user=Maliki; path=/; domain=127.0.0.1; expires='+ expire +'; secure;';

// API web storage : sessionStorage / localStorage
localStorage.setItem('prenom', 'Maliki');
let prenom = localStorage.getItem('prenom');
console.log(prenom);

// excercice
let htmlElt = document.querySelector('html');
let btnDefault = document.querySelector('#btnDefault');
let btnDark = document.querySelector('#btnDark');
let btnRed = document.querySelector('#btnRed');

btnDark.addEventListener('click', function() {
    // if(localStorage.getItem('bgTheme')) {
    //     updateBgTheme();
    // } else {
    //     setBgTheme('000');
    // }
    setBgTheme('000');
});

btnRed.addEventListener('click', function() {
    setBgTheme('ff3300');
});

btnDefault.addEventListener('click', function() {
    setBgTheme('fff');
});

/**
 * permet de créer une clé bgTheme dans le localStorage
 * en suite on affecte la couleur à la cléb (lui donner un valeur)
 * en fin on fait appel la fonction updateBgTheme
 */
function setBgTheme(color) {
    localStorage.setItem('bgTheme', color);
    updateBgTheme();
}

/**
 * permet de récupérer la valeur de clé bgTheme qui est dans le localStorage
 * un fois récupérer on change, on affecte cette valeur au background
 */
function updateBgTheme() {
    let bg = localStorage.getItem('bgTheme');
    htmlElt.style.backgroundColor = '#'+bg;
}

/**
 * sessionStorage
 */
let btnSessionStorage = document.querySelector("#btnSessionStorage");
btnSessionStorage.addEventListener('click', function() {
    sessionStorage.setItem('nom', 'TCHEROU');
    let nom = sessionStorage.getItem('nom');
    console.log(nom);
})

/**
 * modules (import/export)
 */
import {
    salutation,
    moduleUser
} from './mod_test.js';

let btnModule1 = document.querySelector("#btnModule1");
btnModule1.addEventListener("click", function() {
    salutation("Maliki TCHEROU");
})

let btnModuleUser = document.querySelector("#btnModuleUser");
btnModuleUser.addEventListener("click", function() {
    document.querySelector("#pModuleUser").innerHTML = JSON.stringify(moduleUser);
})


