/**
 * mes hooks personnalisés
 */
import { useEffect, useState } from "react";

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

/**
 * hook personnalisé pour utiliser l'api fetch
 * @param {*} apiUrl 
 */
export function useApiFetchAjax(apiUrl) {
    const [apiData, setApiData] = useState({
        loading: true,
        data: []
    })

    useEffect(() => {
        (async () => {
            const reponse = await fetch(apiUrl)
            const resData = await reponse.json()

            if(reponse.ok) {
                setApiData({
                    loading: false,
                    data: resData
                })
            } else {
                alert("Echec de récupération des données !")
                setApiData({
                    loading: false,
                    data: []
                })
            }
        })()
    }, [])

    return [apiData.loading, apiData.data]
}