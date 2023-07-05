// document.querySelector("body").innerHTML = "<h1>Découverte de React</h1>";

let cpt = 0;

// utilisation simple de js
function fnMonElementAvecJS() {
    document.querySelector("#app").innerHTML = "<h1>Découverte de React : <span>"+cpt+"</span></h1>";
}
// fnMonElementAvecJS();

// utilisation avec React
function fnMonElementAvecReact() {
    let span = React.createElement('span', {}, cpt);
    const titre = React.createElement('h1', {}, "Découverte de React : ", span);

    // non compatible avec les nouvelles version de react
    // ReactDOM.render(titre, document.getElementById("app"));

    // les nouvelles versions de react
    const root = ReactDOM.createRoot(document.getElementById("app"));
    root.render(titre);
}
// fnMonElementAvecReact();

/**
 * La syntaxe JSX : JS eXecution
 */
function fnTodoListAvecJSX() {
    const taches = [
        'Tache 1',
        'Tache 2',
        'Tache 3',
        'Tache 4',
        'Tache 5',
    ]

    const renduHtml = <React.Fragment>
        <h1>Découverte de React : <span>{cpt}</span></h1>
        <h3>Ma liste de tâches</h3>
        <ul>
            {
                taches.map((item, index) => {
                    return <li key={'tache_'+index}>{item}</li>
                })
            }
        </ul>
    </React.Fragment>

    const root = ReactDOM.createRoot(document.querySelector("#app"));
    root.render(renduHtml);
}
fnTodoListAvecJSX();
