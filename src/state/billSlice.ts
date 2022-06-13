import { createSlice } from '@reduxjs/toolkit'
import React from 'react'


const initialState={
    bill:[
        {
            id:"1",
            productId: "hammer",
            amount: 20,
            date: (new Date).toString(),
            providerId: 'maria',
            total :1000000
        }
    ]
}

const billSlice = createSlice({
    name: 'bill',
    initialState,
    reducers:{
        addBillInReducer(state, action){
            const newList = [...state.bill, action.payload]

            const newState = {...state, bill:newList}

            return newState
        },
        getAllBillsInReducer(state, action){
            return {...state, bill:action.payload}

        }

    }
})

export default billSlice.reducer;
export const {addBillInReducer, getAllBillsInReducer} = billSlice.actions