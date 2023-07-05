/**
 * Api fetch affichage des données d'un fichier JSON
 */
fetch('data.json')
.then(reponse => reponse.json())
.then(data => {
    document.querySelector('#dataJson').innerHTML = JSON.stringify(data);
    // console.log(data.adress);
})
.catch(err => {
    console.error("Il y'a une erreur");
});

/**
 * Ajax avec l'objet XMLHttpRequest
 */
const apiUsers = "https://jsonplaceholder.typicode.com/users";

// test error
const youtube = "https://www.youtube.com/";

let xhr = new XMLHttpRequest();
xhr.open('GET', apiUsers, true);

xhr.onload = function () {
    if(xhr.status === 200) {
        let reponseData = JSON.parse(xhr.responseText);
        document.querySelector('#dataAjaxId').innerHTML = JSON.stringify(reponseData);
    } else {
        console.error('Une erreur s\'est produite lors de la récupération des données, status : '+ xhr.status);
    }
}

xhr.onerror = function() {
    console.error('Une erreur s\'est produite lors de la récupération des données !');
}

xhr.send();

/**
 * Consommation d'un api en utilisant l'API Fetch
 */
const apiPosts = "https://jsonplaceholder.typicode.com/posts?_limit=10";

fetch(apiPosts)
.then(reponse => reponse.json())
.then(data => {
    document.querySelector('#dataApiFetch').innerHTML = JSON.stringify(data);
})
.catch(err => {
    console.error("Une erreur s'est produite lors de la récupéraion des données !", err);
});

/**
 * Api Fetch avec la méthode post
 */

document.querySelector('#apiForm').addEventListener('submit', function (evt) {
    evt.preventDefault();

    // let dataForm = new FormData(this);
    // console.log(dataForm);

    let title = document.querySelector('#title').value;
    let body = document.querySelector('#body').value;
    let userId = document.querySelector('#userId').value;

    const apiCreatePost = "https://jsonplaceholder.typicode.com/posts";
    fetch(apiCreatePost, {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: userId,
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.querySelector('#apiFormData').innerHTML = JSON.stringify(data);
    })
    .catch(err => {
        console.error("Une erreur s'est produite lors de l'ajout d'un post !", err);
    });
});


