import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import { stateTypeRedux } from '../state/Store';


const ClientInvoice = () => {
  
const {user} = useSelector((state:stateTypeRedux) => state.logged)

const navigate = useNavigate()
console.log(user);

React.useEffect(()=> {
  if(user=== null){
    navigate('/')
    
  }
}, [])


    return (
      <div className='main_content'>
        <h1>Invoice</h1>
      </div>
    )
  }
  
  export default ClientInvoice
