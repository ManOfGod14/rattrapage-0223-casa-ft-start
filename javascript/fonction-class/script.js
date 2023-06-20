/**
 * Orienté Objet (Classes en JS)
 */

let utilisateur = {
    nom: ['Maliki', 'TCHEROU'],
    nomObj: {
        prenom: 'Maliki',
        nom: 'TCHEROU'
    },
    age: 31,
    email: 'maliki.tcherou1@gmail.com',

    // objet this
    bonjour: function() {
        alert("Bonjour, je me nomme "+this.nomObj.prenom+ " "+this.nomObj.nom+", j'ai "+this.age+" ans");
    }
}

let idBtn1 = document.querySelector('#idBtn1');
idBtn1.innerHTML = utilisateur.nom[0]+ " " +utilisateur.nom[1];
idBtn1.addEventListener('click', function () {
    utilisateur.bonjour();
});

let userInfos1 = document.querySelector('#userInfos1');
// JSON.stringify : permet de convertir un objet en un string
userInfos1.innerHTML = JSON.stringify(utilisateur);

// nous allons ajouter un taille notre objet utilisateur
let userInfos2 = document.querySelector('#userInfos2');
let idBtn2 = document.querySelector('#idBtn2');
idBtn2.addEventListener('click', function() {
    utilisateur.age = 32;
    utilisateur.taille = prompt("Saisissez votre taille :");
    userInfos2.innerHTML = JSON.stringify(utilisateur);
});


/**
 * Construceur d'objet
 * n : array ['Maliki', 'TCHEROU']
 * a : number
 * m: string
 */
function ObjetUtilisateur(n, a, m) {
    this.n = n;
    this.a = a;
    this.m = m;

    this.bonjour = function() {
        alert("Bonjour, je me nomme "+this.n[0]+ " "+this.n[1]+", j'ai "+this.a+" ans");
    }
}

// Nous allons créer une instance de l'objet ObjetUtilisateur
let hichem = new ObjetUtilisateur(
    ["Hichem", "ASHAR"],
    35,
    'demo@test.com'
);

let idBtn3 = document.querySelector('#idBtn3');
idBtn3.addEventListener('click', function() {
    hichem.bonjour();
    document.querySelector('#infoHichem1').innerHTML = JSON.stringify(hichem);
});

let idBtn4 = document.querySelector('#idBtn4');
idBtn4.addEventListener('click', function() {
    hichem.t = prompt("Saisissez la taille de hichem");
    document.querySelector('#infoHichem2').innerHTML = JSON.stringify(hichem);
});

/**
 * Classes/Héritage en JS
 */
class Voiture {
    etat = false;

    constructor(marque, type, modele) {
        this.marque = marque;
        this.type = type;
        this.modele = modele;
    }

    demarrer() {
        if(!this.etat) {
            this.etat = true;
            return this.marque +' '+ this.type +' démarrée';
        }
        return this.marque +' '+ this.type +' déjà démarrée';
    }

    arreter() {
        if(this.etat) {
            this.etat = false;
            return this.marque +' '+ this.type +' éteinte';
        }
        return this.marque +' '+ this.type +' déjà éteinte'; 
    }

    demarrerArreter() {
        return this.etat ? this.marque +' '+ this.type +' démarrée' : this.marque +' '+ this.type +' éteinte';
    }
}

// instancier la classe voiture
let voiture = new Voiture("Toyota", "Yaris", "2010");
console.log(voiture.marque);
console.log(voiture.demarrer());
console.log(voiture.arreter());

// héritage
class Vehicule extends Voiture {
    constructor(marque, type, modele) {
        super(marque, type, modele);
    }
}

let vehicule = new Vehicule("Renault", "Test", "T1023");
console.log(vehicule.demarrer());

/**
 * setter et getter
 */
class Voiture2 {
    // marque;
    // type;
    // modele;

    constructor() {

    }

    getMarque() {
        return this.marque
    }

    setMarque(marque) {
        this.marque = marque;
    }

    /**
     * les setter et getter
     */
    set type(value) {
        this.value = value
    }

    get type() {
        return this.value
    }
}

let voiture2 = new Voiture2();
voiture2.setMarque("Dacia");
console.log(voiture2.getMarque());

//
voiture2.type = 'Logan';
voiture2.type = 'Logan';
console.log(voiture2.type);

/**
 * Exercice géometrie
 * 
 */
class Ligne {
    constructor(nom, taille) {
        this.nom = nom;
        this.taille = taille;
    }

    afficher1() {
        return this.nom +' = '+this.taille;
    }

    // set nom(valeurNom) {
    //     this.valeurNom = valeurNom;
    // }
    // get nom() { 
    //     return this.valeurNom; 
    // }

    // set taille(valeurTaille) {
    //     this.valeurTaille = valeurTaille;
    // }
    // get taille() {
    //     return this.valeurTaille;
    // }

    // afficher2() {
    //     return this.valeurNom +' = '+this.valeurTaille;
    // }
}
// méthode 1 pour définir des propriétés
let long = new Ligne("Longueur (AB)", 52);
console.log(long.afficher1());

let larg = new Ligne("Largeur (AC)", 34);
console.log(larg.afficher1());

// utilisation des setter et getter
// let ligne1 = new Ligne();
// const long1 = ligne1.nom = "Longueur NM";
// const taille1 = ligne1.taille = 60;
// console.log(ligne1.afficher2());

class Rectangle extends Ligne {
    constructor(nom, taille) {
        super(nom, taille);
    }

    perimetre(lng, lrg) {
        return (lng + lrg) * 2;
    }
}

let lng = new Rectangle("Long IJ", 100);
let lrg = new Rectangle("Larg JK", 43);
// console.log(lng.taille);

document.querySelector('#longueurId').innerHTML = lng.afficher1();
document.querySelector('#largeurId').innerHTML = lrg.afficher1();
document.querySelector('#perimetreId').innerHTML = 'Périmetre = '+ lng.perimetre(lng.taille, lrg.taille) 


/**
 * Gestion de erreurs en JS
 */
let idErreur = document.querySelector('#idErreur');
idErreur.addEventListener('click', function() {
    try {
        val;
        alert('Hello world!');
    } catch (e) {
        alert(
            "\nNom de l'erreur : " + e.name +
            "\nMessage de l'erreur : " + e.message +
            "\nEmplacement : " + e.stack
        );
    }
})

let idSansErreur = document.querySelector('#idSansErreur');
idSansErreur.addEventListener('click', function() {
    try {
        // val = 2;
        let val;
        alert('Hello world !');
    } catch (e) {
        alert(
            "\nNom de l'erreur : " + e.name +
            "\nMessage de l'erreur : " + e.message +
            "\nEmplacement : " + e.stack
        );
    }
})

function divion() {
    let a = prompt("Saisissez le 1er nombre :");
    let b = prompt("Saisissez le 2ème nombre :");

    if(isNaN(a) || isNaN(b) || a == '' || b == '') {
        throw new Error("Erreur : Veuilez saissir les deux valeurs !");
    } else if (b == 0) {
        throw new Error("Erreur : Divion par 0 impossible !");
    } else {
        alert("Divion de "+ a + " / "+ b + " = "+ (a / b));
    }
}

let idDivision = document.getElementById('idDivision');
idDivision.addEventListener('click', function() {
    try {
        divion();
    } catch (e) {
        alert(e.message);
    }
});

