import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../state/Store'
import { logInInReducer } from "../state/loggedInSlice"
import { auth } from './firebaseConfig'


const SignIn = () => {
  
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const signInForm = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    e.preventDefault();
    if(password && userName) {
      createUserWithEmailAndPassword(auth, userName, password)
        .then((userCredential) => {
          // Signed in
          //If the logged in is succesfull you will acces this part of teh code where you will 
          //get a lot of information about the user that have logged in
          const user = userCredential.user;
          console.log("****user****");
          
          console.log(user);
          dispatch(logInInReducer(user))
      
          navigate('/welcome')
          /*Whit the information of the user you can populate an state that is mainly focused on 
          holding the information of the user that is logged in*/
          
          // ...
        })
        .catch((error) => {

          //If the logged in is not succesfull yu will get to this part and with the message you can tell 
          //the user what went wrong
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('*** sign in error ***');
          console.log(errorMessage);
          // ..
        });

        setUserName('')
        setPassword('')
    }
  }

  return (

    <section className="h-screen">
  <div className="container px-6 py-12 h-full">
    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="w-full"
          alt="Phone image"
        />
      </div>
      <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
        <form>
          <div className="mb-6">

          <input 
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Email address"
          onChange={(e) => setUserName(e.target.value)}  
          type="email" 
          name="email"
          value={userName}
          />

          </div>

          <div className="mb-6">

          <input 
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}  
            type="password" 
            name="password"
            value={password}
          />

          </div>




          <button 
            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            onClick={(e) => signInForm(e)}>Sign in
          </button>


          <div
            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p className="text-center font-semibold mx-4 mb-0">OR</p>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>







  )
}

export default SignIn