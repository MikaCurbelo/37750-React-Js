import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css";




export default function CartWidget({msg}) {
    return(
        <div className="espacio">
        <FaShoppingCart></FaShoppingCart>
         {msg}
        </div>
    );
}
