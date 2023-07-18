import React, { useEffect, useState } from "react";
import { useApiFetchAjax } from "../services/customHooks";

export function TodoListUsingAjax() {
    // https://jsonplaceholder.typicode.com/todos
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)

    // dès le montage du composant j'affiche la list du todolist
    useEffect(() => {
        (async () => {
            const reponse = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            const data = await reponse.json()

            if(reponse.ok) {
                setTodos(data)
                setLoading(false)
            } else {
                alert("Echec de récupération des données !")
                setLoading(false)
            }
        })()
    }, [])

    // console.log(todos)

    if(loading) {
        return <div className="mt-3">
            <span className="text-warning">Données en cours de chargement ...</span>
        </div>
    }

    return <>
        <p className="mt-3">4 - Affichage d'une Todo list avec utilisation de l'api fetch (Ajax)</p>
        <ul>
            {
                todos.map((todoItem, todoIndex) => {
                    return <li key={"todo_"+todoIndex}>{todoItem.title}</li>
                })
            }
        </ul>
    </>
}

// liste des commentaires (avec un hook personnsalisé)
export function CommentList() {
    const [loading, comments] = useApiFetchAjax("https://jsonplaceholder.typicode.com/comments?_limit=5")

    if(loading) {
        return <div className="mt-3">
            <span className="text-warning">Données en cours de chargement ...</span>
        </div>
    }

    return <>
        <p className="mt-3">5 - Affichage de la liste des commentaires (avec un hook personnsalisé)</p>
        <div className="table-responsive">
            <table className="table table-bordered table-white">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        comments.map((commentItem, commentIndex) => {
                            return <tr key={'comment_'+commentIndex}>
                                <td>{commentItem.id}</td>
                                <td>{commentItem.name}</td>
                                <td>{commentItem.email}</td>
                                <td>{commentItem.body}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
}