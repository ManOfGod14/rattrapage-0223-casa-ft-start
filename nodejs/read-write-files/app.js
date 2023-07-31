import fs from 'node:fs';
import { 
    open,
    readFile, 
    readdir, 
    stat, 
    watch, 
    writeFile 
} from 'node:fs/promises';

/**
 * Debut : Lecture de fichier
 */
// méthode synchrone
// const content1 = fs.readFileSync('demo.txt', 'utf-8')
// console.log(content1)
// const content2 = fs.readFileSync('demo.txt', {encoding: 'utf-8'})
// console.log(content2)

// méthode  asynchrone
// const content3 = fs.readFile('demo.txt', {encoding: 'utf-8'}, (err, data) => {
//     console.log(data)
// })

// système de promesse
// const content4 = await readFile('demo.txt', {encoding: 'utf-8'});
// console.log(content4)

// const content5 = await Promise.all([
//     readFile('demo.txt', {encoding: 'utf-8'}),
//     readFile('package.json', {encoding: 'utf-8'})
// ])
// console.log(content5)

/**
 * Fin : Lecture de fichier
 */

/**
 * Debut : Ecriture dans un fichier
 */
// avec cette façon il ecrase l'ancien contenu du fichier
// await writeFile('demo.txt', "\nJ'espère que vous allez bien ?")

// ajout du parametre permettant d'écire et de ne écraser l'ancien contenu
// await writeFile('demo.txt', "\nJ'espère que vous allez bien ?", {
//     flag: 'a'
// })

// afficher les infos sur le fichier
const info = await stat('demo.txt')
// console.log(info)

// ouverture d'un fichier
// a : va nous permetre de ne pas ecraser l'ancien contenu
// du fichier en voulant ecire à l'intérieur
const openDemo = await open('demo.txt', 'a')

// openDemo.write("\nJe viens d'ajouter une nouvelle ligne !")

openDemo.close();

/**
 * Fin : Ecriture dans un fichier
 */

// observer les fichiers/dossiers
// const observe = watch('./')
// for await (const evt of observe) {
//     console.log(evt);
// }

/**
 * Exo : lecture d'un dossier avec affichage du contenu
 * en spécifiant si c'est un dossier ou fichier avec la taille
 * Type - Name - 32Ko
 * F - app.js - 20ko
 * D - demo
 */

async function folderContent(path) {
    try {
        const files = await readdir(path, {withFileTypes: true});
        // console.log(files)

        for(const file of files) {
            if(file.isFile()) {
                const stats = await stat(path +'/'+ file.name);
                console.log(`F - ${file.name} - ${stats.size}Ko`)
            } else {
                console.log(`D - ${file.name}`)
            }
        }
    } catch (err) {
        console.error(err)
    }
}
console.log(folderContent('./'))