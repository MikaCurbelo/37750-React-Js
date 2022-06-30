/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getArray } from '../helper/getArray'
import { array } from '../../data/Data'
import { ItemDetail } from './ItemDetail'
import "./ItemDetailContainer.scss"
import { useParams } from "react-router-dom"


export const ItemDetailContainer = () => {
const [product, setProduct] = useState({})
const [loading, setLoading] = useState(true)
const {itemId} = useParams()

useEffect(() => {
    getArray(array)
        .then(res => {
            const item = res.find((item)=> item.id === Number(itemId))
            setProduct(item)
        })
        .catch((err)=>console.log(err))
        .finally(()=>setLoading(false))
}, [itemId])



  return (
    <div id='itemDetailContainer'>
          {
            loading?
                <p>CARGANDO...</p>
            :
            <ItemDetail {...product}/>
          }
    </div>
  )
}
