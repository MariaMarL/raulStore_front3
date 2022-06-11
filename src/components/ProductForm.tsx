import * as React from 'react';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import '../App.css'
import '../table.css'
import {saveProduct} from '../actions/productActions'
import { addProductInReducer } from '../state/productSlice';



const ProductForm = () => {

  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [unitsLeft, setUnitsLeft] = useState<number>(0)
  const [maxUnits, setMaxUnits] = useState<number>()
  const [minUnits, setMinUnits] = useState<number>()
  const [price, setPrice] = useState<number>()
  const [providerName, setProviderName] = useState('')


  const addProduct =async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(name&&description&&maxUnits&&minUnits&&price&&providerName){
      console.log("enviado")
      const productToAdd ={
        name,
        description,
        unitsLeft,
        maxUnits,
        minUnits,
        price,
        providerName

      }

      const product = await saveProduct(productToAdd)

      dispatch(addProductInReducer(product))

      setName('')
      setDescription('')
      setUnitsLeft(0)
      setMaxUnits(0)
      setMinUnits(0)
      setPrice(0)
      setProviderName('')
    }
    
  }
  return (
    <div>
      <form onSubmit={(e)=> addProduct(e)}>
        <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)} value={name} />
        <input type="text" placeholder='description' onChange={(e)=>setDescription(e.target.value)} value={description} />
        <input type="number" placeholder='MaxUnits' onChange={(e)=>setMaxUnits(e.target.valueAsNumber)} value={maxUnits} />
        <input type="number" placeholder='MinUnits' onChange={(e)=>setMinUnits(e.target.valueAsNumber)} value={minUnits} />
        <input type="number" placeholder='price' onChange={(e)=>setPrice(e.target.valueAsNumber)} value={price} />
        <input type="text" placeholder='providerName' onChange={(e)=>setProviderName(e.target.value)} value={providerName} />
        
        <button className="delete"> add Product</button>
      </form>
    </div>
  )
};

export default ProductForm;
