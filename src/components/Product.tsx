import * as React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct, getAllProducts } from '../actions/productActions';
import { deleteProductInReducer, getAllProductsInReducer } from '../state/productSlice';
import { productType } from '../types';

interface IProductProps {
    product : productType
}

const Product: React.FunctionComponent<IProductProps> = ({product}) => {
  

  const dispatch = useDispatch()
  
  const deleteOneProduct = async (e: React.FormEvent<HTMLButtonElement>) => {

    e.preventDefault();
    const deleteState = await deleteProduct(`${product.id}`);
    //const deleteState = await deleteProduct(product.id as String);
  
    if(deleteState.isDeleted){
      dispatch(deleteProductInReducer(deleteState.productId))
    }

  }
  return (
    <tbody>
      <tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>{product.unitsLeft}</td>
        <td>{product.maxUnits}</td>
        <td>{product.minUnits}</td>
        <td>{product.price}</td>
        <td>{product.providerName}</td>
        <td><button className="delete" onClick={(event) => deleteOneProduct(event)}>Delete</button></td>
      </tr>
    </tbody>
  )
};

export default Product;

