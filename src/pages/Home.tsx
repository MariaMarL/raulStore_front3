import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from '../firebase/GoogleLogin'
import { stateTypeRedux } from '../state/Store';


const Home = () => {

  const {user} = useSelector((state:stateTypeRedux) => state.logged)

  const navigate = useNavigate()
  console.log(user);

  React.useEffect(()=> {
    if(user=== null){
      navigate('/')
      
    }
  }, [])
  return (
    <div className='flex justify-center mx-auto my-10'>
        <GoogleLogin />
    </div>
  )

};

export default Home;
