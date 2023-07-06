// formulaire de contact
class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            country: "",
            object: "",
            message: "",
            cgu: false,
        }

        this.handleSingleChange = this.handleSingleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleSingleChange(e) {
        // console.log(e);
        const value = e.target.value
        this.setState({firstname: value})
    }

    handleChange(e) {
        const fieldName = e.target.name
        const fieldType = e.target.type

        this.setState({
            [fieldName]: (fieldType === 'checkbox') ? e.target.checked : e.target.value
        })
    }

    render() {
        return <React.Fragment>
            <form>
                <div className="row">
                    {/* <div className="col-md-6 form-group mb-3">
                        <label htmlFor="firstname" className='form-label'>
                            Prénom
                        </label>
                        <input type="text" name="firstname" id="firstname"
                            className="form-control"
                            // defaultValue="Maliki"
                            value={this.state.firstname}
                            onChange={this.handleSingleChange}
                        />
                    </div> */}

                    <div className="col-md-6 form-group mb-3">
                        <label htmlFor="firstname" className='form-label'>
                            Prénom
                        </label>
                        <input type="text" name="firstname" id="firstname"
                            className="form-control"
                            value={this.state.firstname}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="col-md-6 form-group mb-3">
                        <label htmlFor="lastname" className='form-label'>
                            Nom de famille
                        </label>
                        <input type="text" name="lastname" id="lastname"
                            className="form-control"
                            value={this.state.lastname}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="col-md-6 form-group mb-3">
                        <label htmlFor="email" className='form-label'>
                            Adresse email
                        </label>
                        <input type="email" name="email" id="email"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="col-md-6 form-group mb-3">
                        <label htmlFor="country" className='form-label'>
                            Votre pays
                        </label>
                        <select name="country" id="country"
                            className="form-select"
                            onChange={this.handleChange}
                        >
                            <option value="">-- Sélectionnez le pays --</option>
                            <option value="1">Togo</option>
                            <option value="2">Maroc</option>
                            <option value="3">France</option>
                            <option value="4">Canada</option>
                            <option value="5">USA</option>
                        </select>
                    </div>

                    <div className="col-md-12 form-group mb-3">
                        <label htmlFor="object" className='form-label'>
                            Objet du message
                        </label>
                        <input type="text" name="object" id="object"
                            className="form-control"
                            value={this.state.object}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="col-md-12 form-group mb-3">
                        <label htmlFor="message" className='form-label'>
                            Contenu du message
                        </label>
                        <textarea name="message" id="message"
                            className="form-control"
                            value={this.state.message}
                            onChange={this.handleChange}
                        ></textarea>
                    </div>

                    <div className="col-md-12 form-group mb-3">
                        <input type="checkbox" name="cgu" id="cgu"
                            className="form-check-input"
                            checked={this.state.cgu}
                            onChange={this.handleChange}
                        />
                        <label htmlFor="cgu" className='form-check-label'>
                            Conditions générales d'utilisations 
                        </label>
                    </div>
                </div>

                <div className="mb-3">
                    <h3>Les données saisies : </h3>
                    {JSON.stringify(this.state)}
                </div>
            </form>
        </React.Fragment>
    }
}

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        const fieldName = e.target.name
        const fieldType = e.target.type

        this.setState({
            [fieldName]: (fieldType === 'checkbox') ? e.target.checked : e.target.value
        })
    }

    render() {
        return <React.Fragment>
            <form>
                <div className="row">
                    <InputTextField 
                        type='text'
                        name='login'
                        value={this.state.login}
                        label="Identifiant"
                        fnOnChange={this.handleChange}
                    />

                    <InputTextField 
                        type='password'
                        name='password'
                        value={this.state.password}
                        label="Mot de passe"
                        fnOnChange={this.handleChange}
                    />
                </div>

                <div className="mb-3">
                    <h3>Les données saisies : </h3>
                    {JSON.stringify(this.state)}
                </div>
            </form>
        </React.Fragment>
    }
}

function InputTextField({name, value, label, type, fnOnChange}) {
    return <React.Fragment>
        <div className="col-md-6 form-group mb-3">
            <label htmlFor={name} className='form-label'>
                {label}
            </label>
            <input type={type} name={name} id={name}
                className="form-control"
                value={value}
                onChange={fnOnChange}
            />
        </div>
    </React.Fragment>
}

// composant mère
function FormPage() {
    return <React.Fragment>
        <div className="container">
            <h1>Les formulaires avec React</h1>
            <hr />

            <h3>Formulaire de contact</h3>
            <ContactForm />

            <h3>Formulaire de connexion</h3>
            <LoginForm />
        </div>
    </React.Fragment>
}

const elt = document.querySelector('#root');
const root = ReactDOM.createRoot(elt);
root.render(<FormPage />);