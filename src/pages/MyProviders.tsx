import React, { useEffect } from 'react'
import { getAllProviders } from '../actions/providerActions'
import {getAllprovidersInReducer} from '../state/providerSlice'
import { useDispatch } from 'react-redux'
import ProviderList from '../components/ProviderList'
import '../App.css'

const MyProviders = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    getAllProviders().then(providers => {
      
      dispatch(getAllprovidersInReducer(providers))
      
    })
  }, [])

  
  return (
    <div className='main_content'>
      <h1>MY PROVIDERS</h1>
        <ProviderList />
    </div>
  )
}

export default MyProviders