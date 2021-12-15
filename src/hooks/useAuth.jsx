import { useDispatch } from "react-redux";
import { signInWithGoogle, signInWithEmailPassword } from "../store/firebase";
import { authActions } from "../store/auth-Slice";

const useAuth = () => {
  const dispatch = useDispatch();

  const signInWithGoogleAuth = async () => {
    const loggedUser = await signInWithGoogle();
    dispatch(authActions.login(loggedUser));
  };

  const signInEmailPassAuth = async (email, password) => {
    const loggedUser = await signInWithEmailPassword(email, password);
    dispatch(authActions.login(loggedUser));
  };

  return { signInWithGoogleAuth, signInEmailPassAuth };
};

export default useAuth;
