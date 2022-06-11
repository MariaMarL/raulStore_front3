import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../actions/productActions';
import { getAllProductsInReducer } from '../state/productSlice';
import { stateTypeRedux } from '../state/Store';
import './components.css'
import Product from './Product';


const ProductList = () => {

    const dispatch = useDispatch()

    const products = useSelector((state:stateTypeRedux) =>state.productState.products)
 
    useEffect(()=>{
        getAllProducts().then(products => {
          dispatch(getAllProductsInReducer(products))
        })
      }, [products])

    return (
        
    <table className='table getList'>
        <tbody>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Description</td>
                <td>UnitsLeft</td>
                <td>MaxUnit</td>
                <td>MinUnit</td>
                <td>Price</td>
                <td>ProviderName</td>
            </tr>
        </tbody>
    {
        products.map((product) => 
        <Product key={product.id} product={product}/>  )
        }    
    </table>
    )
};

export default ProductList;


