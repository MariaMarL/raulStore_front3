import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllBills } from '../actions/billActions'
import { getAllProducts } from '../actions/productActions'
import { getAllProviders } from '../actions/providerActions'
import '../App.css'
import BillForm from '../components/bill/billForm'
import BillList from '../components/bill/BillList'
import { getAllBillsInReducer } from '../state/billSlice'
import { getAllProductsInReducer } from '../state/productSlice'
import { getAllprovidersInReducer } from '../state/providerSlice'

const ProviderBill = () => {

  const dispatch = useDispatch()
  
  useEffect(()=>{
    getAllProducts().then(products => {
      dispatch(getAllProductsInReducer(products))
    })
    getAllProviders().then(providers =>{
      dispatch(getAllprovidersInReducer(providers))
    })
    getAllBills().then(bill => {
      dispatch(getAllBillsInReducer(bill))
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