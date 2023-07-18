import React from "react";
import Header from "../layouts/Header";

function Inscription() {
    return <>
        <Header 
            title={"Inscription"} 
            subtitle={"Inscrivez-vous pour faciliter vos achats"}
        />

        <div className="container py-3">
            <h1 className="text-center">Formulaire d'inscription</h1>

            <form action="" method="post">
                <div className="row">
                    <div className="form-group col-md-6 mb-3">
                        <label htmlFor="last_name">
                            Nom de famille <span className="text-danger">*</span>
                        </label>
                        <input type="text" name="last_name" id="last_name" className="form-control" required />
                    </div>

                    <div className="form-group col-md-6 mb-3">
                        <label htmlFor="first_name">
                            Prénom(s) <span className="text-danger">*</span>
                        </label>
                        <input type="text" name="first_name" id="first_name" className="form-control" required />
                    </div>

                    <div className="form-group col-md-6 mb-3">
                        <label htmlFor="username">
                            Username <span className="text-danger">*</span>
                        </label>
                        <input type="text" name="username" id="username" className="form-control" required />
                    </div>

                    <div className="form-group col-md-6 mb-3">
                        <label htmlFor="email">
                            Email <span className="text-danger">*</span>
                        </label>
                        <input type="email" name="email" id="email" className="form-control" required />
                    </div>

                    <div className="form-group col-md-6 mb-3">
                        <label htmlFor="password">
                            Password <span className="text-danger">*</span>
                        </label>
                        <input type="password" name="password" id="password" className="form-control" required />
                    </div>

                    <div className="form-group col-md-6 mb-3">
                        <label htmlFor="password_confirmation">
                            Confirm Password <span className="text-danger">*</span>
                        </label>
                        <input type="password" name="password_confirmation" id="password_confirmation" className="form-control" required />
                        <div className="py-1">
                            <span id="pwd_message"></span>
                        </div>
                    </div>

                    <div className="form-group col-md-6 mb-3">
                        <label htmlFor="civility_id">
                            Civility (Sex) <span className="text-danger">*</span>
                        </label>
                        <select name="civility_id" id="civility_id" className="form-select" required>
                            <option value="">-- Sélectionnez le sex --</option>
                        </select>
                    </div>

                    <div className="form-group col-md-6 mb-3">
                        <label htmlFor="country_id">
                            Votre pays <span className="text-danger">*</span>
                        </label>
                        <select name="country_id" id="country_id" className="form-select" required>
                            <option value="">-- Sélectionnez le pays --</option>
                        </select>
                    </div>

                    <div className="form-group col-md-6 mb-3">
                        <label htmlFor="city_name">
                            Ville de résidence <span className="text-danger">*</span>
                        </label>
                        <input type="text" name="city_name" id="city_name" className="form-control" required />
                    </div>

                    <div className="form-group col-md-6 mb-3">
                        <label htmlFor="phone_number">
                            N° de téléphone <span className="text-danger">*</span>
                        </label>
                        <input type="text" name="phone_number" id="phone_number" className="form-control" required />
                    </div>

                    <div className="form-group col-md-12 mb-3">
                        <button type="submit" className="btn btn-primary w-100">
                            Enregistrer
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </>
}

export default Inscription;