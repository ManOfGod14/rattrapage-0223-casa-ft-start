/**
 * DOM
 */
let html = document.querySelector('html');
// console.log(html);

let firstEltP = document.querySelector('p');
// console.log(firstEltP);

let allEltsP = document.querySelectorAll('p');
// console.log(allEltsP);
// console.log(allEltsP[2]);

// solution 1
const allEltsP2 = allEltsP[2];
allEltsP2.style.fontSize = '25px';

// solution 2
let eltPHasClass = document.querySelector('p.classRed');
// console.log(eltPHasClass);

// changer la couleur du 4ème elt p
const allEltsP3 = allEltsP[3];
allEltsP3.style.color = 'blue';
allEltsP3.style.fontWeight = '900';
allEltsP3.textContent= 'Mon quatrième paragraphe changé';

/**
 * Naviguer/Déplacer dans le DOM
 */
let idP5 = document.querySelector('#idP5');
idP5.parentNode.style.backgroundColor = 'green';

// les noeuds enfants
let idPd = document.querySelector('#idPd');
let idPdEnfants = idPd.childNodes;
// console.log(idPdEnfants);
idPdEnfants[1].style.color = "blue";

/**
 * Ajout/Modif/Suppression dans le DOM
 */
let newAddP = document.createElement('p');
newAddP.textContent = "Mon élement P ajouté le body !";
let body = document.body;
body.append(newAddP);

//
let newAddH4 = document.createElement('h4');
newAddH4.textContent = "Mon élement H4 ajouté dans div !";
let divAddId = document.querySelector("#divAddId");
divAddId.append(newAddH4);

// insertion avant/apres un element
let newAddH5 = document.createElement("h5");
newAddH5.textContent = "Mon élement H5 a inseré !";

let idAjout = document.querySelector('#idAjout');
divAddId.insertBefore(newAddH5, idAjout);

// Déplacer un element dans le DOM
let idDeplace = document.querySelector('#idDeplace');

// element de reference
let divDeplaceId = document.querySelector("#divDeplaceId");
body.insertBefore(idDeplace, divDeplaceId)

// remplacer dans le DOM
let idDivRemplace = document.querySelector("#idDivRemplace");
let idPRemplace = document.querySelector("#idPRemplace");
let dernierPduBody = body.lastElementChild;
idDivRemplace.replaceChild(dernierPduBody, idPRemplace);

// cloner l'element idPRemplace (copie)
let cloneIdPRemplace = idPRemplace.cloneNode(true);
let idPRemplace2 = document.querySelector("#idPRemplace2");
idPRemplace2.insertAdjacentElement('afterend', cloneIdPRemplace);

// suppression d'element dans le DOM
let divDel = document.querySelector("#divDel");
divDel.remove();


