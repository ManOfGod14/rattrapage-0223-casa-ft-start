import React from "react";
import Header from "../layouts/Header";

export function PopularItems() {
    return <>
        <Header 
            title={'Prodtuits populaires'}
            subtitle={'Nos prodtuits let plus populaires'}
        />

        <div className="container py-3">
            <h1 className="text-center">Liste  de tous nos produits populaires</h1>
        </div>
    </>
}