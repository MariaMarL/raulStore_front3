import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProvidersInReducer } from "../../state/providerSlice";
import '../../App.css'
import { stateTypeRedux } from '../../state/Store';
import { getAllBills, saveBill } from "../../actions/billActions";
import billSlice, { addBillInReducer, getAllBillsInReducer } from "../../state/billSlice";
import Bill from "./Bills";
import { productType } from "../../types";
import { updateProduct } from "../../actions/productActions";
import { updateProductInReduce } from "../../state/productSlice";


const BillForm = () => {

    const productsAvaible = useSelector((state:stateTypeRedux)=> state.productState.products)
    const providersAvaible = useSelector((state:stateTypeRedux)=> state.providerState.providers)
    const dispatch = useDispatch() //para dispatchar un metodo

    const [productId, setProductId] = useState('')
    const [amount, SetAmount] = useState<number>()
    const [providerId, SetProviderId] = useState('')
    const [productToChange, setproductToChange] = useState()
    //const [date, setDate] = useState('')

    const product = useSelector((state:stateTypeRedux) => state.productState.products)
    product.map(product => product.unitsLeft)
    
    
  
    const addBill = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(productId&&amount){
          console.log("enviando");
          
            const billToAdd = {
                productId,
                amount,
                date : (new Date).toString(),
                providerId
            }
            
            console.log(billToAdd.providerId);
            
            const provider = await saveBill(billToAdd)

            const productFound = productsAvaible.find(p => p.id === productId)
            if(productFound){
              console.log("entrando al if");
              
              const productToUpdate: productType ={
                  ...productFound, 
                  unitsLeft: productFound.unitsLeft + amount
              }

              const response = await updateProduct(productToUpdate)
              dispatch(updateProductInReduce(response))
            }
            console.log("peticion...");
            

            dispatch(addBillInReducer(provider))
        
            setProductId('')
            SetAmount(0)
            SetProviderId('')
        }
   
   
      }

   /*   const productSelected = (ev:any) => {
        setProductId(ev)
        let productChoosen = productsAvaible.filter(product => product.id === ev.id )
           let productChanged = (...productChoosen, unitsLeft:) productChoosen.unitsLeft += amount
      }
*/

  return (
      <div>
          <form onSubmit={(e)=>addBill(e)}>
          
              <select onChange={(ev)=>setProductId(ev.target.value)}  name="setProductId">
              {
                productsAvaible.map(product => <option label={product.name} value={product.id} key={product.id}>Select</option> )
              }
            </select>
            
            
            <input type="number" placeholder='Amount' onChange={(e)=>SetAmount(e.target.valueAsNumber)} value={amount} />

            
            <select onChange={(e)=>SetProviderId(e.target.value)}  name="SetProviderId">
              {
                providersAvaible.map(provider => <option value={provider.name} key={provider.id}>{provider.name}</option> )
              }
            </select>



            <button className="delete">add Bill</button>
          </form>
      </div>
  );
};
export default BillForm;