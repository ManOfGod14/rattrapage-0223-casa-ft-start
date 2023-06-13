/**
 * script tp chrono
 */
// les variables
let timerId; // stocker l'id du timer
let chronoId = document.querySelector('#chronoId');
console.log(chronoId)
let startId = document.querySelector('#startId');
let stopId = document.querySelector('#stopId');
let resetId = document.querySelector('#resetId');

let heure = 0;
let minutes = 0;
let secondes = 0    
let msecondes = 0;

// fonction pour afficher les doubles 0
function numberFormat(nbr) {
    return nbr.toString().padStart(2, '0');
}

// les fonctions
startId.addEventListener('click', startChrono);
function startChrono() {
    timerId = setInterval(() => {
        // modification de l'afffichage du timer
        let showHeure = (heure < 10) ? '0'+heure : heure;
        let showMinutes = (minutes < 10) ? '0'+minutes : minutes;
        let showSecondes = (secondes < 10) ? '0'+secondes : secondes;

        chronoId.innerHTML = numberFormat(heure) +' : '+ numberFormat(minutes) +' : '+ numberFormat(secondes) +' : '+ msecondes;
        
        msecondes += 1;
        if(msecondes >= 10) {
            msecondes = 0; // remise de msecondes à zéro
            secondes += 1; // changement de secondes pour 1000 msec
        }

        if(secondes >= 60) {
            secondes = 0;
            minutes += 1;
        }

        if(minutes >= 60) {
            minutes = 0;
            heure += 1;
        }
    }, 100);

    // ajouter un attribut dans un élément
    startId.setAttribute('disabled', '');
}

// stop function
stopId.addEventListener('click', stopChrono)
function stopChrono() {
    clearInterval(timerId);

    // supprimer un attibut (disabled)  dans un élément 
    startId.removeAttribute('disabled');
}

// reset function
resetId.addEventListener('click', resetChrono);
function resetChrono() {
    heure = 0;
    minutes = 0;
    secondes = 0;
    msecondes = 0;

    clearInterval(timerId);

    // chronoId.innerHTML = numberFormat(heure) +' : '+ numberFormat(minutes) +' : '+ numberFormat(secondes) +' : '+ msecondes;
    chronoId.innerHTML = '00 : 00 : 00 : 00';
    
    startId.removeAttribute('disabled');
}
