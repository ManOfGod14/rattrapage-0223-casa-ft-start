import React, { Component } from "react";
import ProductTableList from "./ProductTableList";
import { FilterBar } from "./FilterBar";

export class FilterableProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterField: "",
            inStockField: false
        }

        this.handleChangeFilterField = this.handleChangeFilterField.bind(this)
        this.handleChangeInStockField = this.handleChangeInStockField.bind(this)
    }

    handleChangeFilterField(filterField) {
        this.setState({
            filterField
        })
    }

    handleChangeInStockField(inStockField) {
        this.setState({
            inStockField
        })
    }
    
    render() {
        return <>
            <FilterBar 
                filterField = {this.state.filterField}
                inStockField = {this.state.inStockField}
                onFilterFieldChange={this.handleChangeFilterField}
                inStockFieldChange={this.handleChangeInStockField}
            />

            <ProductTableList 
                products={this.props.productData}
                filterField = {this.state.filterField}
                inStockField = {this.state.inStockField}
            />
        </>
    }
}