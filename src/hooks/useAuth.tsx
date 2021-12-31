import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { authActions } from "../store/auth-Slice";
import { registerWithEmailAndPassword, saveUser, signInWithEmailPassword, signInWithGoogle } from "../store/firebase";
import { User } from "../store/models";

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
      user.id = loggedUser.id;
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
