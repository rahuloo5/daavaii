import React, { Component } from "react";
import Cartitem from "./Cartitem";
export default class CartList extends Component {
    render() {
        const { value } = this.props;
        const { cart } = this.props.value;
        return (
            <div className="container-fluid">
                {cart.map(item => (
                    <Cartitem key={item.id} item={item} value={value} />
                ))}
            </div>
        );
    }
}