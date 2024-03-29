import React from "react";
import Header from "../layouts/Header";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
            <Header 
                title={'Shop in style'}
                subtitle={'With this shop hompeage template'}
            />

            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                    <div className="col mb-5">
                        <div className="card h-100">
                            <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>
                                Sale
                            </div>
                            
                            <img className="card-img-top" src="//unsplash.it/450/300" alt="..." />
                            
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">
                                        Special Item
                                    </h5>
                                    
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    
                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>

                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    <Link to={'#'} className="btn btn-outline-dark mt-auto">
                                        Add to cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            </section>
        </>
    )
}