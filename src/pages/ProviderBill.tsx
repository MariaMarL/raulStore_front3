import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllBills } from '../actions/billActions'
import { getAllProducts } from '../actions/productActions'
import { getAllProviders } from '../actions/providerActions'
import '../App.css'
import BillForm from '../components/bill/BillForm'
import BillList from '../components/bill/BillList'
import { getAllBillsInReducer } from '../state/billSlice'
import { getAllProductsInReducer } from '../state/productSlice'
import { getAllprovidersInReducer } from '../state/providerSlice'
import { stateTypeRedux } from '../state/Store'

const ProviderBill = () => {

  const dispatch = useDispatch()
  
  const {user} = useSelector((state:stateTypeRedux) => state.logged)

  const navigate = useNavigate()
  console.log(user);

  
  useEffect(()=>{
    if(user=== null){
      navigate('/')
      
    }
    getAllProducts().then(products => {
      dispatch(getAllProductsInReducer(products))
    })
    getAllProviders().then(providers =>{
      dispatch(getAllprovidersInReducer(providers))
    })
    console.log("Renderizando bills");
    
  }, [])
  
  return (
    <div className='main_content'>
      <h1>ProviderBill</h1>
      <BillForm/>
      <br />
      <br /><br />
      <BillList/>
    </div>
  )
}

export default ProviderBill