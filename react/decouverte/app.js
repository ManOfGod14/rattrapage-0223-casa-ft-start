/**
 * Composant fonctionnel
 */
// creation d'un composant fonctionnel
function ComposantFn1(props) {
    // props : est un objet contenant des clés
    // console.log(props);
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
    // render est une fonction hérité de React.Component
    render() {
        return <React.Fragment>
            <h3>Création d'un composant de classe</h3>
        </React.Fragment>
    }
}

// utilisation de props dans un composant de classe
class SalutionClass extends React.Component {
    render() {
        // console.log(this.props)
        return <React.Fragment>
            <h3>Utilisation de props dans un composant de classe</h3>
            <p>Bonjour { this.props.nom+' '+this.props.prenom }</p>
        </React.Fragment>
    }
}

/**
 * Cycle de vie d'un composant
 * les états en react
 */
class Horloge extends React.Component {
    constructor(props) {
        super(props)

        // etat actuelle de la date du composant Horloge
        this.state = {date: new Date()}

        // timer va permettre de stocker le changement d'état
        this.timer = null
    }

    // componentDidMount() : permet de déterminer quand un composant a été monté (montage du composant)
    componentDidMount() {
        this.timer = window.setInterval(
            this.changerEtat.bind(this), 
            1000
        )
    }

    // componentWillUnmount : permet de déterminer quand le composant a été démonté (démontage du composant)
    // componentWillUnmount() {
    //     window.clearInterval(this.timer)
    // }

    changerEtat() {
        // setState : methode permettant de chnager l'état
        this.setState({date: new Date})
    }

    render() {
        // console.log(this.state)

        // console.log(this.timer);
        
        return <React.Fragment>
            <h3>Cycle de vie d'un composant (les états en react)</h3>
            <span>Date/Heure actuelle : </span>
            <span>{this.state.date.toLocaleDateString()}</span>
            <span> </span>
            <span>{this.state.date.toLocaleTimeString()}</span>
        </React.Fragment>
    }
}

class Incrementation extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            valeur: props.debut,
            compteur: null
        }

        this.demarrerArreter = this.btnToggle.bind(this)
        this.remiseAZero = this.btnReset.bind(this)
    }

    incrementer() {
        this.setState((state, props) => {
            return {valeur: state.valeur + props.pas}
        })
    }

    btnStart() {
        // window.setInterval(this.incrementer.bind(this), 1000)
        
        window.clearInterval(this.state.compteur);
        this.setState({
            compteur: window.setInterval(this.incrementer.bind(this), 1000)
        })
    }

    btnStop() {
        window.clearInterval(this.state.compteur);
        this.setState({
            compteur: null 
        })
    }

    btnToggle() {
        return this.state.compteur ? this.btnStop() : this.btnStart()
    }

    btnReset() {
        window.clearInterval(this.state.compteur);
        this.setState((state, props) => {
            return {valeur: props.debut, compteur: null}
        })
    }

    render() {
        let btnLabel = this.state.compteur ? "Stop" : "Start";
        let btnColor = this.state.compteur ? "danger" : "success";

        return <React.Fragment>
            <h3>
                <span>Incrementation De <u>{this.props.debut}</u> d'un pas de <u>{this.props.pas}</u></span>
                <span> : </span>
                <span>{this.state.valeur}</span>
            </h3>

            <button className={"btn btn-"+btnColor+" btn-sm ms-2"}
                onClick={this.demarrerArreter}
            >
                {btnLabel}
            </button>

            <button className="btn btn-warning btn-sm ms-2"
                onClick={this.remiseAZero}
            >
                Reset
            </button>
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
        <SalutionClass 
            nom={'RAMI'} 
            prenom="Zoubeir"
        />

        <Horloge />

        <Incrementation 
            debut={0}
            pas={1}
        />

        <Incrementation 
            debut={10}
            pas={5}
        />

    </React.Fragment>
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<MyHomePage />);