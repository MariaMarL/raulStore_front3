import { createSlice } from '@reduxjs/toolkit'
import React from 'react'


const initialState={
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

        findOneProductInReducer(state, action){
            const newList = [...state.products.filter(product => product.id = action.payload)]
            const newState = {...state, products: newList}

            return newState
        }
    }
})

export default producSlice.reducer;
export const {addProductInReducer, getAllProductsInReducer, deleteProductInReducer, findOneProductInReducer} = producSlice.actions