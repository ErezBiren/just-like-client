import "firebase/compat/auth";
import "firebase/compat/firestore";
import axios from 'axios';

import {
  doc,
  setDoc,
  getDoc,
  // where,
  // query,
  // collection,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// import { FacebookAuthProvider } from "firebase/auth";
// import { GithubAuthProvider } from "firebase/auth";
import { User } from "./models";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const fetchUsers = async () => {
  try {
    const docRef = doc(db, "users");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (error) { }
};

const signInWithGoogle = async () => {
  let loggedUser;

  try {
    const provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    const credentials = await signInWithPopup(auth, provider);

    // The signed-in user info.
    const user = credentials.user;

    loggedUser = {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      accessToken: user.refreshToken,
    };

    await setDoc(doc(db, "users", user.uid), loggedUser);
  } catch (error: any) {
    console.error(error.message);
    loggedUser = null;
  }

  return loggedUser;
};

const signInWithEmailPassword = async (email: string, password: string) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    const user = credentials.user;
    const loggedUser = {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      accessToken: user.refreshToken,
    };
    return loggedUser;
  } catch (err) {
    console.error(err);
  }
};

const registerWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = credentials.user;

    const loggedUser: User = {
      id: user.uid,
      displayName: user.displayName || undefined,
      email: user.email || undefined,
      photoURL: user.photoURL || undefined,
      accessToken: user.refreshToken,
      firstName: "",
      lastName: ""
    };

    return loggedUser;
  } catch (err) {
    console.error(err);
  }
};



const saveUser = async (user: User) => {
  try {

    const res = await axios.post(baseUrl + "/users",
      {
        fields: {
          firstName: user.firstName || "",
          lastName: user.lastName || "",
          displayName: user.displayName || "",
          email: user.email,
          linkedin: user.linkedin || "",
          //createTime: { timestampValue: user.createTime  },
          photoURL: user.photoURL || "",
          //accessToken:  user.accessToken ,
          userType: user.userType || "",
          interest: user.interest || "",
          seciality: user.speciality || "",
        }
      });

  } catch (error) {
    console.error(error);
  }

  // const usersRef = doc(db, "users", "1");
  // setDoc(usersRef, user, { merge: true });
}

// const sendPasswordResetEmail = async (email) => {
//   try {
//     await auth.sendPasswordResetEmail(email);
//     alert("Password reset link sent!");
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

// const logout = () => {
//   auth.signOut();
// };

export {
  //   auth,
  //   db,
  signInWithGoogle,
  signInWithEmailPassword,
  registerWithEmailAndPassword,
  //registerWithEmailAndPassword,
  //   sendPasswordResetEmail,
  //   logout,
  saveUser,
  fetchUsers,
};
