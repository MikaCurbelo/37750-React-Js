/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Greeting.css'
import {getArray} from '../helper/getArray'
import {array} from '../../data/Data'
import {ItemList} from './ItemList'
import "./ItemListContainer.scss"
import { useParams } from "react-router-dom"





export default function ItemListContainer() {
 
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(true)
const {categoryId} = useParams()
 

useEffect(() => {
    getArray(array)
    .then(res=>{
        categoryId?
            setProducts(res.filter((item)=> item.category === categoryId))
        :
        setProducts(res)
        })
    .catch(err=>console.log(err))
    .finally(()=>setLoading(false))

}, [categoryId]);



return (
 <div id='itemListCont'>
  {
    loading?
        <div>Cargando...</div>
        :
        <ItemList items={products}/>
  }
 </div>
)}
