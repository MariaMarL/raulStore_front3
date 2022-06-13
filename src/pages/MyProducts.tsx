import React, {useEffect} from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../actions/productActions';
import { getAllProductsInReducer } from '../state/productSlice';
import ProductList from '../components/ProductList';
import { useNavigate } from 'react-router-dom';
import { stateTypeRedux } from '../state/Store';


const MyProducts = () => {

  const dispatch = useDispatch();

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
  }, [])

  
    return (
      <div className='main_content'>
        <h1>MY PRODUCTS</h1>
        <ProductList/>
      </div>
    )
  }
  
  export default MyProducts