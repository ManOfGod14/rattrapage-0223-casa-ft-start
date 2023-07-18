import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/home/Home";
import { About } from "../pages/about/About";

const Routers = () => {
    return (
        <Fragment>
            <Routes>
                <Route element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    
                </Route>
            </Routes>
        </Fragment>
    )
}

export default Routers;
