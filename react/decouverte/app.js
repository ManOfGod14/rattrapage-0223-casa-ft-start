/**
 * Composant fonctionnel
 */
// creation d'un composant fonctionnel
function ComposantFn1(props) {
    // props : est un objet contenant des clés
    console.log(props);

    return <React.Fragment>
        <h3>Création d'un composant fonctionnel</h3>
        <h4>Utilisation de props dans un composant fonctionnel de React</h4>
        <p>Bonjour {props.nom +' '+props.prenom} </p>
    </React.Fragment>
}

// Déstructuration de props dans React
function SalutationFn1(props) {
    const {nom, prenom} = props;
    return <React.Fragment>
        <h3>Déstructuration de props dans React (Méthode 1)</h3>
        <p>Bonjour {nom +' '+prenom}</p>
    </React.Fragment>
}
function SalutationFn2({nom, prenom}) {
    return <React.Fragment>
        <h3>Déstructuration de props dans React (Méthode 2)</h3>
        <p>Bonjour {nom +' '+prenom}</p>
    </React.Fragment>
}

/**
 * Component de classe
 */
// création d'un composant de classe
class ComposantClass extends React.Component {
    render() {
        return <React.Fragment>
            <h3>Création d'un composant de classe</h3>
        </React.Fragment>
    }
}

/**
 * Composant mère
 */
// composant mère (qui contient tous les composants)
function MyHomePage() {
    return <React.Fragment>
        <h1>Découverte de React</h1>
        <hr />
        <h2>Création des composants simple avec React</h2>

        <ComposantFn1 
            nom={'TCHEROU'} 
            prenom="Maliki"
        />
        <SalutationFn1 
            nom={'ASHAR'} 
            prenom="Hicham"
            email="test@test.com"
        />
        <SalutationFn2 
            nom={'JANNETTI'} 
            prenom="Ayoub"
            email="test@test.com"
        />

        <ComposantClass />

    </React.Fragment>
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<MyHomePage />);