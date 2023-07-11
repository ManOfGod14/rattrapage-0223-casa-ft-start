import React from "react";
import { ProductCategoryRow, ProductRow } from "./ProductCategory";

function ProductTableList({products, filterField, inStockField}) {
    const tabs = [];
    let lastCategory = null;
    
    products.map((productItem, productIndex) => {
        // filtre
        if(inStockField && !productItem.stocked) {
            return
        }

        if(productItem.name.indexOf(filterField) === -1) {
            return
        }

        if(lastCategory !== productItem.category) {
            lastCategory = productItem.category;
            tabs.push(<ProductCategoryRow 
                key={'category_' + productIndex}
                category={productItem.category}
            />)
        }

        // list des produits de la catégorie
        tabs.push(<ProductRow 
            product={productItem}
            key={'product_' + productIndex}
        />)
    })

    return <>
        <div className="table-responsive">
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Nom du produit</th>
                        <th>Prix unitaire</th>
                    </tr>
                </thead>
                <tbody>
                    {tabs}
                </tbody>
            </table>
        </div>
    </>
}

export default ProductTableList;