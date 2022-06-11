import * as React from 'react';
import GoogleLogin from '../firebase/GoogleLogin'


const Home = () => {
  return (
    <div className='flex justify-center mx-auto my-10'>
        <GoogleLogin />
    </div>
  )

};

export default Home;
