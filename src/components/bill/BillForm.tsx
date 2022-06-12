import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProvidersInReducer } from "../../state/providerSlice";
import '../../App.css'
import { stateTypeRedux } from '../../state/Store';
import { getAllBills, saveBill } from "../../actions/billActions";
import { addBillInReducer, getAllBillsInReducer } from "../../state/billSlice";


const BillForm = () => {

    const productsAvaible = useSelector((state:stateTypeRedux)=> state.productState.products)
    const providersAvaible = useSelector((state:stateTypeRedux)=> state.providerState.providers)
    const dispatch = useDispatch() //para dispatchar un metodo

    const [productId, setProductId] = useState('')
    const [amount, SetAmount] = useState<number>()
    const [providerId, SetProviderId] = useState('')
    //const [date, setDate] = useState('')

    const providers = useSelector((state:stateTypeRedux) => state.productState.products)

    useEffect(()=>{
      getAllBills().then(bill => {
        dispatch(getAllBillsInReducer(bill))
      })
      console.log("Renderizando bills");
    
    }, [])

    
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

            console.log("peticion...");
            

            dispatch(addBillInReducer(provider))
        
            setProductId('')
            SetAmount(0)
            SetProviderId('')
        }
   
   
      }

  return (
      <div>
          <form onSubmit={(e)=>addBill(e)}>
          
              <select onChange={(e)=>setProductId(e.target.value)}  name="setProductId">
              {
                productsAvaible.map(product => <option value={product.id} key={product.id}>{product.name}</option> )
              }
            </select>
            
            <input type="number" placeholder='Amount' onChange={(e)=>SetAmount(e.target.valueAsNumber)} value={amount} />
            
            <select onChange={(e)=>SetProviderId(e.target.value)}  name="SetProviderId">
              {
                providersAvaible.map(provider => <option value={provider.id} key={provider.id}>{provider.name}</option> )
              }
            </select>


            <button className="delete">add Bill</button>
          </form>
      </div>
  );
};
export default BillForm;