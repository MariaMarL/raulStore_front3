import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import ProductForm from '../components/ProductForm'
import { stateTypeRedux } from '../state/Store'

const NewProduct = () => {

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
      <h1>ADD NEW PRODUCT</h1>
      <ProductForm/>
    </div>
  )
}

export default NewProduct