import { useDispatch } from "react-redux";
import { signInWithGoogle } from "../store/firebase";
import { authActions } from "../store/auth-Slice";

const useAuth = () => {
  const dispatch = useDispatch();

  const signInWithGoogleAuth = async () => {
    const loggedUser = await signInWithGoogle();
    dispatch(authActions.login(loggedUser));
  };

  return signInWithGoogleAuth;
};

export default useAuth;
