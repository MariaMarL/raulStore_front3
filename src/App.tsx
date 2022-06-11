import { configureStore } from '@reduxjs/toolkit'
import { useContext, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ProviderList from './components/ProviderList'
import ClientInvoice from './pages/ClientInvoice'
import MyProducts from './pages/MyProducts'
import MyProviders from './pages/MyProviders'
import NewProduct from './pages/NewProduct'
import NewProvider from './pages/NewProvider'
import ProviderBill from './pages/ProviderBill'
import Store from './state/Store'
import './App.css'
import {productType, providerType} from './types'
import { useSelector } from 'react-redux'
import {stateTypeRedux} from './state/Store'
import GoogleLogIn from './firebase/GoogleLogin'
import Welcome from './pages/Welcome'



function App() {
  
  const {user} = useSelector((state:stateTypeRedux)=> state.logged)
  return (
    <BrowserRouter>
    {user === null?
      <nav>
        <Link to="/logInGoogle"> Login Google</Link>
      </nav>
      :
      <nav className="navbar">
        <Link className="link" to="/welcome">Welcome</Link>
        <Link className="link" to="/MyProviders">MyProviders</Link>
        <Link className="link" to="/NewProvider">NewProvider</Link>
        <Link className="link" to="/MyProducts">MyProducts</Link>
        <Link className="link" to="/NewProduct">NewProduct</Link>
        <Link className="link" to="/ClientInvoice">ClientInvoice</Link>
        <Link className="link" to="/ProviderBill">ProviderBill</Link>
      </nav>
      }
      <Routes>
        <Route path="logInGoogle" element={<GoogleLogIn />}/>
        <Route path="welcome" element={<Welcome/>}/>
        <Route path="/NewProvider" element={<NewProvider />} />
        <Route path="/MyProviders" element={<MyProviders />} />
        <Route path="/MyProducts" element={<MyProducts />} />
        <Route path="/NewProduct" element={<NewProduct />} />
        <Route path="/ClientInvoice" element={<ClientInvoice />} />
        <Route path="/ProviderBill" element={<ProviderBill />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
export type {providerType, productType}
