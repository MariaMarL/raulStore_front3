import { useDispatch } from "react-redux";
import { logOutInReducer } from "../state/loggedInSlice"
import { useNavigate } from "react-router-dom";
import { auth } from './firebaseConfig'
import { signOut  } from 'firebase/auth'

const LogOut: React.FunctionComponent = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutButton = () => {
      dispatch(logOutInReducer())
      navigate('/login')
  }

  return (
    <div>
        <br />
        <h3>Please confirm logOut</h3><br />
        <button className="delete" onClick={logOutButton}>LogOut</button>
        <br /><br />
    </div>
  );
};

export default LogOut;