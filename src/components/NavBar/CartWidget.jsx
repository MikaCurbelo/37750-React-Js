import React, { useContext } from "react";
import { FaOpencart } from "react-icons/fa";
import { CartContext } from "../Context/CartContext";
import "./CartWidget.css";




export default function CartWidget() {

const cartContext = useContext(CartContext);
const { cart } = cartContext; 



    return(
        <div className="espacio">
        <FaOpencart/>
        {cart.length}
        </div>
    );
}
