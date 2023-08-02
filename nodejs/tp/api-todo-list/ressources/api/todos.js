import { json } from 'node:stream/consumers';
import { 
    createTodo, 
    findTodos, 
    removeTodo,
    updateTodo
} from "../todos_storage.js";

/**
 * api todos list
 */
export async function index(req, res) {
    const todos = await findTodos();
    // on pouvait retourner directement cette promesse sans await
    return todos;
}

/**
 * api create todo
 */
export async function create(req, res) {
    const newTodo = await json(req);
    // on returne directement la promesse sans await
    return createTodo(newTodo);
}

/**
 * api remove todo
 */
export async function remove(req, res, url) {
    const id = parseInt(url.searchParams.get('id'), 10);
    await removeTodo(id);
    res.writeHead(204);
}

/**
 * api update todo
 */
export async function update(req, res, url) {
    const id = parseInt(url.searchParams.get('id'), 10);
    const todo = await json(req);
    // on returne directement la promesse sans await
    return updateTodo(id, todo);
}
