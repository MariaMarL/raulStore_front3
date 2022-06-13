import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBills } from "../../actions/billActions";
import { getAllBillsInReducer } from "../../state/billSlice";
import { stateTypeRedux } from "../../state/Store";
import Bill from "./Bills";

const BillList = () => {

    const dispatch = useDispatch()
    const bills = useSelector((state:stateTypeRedux) => state.bill.bill)

        
    return (
    
      <table className='table getList'>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Provider</th>
          </tr>
        </tbody>
          {
            bills.map((bill) => 
            <Bill key={bill.id} billl={bill}/>)
          }
      </table>
    
    /*  
    
          <tr>
            <td>{providers.map((provider) => <Provider key={provider.id} provider = {provider} /> )}</td>
            <td className="edit-buttons">
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </td>
          </tr>
    
        <div className='getList'>
            <h1>Providers</h1>
            {providers.map((provider) => <Provider key={provider.id} provider = {provider} /> )}
        </div>
    */
    
        )
    };
    
    export default BillList;