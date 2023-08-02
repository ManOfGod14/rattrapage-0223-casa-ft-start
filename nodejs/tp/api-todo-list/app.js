import {
    createServer
} from 'node:http';
import { json } from 'node:stream/consumers';
import { 
    createTodo, 
    findTodos 
} from './ressources/todos_storage.js';
import { 
    create, 
    index, 
    remove,
    update
} from './ressources/api/todos.js';
import { NotFoundError } from './ressources/errors.js';
import { createReadStream } from 'node:fs';

createServer(async (req, res) => {
    try {
        // type de données utilisé
        res.setHeader('Content-Type', 'application/json');

        // recupération d'url
        const url = new URL(req.url, `http://${req.headers.host}`);
        // console.log(url);

        // façon classqiue : méthode 1
        // if((url.pathname === '/') || (url.pathname === '/todos')) {
        //     if(req.method === 'GET') {
        //         const todos = await findTodos();
        //         // console.log(todos);
        //         res.write(JSON.stringify(todos));
        //     } else if(req.method === 'POST') {
        //         const newTodo = await json(req);
        //         // console.log(newTodo);
        //         const todo = await createTodo(newTodo);
        //         res.write(JSON.stringify(todo));
        //     }
        // } else {
        //     res.writeHead(404);
        // }

        // façon pro : méthode 2
        const endpoint = `${req.method}:${url.pathname}`
        let results
        switch(endpoint) {
            case 'GET:/':
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                createReadStream('index.html').pipe(res);
                return;

            case 'GET:/todos':
                results = await index(req, res)
                break;

            case 'POST:/todos':
                results = await create(req, res)
                break;

            case 'DELETE:/todos':
                results = await remove(req, res, url)
                break;

            case 'PUT:/todos':
                results = await update(req, res, url)
                break;

            default:
                res.writeHead(404)
        }
        if(results) {
            res.write(JSON.stringify(results))
        }
    } catch (err) {
        if(err instanceof NotFoundError) {
            res.writeHead(404)
        } else {
            throw err
        }
    }
    
    res.end();
}).listen(3000);