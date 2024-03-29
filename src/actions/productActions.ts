import { productType } from "../types"


const HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
  
export const getAllProducts = async ()=>{
    const response = await fetch(`https://backraulstore.herokuapp.com/api/products`)
    const data = await response.json()
    return data
}

export const saveProduct = async (product: productType) => {
    const response = await fetch(`https://backraulstore.herokuapp.com/api/product/create`, { method: 'POST', body: JSON.stringify(product), headers: HEADERS})
    const data = await response.json() as productType
    return data
    }

export const updateProduct = async (product: productType) => {
  const response = await fetch(`https://backraulstore.herokuapp.com/api/product/update`, { method: 'PUT', body: JSON.stringify(product), headers: HEADERS})
  const data = await response.json() as productType
  return data
  }

export const deleteProduct = async (id:String) => {
  const response = await fetch(`https://backraulstore.herokuapp.com/api/product/delete/${id}`, { method: 'DELETE', headers: HEADERS})
  console.log(response);
  
  return {isDeleted:response.ok, productId:id}
}
