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
import Welcome from './pages/Welcome'
import SignIn from './firebase/SignIn'
import LogIn from './firebase/LogI'
import LogOut from './firebase/LogOut'



function App() {
  
  const {user} = useSelector((state:stateTypeRedux)=> state.logged)
  return (
    <BrowserRouter>
    {user === null?
      <nav className="navbar relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
        <Link to="/logIn" className='text-xl text-white pr-2 font-semibold text-white opacity-60 hover:opacity-80 focus:opacity-80 '> Login</Link>
        <Link to="/signIn" className='text-xl text-white pr-2 font-semibold text-white opacity-60 hover:opacity-80 focus:opacity-80'> SignIn</Link>
      </nav>
      :
      <nav className="navbar relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
        <Link to="/welcome" className='text-xl text-white pr-2 font-semibold text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4'>Welcome</Link>
        <Link to="/MyProviders" className='text-xl text-white pr-2 font-semibold text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4'>MyProviders</Link>
        <Link to="/NewProvider" className='text-xl text-white pr-2 font-semibold text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4'>NewProvider</Link>
        <Link to="/MyProducts" className='text-xl text-white pr-2 font-semibold text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4'>MyProducts</Link>
        <Link to="/NewProduct" className='text-xl text-white pr-2 font-semibold text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4'>NewProduct</Link>
        <Link to="/ClientInvoice"className='text-xl text-white pr-2 font-semibold text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4'>ClientInvoice</Link>
        <Link to="/ProviderBill" className='text-xl text-white pr-2 font-semibold text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4'>ProviderBill</Link>
        <Link to="/logOut" className='text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4 text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4'>LogOut</Link>

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
