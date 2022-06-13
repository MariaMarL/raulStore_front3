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
import './table.css'
import './App.css'
import {productType, providerType, billType} from './types'
import { useSelector } from 'react-redux'
import {stateTypeRedux} from './state/Store'
import GoogleLogIn from './firebase/GoogleLogin'
import Welcome from './pages/Welcome'
import SignIn from './firebase/SignIn'
import LogIn from './firebase/LogI'
import LogOut from './firebase/LogOut'
import Home from './pages/Homes'




function App() {
  
  const {user} = useSelector((state:stateTypeRedux)=> state.logged)
  return (
    <BrowserRouter>
    {user === null?
      <nav className="navbar">
        <Link to="/logIn"> Login</Link>
        <Link to="/signIn"> SignIn</Link>
      </nav>
      :
      <nav className="navbar">
        <Link to="/welcome">Welcome</Link>
        <Link to="/MyProviders">MyProviders</Link>
        <Link to="/NewProvider">NewProvider</Link>
        <Link to="/MyProducts">MyProducts</Link>
        <Link to="/NewProduct">NewProduct</Link>
        <Link to="/ClientInvoice">ClientInvoice</Link>
        <Link to="/ProviderBill">ProviderBill</Link>
        <Link to="/logOut">LogOut</Link>

      </nav>
      }
      <Routes>
        <Route path="/logIn" element={<LogIn/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path="/logOut" element={<LogOut/>}/>
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
export type {providerType, productType, billType}
