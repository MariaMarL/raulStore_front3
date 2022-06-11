import * as React from 'react';
import { useSelector } from 'react-redux';
import { providerType } from '../App';
import {stateTypeRedux} from '../state/Store'
import Provider from './Provider';
import './components.css'
import '../table.css'


const ProviderList = () => {

    
const providers = useSelector((state:stateTypeRedux) => state.providerState.providers)

    
return (

  <table className='table getList'>
    <tbody>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Dni</th>
        <th>Phone</th>
        <th>Phone</th>
      </tr>
    </tbody>
      {
        providers.map((provider) => 
        <Provider key={provider.id} provider = {provider}  /> )
        
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

export default ProviderList;
