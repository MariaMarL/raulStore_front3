import React from 'react'
import ProviderCreate from '../components/ProviderCreate'
import '../App.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { stateTypeRedux } from '../state/Store'

const NewProvider = () => {
  
  const {user} = useSelector((state:stateTypeRedux) => state.logged)

  const navigate = useNavigate()
  console.log(user);

  React.useEffect(()=> {
    if(user=== null){
      navigate('/')
      
    }
  }, [])
  
  return (
    <div className='main_content'>
      <h1>ADD NEW PROVIDER</h1>
      <ProviderCreate/>
    </div>
  )
}

export default NewProvider

