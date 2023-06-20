/**
 * background color JS code
 */

// sélection des éléments
let eltBody = document.querySelector('body');
let firstColor = document.querySelector('#firstColor');
let secondColor = document.querySelector('#secondColor');

// écoute de l'évenement sur l'input firstColor
firstColor.addEventListener('input', function () {
    eltBody.style = 'background: linear-gradient(to right, '+firstColor.value+', '+secondColor.value+');';
    document.querySelector('p').innerText = eltBody.style.background;
});

// écoute de l'évenement sur l'input secondColor
secondColor.addEventListener('input', function () {
    eltBody.style = 'background: linear-gradient(to right, '+firstColor.value+', '+secondColor.value+');';
    document.querySelector('p').innerText = eltBody.style.background;
});