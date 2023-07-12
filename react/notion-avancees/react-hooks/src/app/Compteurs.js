import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useIncrementation } from "../services/customHooks";

/**
 * le hook useState : permet de gérer les états
 */
export function Compteur1() {
    // console.log(useState({key: false}));

    // le tableau [0 , 1] = useStat
    // le 1er elt du tableau est la valeur de l'état
    // le second c'est une fonction callback permettant de modifier l'état
    const [count, setCount] = useState(0)

    const handleClick  = (e) => {
        e.preventDefault();
        // setCount(10)
        setCount((c) => 10)
    }

    return <>
        <p className="mt-3">
            1 - Initialisation du useState avec une valeur simple
        </p>
        <Button variant="primary" size="sm" onClick={handleClick}>
            Changer l'état : {count}
        </Button>
    </>
}

export function Compteur2() {
    const [count, setCount] = useState(10)

    const handleClick  = (e) => {
        e.preventDefault();
        setCount((c) => c + 5)
    }
    
    return <>
        <p className="mt-3">
            2 - Initialisation du useState et changement d'état avec une valeur incrémentable
        </p>
        <Button variant="primary" size="sm" onClick={handleClick}>
            Changer l'état : {count}
        </Button>
    </>
}

// fusionner les états
export function Compteur3() {
    // setCompteur : est une fonction callback nous permettant de chnager l'état
    const [compteur, setCompteur] = useState({
        count1: 0,
        count2: 5
    })

    const handleClick = (e) => {
        e.preventDefault();
        setCompteur({
            ...compteur, count2: 6, count3: 10
        })
    }

    return <div>
        <p className="mt-3">
            3 - Initialisation du useState avec un objet (fusion d'état)
        </p>
        <span>COMPTEUR : {JSON.stringify(compteur)}</span>
        <br/>
        <Button variant="primary" size="sm" onClick={handleClick}>
            Changer les valeur de l'état 
        </Button>
    </div>
}

// plusieurs appels de useState
export function Compteur4() {
    const [compteur1, setCompteur1] = useState(0);
    const [compteur2, setCompteur2] = useState(2);

    const handleClick1 = (e) => {
        e.preventDefault();
        setCompteur1((c1) => {
            return c1 + 1
        })
    }

    const handleClick2 = (e) => {
        e.preventDefault();
        setCompteur2((c2) => c2 + 2)
    }

    return <>
        <p className="mt-3">
            4 - Faire plusieurs appels à useState
        </p>
        <Button variant="primary" size="sm" className="me-2" onClick={handleClick1}>
            Incrementation 1 : {compteur1}
        </Button>

        <Button variant="primary" size="sm" onClick={handleClick2}>
            Incrementation 2 : {compteur2}
        </Button>
    </>
}

/**
 * Hook personnalisé
 */
// plusieurs appels à useState avec un hook personnalisé
export function Compteur5() {
    const [count1, incrementer1] = useIncrementation(10, 5)
    const [count2, incrementer2] = useIncrementation(100, 10)
    
    return <>
        <p className="mt-3">
            5 - Plusieurs appels à useState avec un hook personnalisé
        </p>
        <Button variant="primary" size="sm" className="me-2" onClick={incrementer1}>
            Incrementation 1 : {count1}
        </Button>

        <Button variant="primary" size="sm" onClick={incrementer2}>
            Incrementation 2 : {count2}
        </Button>
    </>
}

/**
 * le hook useEffect
 * nous permet de gérer le montage, démontage des composants
 * et nous permet aussi de gérer les éffets de bord par rapport à notre composant
 */
export function Compteur6() {
    const [compteur, incrementer] = useIncrementation(0, 4)

    /**
     * Problème rencontré :
     * le document s'execute avant le chargement des element HTML
     * ce qui fait que nou ne parvenons pas a trouver l'element p avec son id
     * pour remedier à cela nous allons utiliser le hook useEffect
     * qui va se charger du montage et du démontage de notre composant
     */
    // document.getElementById('pId6').innerText = "Compteur : " +compteur

    // à chaque fois useEffect va effecter le chargement de l'element p
    useEffect(() => {
        document.getElementById('pId6').innerText = "1 - Utilisation de useEffect sans le second parametre (Compteur : "+ compteur +")"
    })

    return <>
        <p className="mt-3" id="pId6"></p>

        <Button variant="danger" size="sm" className="me-2" onClick={incrementer}>
            Incrémentation
        </Button>
    </>
}

export function Compteur7() {
    const [compteur, incrementer] = useIncrementation(10, 10)

    /**
     * si le second parametre est un tableau vide,
     * le useEffect va effectuer le chargement de l'element p 
     * dès le 1er montage du composant après rien ne se passe
     */
    useEffect(() => {
        document.getElementById('pId7').innerText = "2 - Utilisation de useEffect sans le second parametre vide (Compteur : "+ compteur +")"
    }, [])
    
    return <>
        <p className="mt-3" id="pId7"></p>

        <Button variant="danger" size="sm" className="me-2" onClick={incrementer}>
            Incrémentation
        </Button>
    </>
}

export function Compteur8() {
    const [compteur, incrementer] = useIncrementation(100, 20)

    useEffect(() => {
        document.getElementById('pId8').innerText = "3 - Utilisation de useEffect avec le second parametre non vide (useEffect conditionné) (Compteur : "+ compteur +")"
    }, [compteur])
    
    return <>
        <p className="mt-3" id="pId8"></p>

        <Button variant="danger" size="sm" className="me-2" onClick={incrementer}>
            Incrémentation
        </Button>
    </>
}
