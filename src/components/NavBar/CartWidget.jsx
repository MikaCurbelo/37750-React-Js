import React,  { useContext } from "react";
import { FaOpencart } from "react-icons/fa";
import { myContext } from "../Context/CartContext";
import "./CartWidget.css";




export default function CartWidget() {

const { cart } = useContext(myContext); 



    return(
        <div className="espacio">
        <FaOpencart/>        
        {cart.length}
        </div>
    );
}
