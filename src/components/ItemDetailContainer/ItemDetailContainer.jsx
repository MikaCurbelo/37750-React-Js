/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getArray } from '../helper/getArray'
import { array } from '../../data/Data'
import { ItemDetail } from './ItemDetail'
import "./ItemDetailContainer.scss"

export const ItemDetailContainer = () => {
const [product, setProduct] = useState({})
const [loading, setLoading] = useState(true)

useEffect(() => {
    getArray(array)
        .then(res => {
            const item = res.find((item)=> item.id === 2)
            setProduct(item)
        })
        .catch((err)=>console.log(err))
        .finally(()=>setLoading(false))
}, [])



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
