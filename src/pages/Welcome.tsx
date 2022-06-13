import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stateTypeRedux } from "../state/Store";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../actions/productActions";
import { getAllProductsInReducer } from "../state/productSlice";
import { getAllProviders } from "../actions/providerActions";
import { getAllprovidersInReducer } from "../state/providerSlice";
import { getAllBills } from "../actions/billActions";
import { getAllBillsInReducer } from "../state/billSlice";


const Welcome: React.FunctionComponent = () => {
  const {user} = useSelector((state:stateTypeRedux) => state.logged)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  console.log(user);

  useEffect(()=> {
    if(user=== null){
      navigate('/logInGoogle')
      
    }
  }, [])

  useEffect(()=>{
        if(user=== null){
      navigate('/logInGoogle')
      
    }
    getAllProducts().then(products => {
      dispatch(getAllProductsInReducer(products))
    })
    getAllProviders().then(provider => {
      dispatch(getAllprovidersInReducer(provider))
    })
    getAllBills().then(bill => {
      dispatch(getAllBillsInReducer(bill))
    })
  }, [])




  
  return (
    <h1>Welcome to Raul Store</h1>
  );
};

export default Welcome;