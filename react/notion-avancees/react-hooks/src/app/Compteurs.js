import { useState } from "react";
import { Button } from "react-bootstrap";

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