import { useDispatch } from "react-redux";
import {
  signInWithGoogle,
  signInWithEmailPassword,
  registerWithEmailAndPassword,
  saveUser,
} from "../store/firebase";
import { authActions } from "../store/auth-Slice";
import { User } from "../store/models";

const useAuth = () => {
  const dispatch = useDispatch();

  const signInWithGoogleAuth = async () => {
    const loggedUser = await signInWithGoogle();

    if (loggedUser) {
      dispatch(authActions.login(loggedUser));
    }
  };

  const signInEmailPassAuth = async (email: string, password: string) => {
    const loggedUser = await signInWithEmailPassword(email, password);
    dispatch(authActions.login(loggedUser));
  };

  const registerWithEmailAndPasswordAuth = async (user: User) => {
    const loggedUser = await registerWithEmailAndPassword(
      user?.email || "",
      user.password || ""
    );

    if (loggedUser) {
      saveUser(user);
    }

    dispatch(authActions.login(loggedUser));
  };

  return {
    signInWithGoogleAuth,
    signInEmailPassAuth,
    registerWithEmailAndPasswordAuth,
  };
};

export default useAuth;
