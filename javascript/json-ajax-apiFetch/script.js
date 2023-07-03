fetch('data.json')
    .then(reponse => reponse.json())
    .then(data => {
        document.querySelector('#dataJson').innerHTML = JSON.stringify(data);
        console.log(data.adress);
    })
    .catch(err => {
        console.error("Il y'a une erreur");
    });