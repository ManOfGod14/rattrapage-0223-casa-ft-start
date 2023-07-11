import React, { Component } from "react";

export class FilterBar extends Component {
    constructor(props) {
        super(props)
        
        this.handleChangeFilterFieldText = this.handleChangeFilterFieldText.bind(this)
        this.handleChangeInStockFiledCheck = this.handleChangeInStockFiledCheck.bind(this)
    }

    handleChangeFilterFieldText(e) {
        // e.preventDefault();
        this.props.onFilterFieldChange(e.target.value)
    }

    handleChangeInStockFiledCheck(e) {
        // e.preventDefault();
        this.props.inStockFieldChange(e.target.checked)
    }

    render() {
        // destructuration du props
        const {filterField, inStockField} = this.props;

        return <>
            <div className="py-3">
                <div className="form-group mb-3">
                    <input type="text" name="filterField" id="filterField" placeholder="Filtrer ..."
                        className="form-control"
                        value={filterField}
                        onChange={this.handleChangeFilterFieldText}
                    />
                </div>
                
                <div className="form-group mb-3">
                    <input type="checkbox" name="inStockField" id="inStockField"
                        className="form-check-input"
                        checked={inStockField}
                        onChange={this.handleChangeInStockFiledCheck}
                    />
                    <label htmlFor="inStockField" className="form-check-label">
                        Produit en stock uniquement
                    </label>
                </div>
            </div>
        </>
    }
}