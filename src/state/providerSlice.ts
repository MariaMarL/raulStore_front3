import { createSlice } from '@reduxjs/toolkit';
import * as React from 'react';

const initialState = {
    providers: [
       {
            id : "1",
            name : "Maria",
            dni : "1075310153",
            phone : "3173028713"
        },

    ] 
}

const providerSlice = createSlice({
    name: 'provider',
    initialState,
    reducers:{
        addProvidersInReducer(state, action){
            const newList = [...state.providers, action.payload]

            const newState = {...state, providers: newList}
            return newState
        },
        getAllprovidersInReducer(state, action){
            return {...state, providers: action.payload}
        }
    }
})

export default providerSlice.reducer;
export const {addProvidersInReducer, getAllprovidersInReducer} = providerSlice.actions
