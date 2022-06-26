import React from "react";
import { FaOpencart } from "react-icons/fa";
import "./CartWidget.css";




export default function CartWidget({msg}) {
    return(
        <div className="espacio">
        <FaOpencart/>
         {msg}
        </div>
    );
}
