import React, { useCallback, useLayoutEffect, useMemo, useReducer, useRef, useState } from "react";
import { toast } from "react-toastify";
import { notifyToTopRight } from "../services/NotifToastify";

/**
 * useRef :
 * Peut etre utilisé pour récupérer la référence d'un élément dans le DOM
 * et Permet aussi de stocker une valeur qui n'est nécessaire pour le rendu (DOM)
 * @returns 
 */
export function PerformanceUseRef() {
    const last_name = useRef(null)
    const first_name = useRef(null)

    const handleClick = (e) => {
        e.preventDefault()
        // console.log(last_name)
        console.log(last_name.current.value)
    }

    const handleClick2 = (e) => {
        e.preventDefault()
        console.log(first_name.current.value)
    }

    return <>
        <div className="mb-3">
            <p className="mt-3">
                1 - useRef : Peut etre utilisé pour récupérer la référence d'un élément dans le DOM
            </p>
            <div className="mb-2">
                <input type="text" name="last_name" className="form-control"
                    ref={last_name}
                />
                <button className="btn btn-primary btn-sm py-1"
                    onClick={handleClick}
                >
                    Get input value
                </button>
            </div>

            <div className="mb-2">
                <input type="text" name="first_name" className="form-control"
                    ref={first_name}
                />
                <button className="btn btn-primary btn-sm py-1"
                    onClick={handleClick2}
                >
                    Get input 2 value
                </button>
            </div>
        </div>
    </>
}

// bouton personnalié
export const MyButton1 = (props) => {
    console.log('renduBtn1')
    return <>
        <button className={props.nomClass} onClick={props.fnOnClick}>
            {props.label}
        </button>
    </>
}

export const MyButton2 = ({label, nomClass, fnOnClick}) => {
    console.log('renduBtn2')
    return <>
        <button className={nomClass} onClick={fnOnClick}>
            {label}
        </button>
    </>
}

/**
 * useMemo :
 * permet de garder/stocker en mémoire un valeur
 */
export function PerformanceUseMemo() {
    const [count, setCount] = useState(0)

    const [count2, setCount2] = useState(10)

    // structure syntaxique de useMemo
    const test = useMemo(() => {
        // return fn
    }, [])

    const handleClick = useMemo(() => {
        return (e) => {
            e.preventDefault()
            // setCount2(c => c + 2)
            console.log('hello useMemo')
        }
    }, [])

    return <>
        <div className="mb-3">
            <p className="mt-3">
                1 - useMemo : permet de garder/stocker en mémoire un valeur
            </p>

            <MyButton1 
                label={"Bouton 1 - Incrémentation : "+ count}
                nomClass="btn btn-info btn-sm me-2"
                fnOnClick={() => setCount((c) => c + 1)}
            />

            <MyButton2 
                label={"Bouton 2 - Incrémentation : "+ count2}
                nomClass={"btn btn-primary btn-sm"}
                fnOnClick={handleClick}
            />
        </div>
    </>
}

/**
 * useCallback :
 * permet de garder/stocker en mémoire une fonction qui pourra etre réutilisée
 */
export function PerformanceUseCallback() {
    const [count, setCount] = useState(0)

    const notifInfo = () => toast.info("Bonjour tout le monde", {
        position: toast.POSITION.TOP_CENTER
    })
    
    const notifError = () => toast.error("Bonjour tout le monde", {
        position: toast.POSITION.TOP_LEFT
    })

    const notifSuccess = () => toast.success("Bonjour tout le monde", {
        position: toast.POSITION.TOP_RIGHT
    })

    const handleClick = useCallback((e) => {
        e.preventDefault()
        
        notifyToTopRight('success', "Salut toute la classe !")
    }, [])
    
    return <>
        <div className="mb-3">
            <p>2 - useCallback : permet de garder/stocker en mémoire une fonction qui pourra etre réutilisée</p>

            <MyButton1 
                label={"Bouton 1 - notif info"}
                nomClass="btn btn-info btn-sm me-2 mb-2"
                fnOnClick={notifInfo}
            />

            <MyButton1 
                label={"Bouton 1 - notif error"}
                nomClass="btn btn-danger btn-sm me-2 mb-2"
                fnOnClick={notifError}
            />

            <MyButton1 
                label={"Bouton 1 - notif success"}
                nomClass="btn btn-success btn-sm me-2 mb-2"
                fnOnClick={notifSuccess}
            />

            <MyButton2 
                label={"Bouton 2 - notification avec handleClick"}
                nomClass={"btn btn-success btn-sm me-2 mb-2"}
                fnOnClick={handleClick}
            />
        </div>
    </>
}

/**
 * useEffect : est un hook est asynchrone
 * useLayoutEffect : est un hook qui est synchrone
 */
