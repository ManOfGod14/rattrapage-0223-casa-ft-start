import { readFile, writeFile } from "node:fs/promises";
import { NotFoundError } from "./errors.js";

const path = "storage/todos.json";

/**
 * @typedef {object} Todo
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 * 
 * @return {Promise<Todo[]>}
 */
export async function findTodos() {
    // return path;
    const data = await readFile(path, {encoding: 'utf8'});
    return JSON.parse(data);
}

/**
 * 
 * @param {string} title
 * @param {boolean} completed
 * 
 * @return {Promise<Todo>}
 */
export async function createTodo({title, completed = false}) {
    const _todos = await findTodos();

    const todo = {id: Date.now(), title, completed}
    const todos = [todo, ..._todos];

    await writeFile(path, JSON.stringify(todos, null, 2));
    return todo;
}

/**
 * 
 * @param {number} id
 * 
 * @return {Promise<>}
 */
export async function removeTodo(id) {
    const _todos = await findTodos();

    const todo = _todos.findIndex(item => item.id === id);
    // si todo voulu n'a pas été trouvé
    if(todo === -1) throw new NotFoundError()

    const todos = _todos.filter(item => item.id !== id);
    await writeFile(path, JSON.stringify(todos, null, 2));
}

/**
 * 
 * @param {number} id
 * @param {string} title
 * @param {boolean} completed
 * 
 * @param {{title?: string, completed?: boolean}} newTodo
 * 
 * @return {Promise<Todo>}
 */
// export async function updateTodo(id, {title, completed = false}) {
export async function updateTodo(id, newTodo) {
    const _todos = await findTodos();

    const todo = _todos.find(item => item.id === id);
    if(todo === undefined) throw new NotFoundError()

    // todo.title = title;
    // todo.completed = completed;
    // Object.assign(todo, {title, completed})
    Object.assign(todo, newTodo)
    
    await writeFile(path, JSON.stringify(_todos, null, 2));
    return todo;
}