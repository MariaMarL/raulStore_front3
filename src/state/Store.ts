import { configureStore } from '@reduxjs/toolkit';
import * as React from 'react';
import providerState from './providerSlice'
import productState from './productSlice'
import loggedInSlice from './loggedInSlice';



const store = configureStore({
    reducer:{
        providerState,   //clave y el valor es el contenido
        productState,
        logged:loggedInSlice
        

    }

  
});

type stateTypeRedux = ReturnType<typeof store.getState>


export default store;
export type {stateTypeRedux}
