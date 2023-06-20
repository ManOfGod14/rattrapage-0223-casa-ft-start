/**
 * 
 */
// les propriétés window
let eltIdP1 = document.getElementById('idP1');
eltIdP1.innerHTML = "Taille de la fenetre extérieure : "+ window.outerWidth + '*' + window.outerHeight;

let eltIdP2 = document.getElementById('idP2');
eltIdP2.innerHTML = "Taille de la fenetre intérieure : "+ window.innerWidth + '*' + window.innerHeight;

// les méthodes window
let fenetre;
const winSize = "width=500, height=500";

let eltIdP3 = document.getElementById('idP3');
eltIdP3.addEventListener('click', openYoutubeWindow);
function openYoutubeWindow() {
    const myUrl = "https://www.youtube.com/watch?v=ffXL1dw3Unc&list=RDMMAA2zgrweqFA&index=3";
    const myUrl2 = "https://www.google.com/";
    const myUrl3 = "http://127.0.0.1:5500/javascript/initiation/index.html";
    fenetre = window.open(myUrl3, '', winSize);
}

let eltIdP4 = document.getElementById('idP4');
eltIdP4.addEventListener('click', resizeWindowBy);
function resizeWindowBy() {
    fenetre.resizeBy(400, 300);
}

let eltIdP5 = document.getElementById('idP4');
eltIdP5.addEventListener('click', resizeWindowTo);
function resizeWindowTo() {
    fenetre.resizeTo(960, 720);
}

let eltIdP6 = document.getElementById('idP6');
eltIdP6.addEventListener('click', moveWindowBy);
function moveWindowBy() {
    fenetre.moveBy(300, 300);
}

let eltIdP7 = document.getElementById('idP7');
eltIdP7.addEventListener('click', moveWindowTo);
function moveWindowTo() {
    fenetre.moveTo(0, 0);
}

let eltIdP8 = document.getElementById('idP8');
eltIdP8.addEventListener('click', closeWindow);
function closeWindow() {
    fenetre.close();
}

/**
 * Revision sur les fonctions
 */
// fonction flechée
let fnFleche = (a, b) => {
    console.log("fnFleche ("+ a +" + "+ b +") = " + (a + b));
}
fnFleche(5, 9);

// fonction anonyme
let fnAnonyme = function (x, y) {
    console.log("fnAnonyme ("+ x +" + "+ y +") = " + (x + y));
}
fnAnonyme(2, 3);

// fonction anonyme auto exécuté
(function (c, d) {
    console.log("auto fnAnonyme ("+ c +" + "+ d +") = " + (c + d));
})(9, 10);

/**
 * Objet navigator
 */
// const pi = 3.15;
let  navIdP1 = document.querySelector('#navIdP1');
navIdP1.innerHTML = 
"Langue du navigateur : " +navigator.language + "<br />" +
"Cookies autorisés : " + navigator.cookieEnabled + "<br />" +
"Plateforme utilisé : " + navigator.platform;

// géolocalisation
function coordonneesGeo(pos) {
    let crd = pos.coords;
    // console.log(crd);

    let lat = crd.latitude;
    let lng = crd.longitude;

    document.querySelector('#navIdP2').innerHTML = "Latitude: " + lat;
    document.querySelector('#navIdP3').innerHTML = "Longitude: " + lng;
}
navigator.geolocation.getCurrentPosition(coordonneesGeo);

/**
 * Objet History
 */
let hIdP1 = document.querySelector('#hIdP1');
hIdP1.innerHTML = "Nombre de pages vsités : " + history.length;

// récupération des 3 boutons
let hIdBtn1 = document.querySelector('#hIdBtn1');
let hIdBtn2 = document.querySelector('#hIdBtn2');
let hIdBtn3 = document.querySelector('#hIdBtn3');

// gestionnaaire d'évenement des boutons
hIdBtn1.addEventListener('click', fnGo);
hIdBtn2.addEventListener('click', fnBack);
hIdBtn3.addEventListener('click', fnForward);

// les fonction des exécutions les boutons
function fnGo() {
    history.go(-2);
}

function fnBack() {
    history.back(); // history.go(-1)
}

function fnForward() {
    history.forward(); // history.go(1)
}

/**
 * Objet Location
 */
// récupération des 3 boutons
let hIdBtn4 = document.querySelector('#hIdBtn4');
let hIdBtn5 = document.querySelector('#hIdBtn5');
let hIdBtn6 = document.querySelector('#hIdBtn6');

// gestionnaaire d'évenement des boutons
hIdBtn4.addEventListener('click', fnRecharge);
hIdBtn5.addEventListener('click', fnAssigne);
hIdBtn6.addEventListener('click', fnRemplace);

// les fonction des exécutions les boutons
function fnRecharge() {
   location.reload();
}

function fnAssigne() {
   location.assign('http://127.0.0.1:5500/javascript/initiation/page2.html')
}

function fnRemplace() {
    location.replace('http://127.0.0.1:5500/javascript/initiation/page3.html')
}

/**
 * L'objet Screen
 */
let sIdP1 = document.querySelector('#sIdP1');
sIdP1.innerHTML = 
'Dimensions totales de l\'écran : ' + screen.width + 'x' + screen.height + '<br />' +
'Surface disponible : ' + screen.availWidth + 'x' + screen.availHeight + '<br />' +
'Palette de couleur : ' + screen.colorDepth + '<br />' +
'Résolution : ' + screen.pixelDepth;
