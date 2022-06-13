import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import React from 'react'
import { productType } from '../types'


interface initialStateInterface{
    products: productType[]
}

const initialState:initialStateInterface={
    products:[
        {
            id: "1",
            name: "product1",
            description: "description1",
            unitsLeft: 0,
            maxUnits: 50,
            minUnits: 5,
            price: 5000,
            providerName: "provider1"
        }
    ]
}


const producSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        addProductInReducer(state, action){
            const newList = [...state.products, action.payload]

            const newState = {...state, products:newList}

            return newState
        },
        getAllProductsInReducer(state, action){
            return {...state, products:action.payload}
        },
        deleteProductInReducer(state, action){
            const newList = [...state.products.filter(product => product.id != action.payload)]
            const newState = {...state, products: newList}

            return newState
        },
        updateProductInReduce(state, action:PayloadAction<productType>){
           state.products = state.products.map(p => p.id ===action.payload.id ? action.payload:p)
        },

        findOneProductInReducer(state, action){
            const newList = [...state.products.filter(product => product.id = action.payload)]
            const newState = {...state, products: newList}

            return newState
        }
    }
})

export default producSlice.reducer;
export const {addProductInReducer, getAllProductsInReducer, deleteProductInReducer, findOneProductInReducer, updateProductInReduce} = producSlice.actions