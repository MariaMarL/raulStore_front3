import React, { useEffect } from 'react'
import { getAllProviders } from '../actions/providerActions'
import {getAllprovidersInReducer} from '../state/providerSlice'
import { useDispatch, useSelector } from 'react-redux'
import ProviderList from '../components/ProviderList'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { stateTypeRedux } from '../state/Store'

const MyProviders = () => {

  const dispatch = useDispatch();


  const {user} = useSelector((state:stateTypeRedux) => state.logged)

  const navigate = useNavigate()
  console.log(user);

  
  useEffect(()=>{
    if(user=== null){
      navigate('/')
      
    }
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