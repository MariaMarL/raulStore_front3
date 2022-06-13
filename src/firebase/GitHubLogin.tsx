import { signInWithPopup, OAuthCredential, GithubAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "./firebaseConfig";
import { logInInReducer } from "../state/loggedInSlice";
import { useNavigate } from "react-router-dom";

const providerGitHubAuth = new GithubAuthProvider();

const GitHubLogin: React.FunctionComponent = () => {


  const dispatch = useDispatch();

  const navigate = useNavigate();

  const signInWithGitHubButton = () => {

    signInWithPopup(auth, providerGitHubAuth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential:OAuthCredential | null = GithubAuthProvider.credentialFromResult(result);

      const token = credential!.accessToken;

      // The signed-in user info.
      //If the logged in is succesfull you will acces this part of the code where you will 
      //get a lot of information about the user that have logged in
      const user = result.user;

      /*Whit the information of the user you can populate an state that is mainly focused on 
        holding the information of the user that is logged in*/

      dispatch(logInInReducer(user))
      
      navigate('/welcome')

      // ...
    }).catch((error) => {

      //If the logged in is not succesfull yu will get to this part and with the message you can tell 
      //the user what went wrong
      console.log(error);
      

      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });
  }


  return (
    <div>
      <button 
      className="px-7 py-3 font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
      onClick={signInWithGitHubButton}>Log in with GitHub</button>
    </div>
  );
};

export default GitHubLogin;