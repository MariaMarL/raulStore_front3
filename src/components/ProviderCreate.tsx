import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProvidersInReducer } from "../state/providerSlice";
import '../App.css'
import { saveProvider } from "../actions/providerActions";


const Form = () => {

    const dispatch = useDispatch() //para dispatchar un metodo

    const [name, setName] = useState('')
    const [dni, SetDni] = useState('')
    const [phone, SetPhone] = useState('')

   

    const addProvider = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(name&&dni&&phone){
            const providerToAdd = {
                name,
                dni,
                phone
            }
            
            const provider = await saveProvider(providerToAdd)

            dispatch(addProvidersInReducer(provider))
        
            setName('')
            SetDni('')
            SetPhone('')
        }
   
   
      }

  return (
      <div>
          <form onSubmit={(e)=>addProvider(e)}>
              <input 
                type="text" 
                placeholder="name"
                onChange={(e)=> setName(e.target.value)}
                value={name}
              />
              <input 
                type="text" 
                placeholder="dni"
                onChange={(e)=> SetDni(e.target.value)}
                value={dni}
              />
             <input 
                type="text" 
                placeholder="phone"
                onChange={(e)=> SetPhone(e.target.value)}
                value={phone}
              />
              <button>add Provider</button>
          </form>
      </div>
  );
};
export default Form;