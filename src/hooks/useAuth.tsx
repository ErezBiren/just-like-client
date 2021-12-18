import { useDispatch } from "react-redux";
import {
  signInWithGoogle,
  signInWithEmailPassword,
  registerWithEmailAndPassword,
  saveUser,
} from "../store/firebase";
import { authActions } from "../store/auth-Slice";
import { User } from "../store/models";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      //user.accessToken = loggedUser.accessToken;
      // user.id = loggedUser.id;
      user.email = loggedUser.email;
      user.photoURL = loggedUser.photoURL;

      saveUser(user);
      dispatch(authActions.login(user));
      navigate("/");
    }
  };

  return {
    signInWithGoogleAuth,
    signInEmailPassAuth,
    registerWithEmailAndPasswordAuth,
  };
};

export default useAuth;