export function PerformanceUseLayoutEffect() {
    const [count, setCount] = useState(20)
    const spanElt = useRef(null)

    const incrementer = (e) => {
        e.preventDefault()
        setCount((c) => c + 1)
    }

    /**
     * le useLayoutEffect doit etre conditionné pour qu'il puisse 
     * savoir si l'état a changé  et apporter des modifications
     */
    useLayoutEffect(() => {
        if(count % 2 === 0) {
            spanElt.current.style.color = 'green'
        } else {
            spanElt.current.style.color = 'red'
        }
    }, [count])

    return <>
        <div className="mb-3">
            <p className="mt-3">
                1 - useLayoutEffect : est synchrone (donc est plus adapter pour intéragir le DOM)
            </p>
            <button className="btn btn-light btn-sm" onClick={incrementer}>
                <span ref={spanElt}>Incrémentation (useLayoutEffect) : {count}</span>
            </button>
        </div>
    </>
}

/**
 * useReducer Vs useState
 * useState : prend 1 seul paramètre et 
 * returner deux valeurs dans un tableau (ex : [count setCount])
 * 
 * useReducer : prend 3 paramètres
 * Param 1 - c'est une fonction réductrice pour décrire les mutations possible (obligatoire)
 * Param 2 - c'est la valeur initiale de l'état qui est un objet (obligatoire)
 * Param 3 - c'est la fonction d'initialisation pour faire des traitements particuliers (facultatif)
 */
// exercice avec useState
export function CompteurDecompteurUseState({start, step}) {
    const [count, setCount] = useState({
        compteur: start,
        pas: step
    })

    const incrementer = (e) => {
        e.preventDefault()
        setCount({
            ...count, 
            compteur: count.compteur + count.pas
        })
    }

    const decrementer = (e) => {
        e.preventDefault()
        setCount({
            ...count, 
            compteur: count.compteur - count.pas
        })
    }

    const reset = (e) => {
        e.preventDefault()
        setCount({
            ...count, 
            compteur: start
        })
    }

    return <>
        <div className="mb-3">
            <p className="mt-3">1 - Compteur/Décompteur avec useState</p>
            <div className="mb-2">Valeur du compteur : {count.compteur}</div>
            <div>
                <button className="btn btn-danger btn-sm me-2 py-1"
                    onClick={decrementer}
                >
                    {"- "+ step}
                </button>

                <button className="btn btn-warning btn-sm me-2 py-1"
                    onClick={reset}
                >
                    {"Reset ("+ start + ")"}
                </button>

                <button className="btn btn-success btn-sm me-2 py-1"
                    onClick={incrementer}
                >
                    {"+ "+ step}
                </button>
            </div>
        </div>
    </>
}

// Param 1 - fonction reductrice
// state : c'est encore le 2ème paramètre du useReducer ({compteur: start, pas: step})
// action : {type: "incrementer" | "decrementer" | "reset", ...}
function reducer(state, action) {
    const {type, resetValue} = action;
    // const {compteur, pas} = state;
    
    // action.type
    switch (type) {
        case "incrementer":
            return {
                ...state,
                compteur: state.compteur + state.pas
            }
        
        case "decrementer":
            return {
                ...state,
                compteur: state.compteur - state.pas
            }

        case "reset":
            // return {
            //     ...state,
            //     compteur: resetValue
            // }
            return init({...state, compteur: resetValue})

        default:
            throw new Error("L'action "+type+" n'existe pas !")
    }
}

// Param 3 - fonction particulière
function init(initialState)  {
    return initialState
}

// exercice avec useReducer
export function CompteurDecompteurUseReducer({start, step}) {
    // syntaxe
    const [count, dispatch] = useReducer(
        reducer,
        {compteur: start, pas: step},
        init
    )

    return <>
        <div className="mb-3">
            <p className="mt-3">2 - Compteur/Décompteur avec useReducer</p>
            <div className="mb-2">Valeur du compteur : {count.compteur}</div>
            <div>
                <button className="btn btn-danger btn-sm me-2 py-1"
                        onClick={() => dispatch({
                            type: 'decrementer',
                            resetValue: start
                        })}
                >
                    {"- "+ step}
                </button>

                <button className="btn btn-warning btn-sm me-2 py-1"
                    onClick={() => dispatch({
                        type: 'reset',
                        resetValue: start
                    })}
                >
                    {"Reset ("+ start + ")"}
                </button>

                <button className="btn btn-success btn-sm me-2 py-1"
                    onClick={() => dispatch({
                        type: 'incrementer',
                        resetValue: start
                    })}
                >
                    {"+ "+ step}
                </button>
            </div>
        </div>
    </>
}

