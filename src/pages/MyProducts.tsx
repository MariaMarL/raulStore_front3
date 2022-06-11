import React, {useEffect} from 'react'
import '../App.css'
import { useDispatch } from 'react-redux'
import { getAllProducts } from '../actions/productActions';
import { getAllProductsInReducer } from '../state/productSlice';
import ProductList from '../components/ProductList';


const MyProducts = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    getAllProducts().then(products => {
      dispatch(getAllProductsInReducer(products))
    })
  }, [])

  
    return (
      <div className='main_content'>
        <h1>MY PRODUCTS</h1>
        <ProductList/>
      </div>
    )
  }
  
  export default MyProducts