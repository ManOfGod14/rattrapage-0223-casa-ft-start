import React from "react";

export function ProductCategoryRow({category}) {
    return <tr className="table-primary text-center">
        <th colSpan={2}>{category}</th>
    </tr>
}

export function ProductRow({product}) {
    let productName = product.name
    let productPrice = product.price

    if(!product.stocked) {
        productName = <span className="text-danger">{product.name}</span>
        productPrice = <span className="text-danger">{product.price}</span>
    }

    return <tr>
        <td>{productName}</td>
        <td>{productPrice}</td>
    </tr>
}