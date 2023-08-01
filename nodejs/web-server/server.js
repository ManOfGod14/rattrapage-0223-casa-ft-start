// console.log("Hello world!");

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// const http = require("http");
import { createServer } from "node:http";
import { createReadStream } from "node:fs";

import { text, json } from "stream/consumers";

// récupération de url (chemin) absolu du répertoire du projet
const dir = dirname(fileURLToPath(import.meta.url));
// console.log(dir);

// stocker le nom du fichier
const indexHtml = 'index.html'; 

// joindre les chemin au nom du fichier
const indexHtmlPath = join(dir, indexHtml);
// console.log(indexHtmlPath);

const server = createServer(async (req, res) => {
    // les traitement à faire
    
    /**
     * test 1
     * écriture d'un text brute sur le serveur
     */
    // res.write("Hello world !");
    // res.end();

    /**
     * test 2
     * écriture d'un fichier sur le serveur
     */
    // lecture du fichier index.html
    // const file = createReadStream('index.html');
    // const file = createReadStream(indexHtmlPath);

    // // pipe fait déjà appel à la méthode end() une fois le flux de lecture terminé
    // file.pipe(res);

    /**
     * test 3
     */
    // const file = createReadStream(indexHtmlPath);
    // res.writeHead(200, {
    //     'Content-Type': 'text/html'
    // });
    // file.pipe(res, {end: false});
    // file.on('end', () => {
    //     res.end();
    // });

    /**
     * test 4
     * les demandes vers le serveur
     */
    // console.log(req);
    // console.log(req.headers);
    // console.log(req.url);
    
    const url = new URL(req.url, `http://${req.headers.host}`);
    // console.log(url);

    // récupérations des donnes des demandes méthode 1
    // let body = '';
    // req.on('data', chunk => {
    //     body += chunk;
    // });
    // req.on('end', () => {
    //     console.log(body);
    //     res.end();
    // })

    // récupérations des donnes des demandes méthode 2 (strem/consumers)
    // const reqDataText = await text(req);
    const reqDataJson = await json(req);
    // console.log(reqDataText);
    res.write(`Bonjour ${reqDataJson.name}`);
    res.end();
});

server.listen('3000');
