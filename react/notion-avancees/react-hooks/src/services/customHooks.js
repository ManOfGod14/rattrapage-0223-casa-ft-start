/**
 * mes hooks personnalisés
 */
import { useState } from "react";

/**
 * par convention React a décidé que chaque hook personnalisé a créer
 * doit commencer par use (ex: useDivision)
 * @param {*} initial 
 * @param {*} step 
 * @returns 
 */
export function useIncrementation(initial = 0, step = 1) {
    const [count, setCount] = useState(initial)

    // fonction pour changer l'état
    const incrementer = () => {
        setCount(c => c + step)
    }

    // retourne les valeurs du hook
    return [count, incrementer]
}