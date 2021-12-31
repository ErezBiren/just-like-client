import axios from 'axios';
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// import { User } from "firebase/auth";
// import { GithubAuthProvider } from "firebase/auth";
import { User } from "./models";

import "firebase/compat/auth";
import "firebase/compat/firestore";

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
  let loggedUser: User | undefined;

  try {
    const provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    const credentials = await signInWithPopup(auth, provider);

    // The signed-in user info.
    const user = credentials.user;

    let splitedName = credentials.user.displayName?.split(" ");
    if (!splitedName) {
      splitedName = ["", ""];
    }

    loggedUser = {
      displayName: user.displayName || undefined,
      email: user.email || undefined,
      photoURL: user.photoURL || undefined,
      accessToken: user.refreshToken,
      firstName: splitedName[0] || undefined,
      lastName: splitedName[1] || undefined,
    };

    await setDoc(doc(db, "users", user.uid), loggedUser);

  } catch (error: any) {
    console.error(error.message);
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
    };

    return loggedUser;
  } catch (err) {
    console.error(err);
  }
};

const saveUser = async (user: User) => {
  try {

    const dbUser = {
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
    };

    if (user.id) {
      await setDoc(doc(db, 'users', user.id), dbUser);
    }
    else {
      await addDoc(collection(db, "users",), dbUser);
    }
  } catch (error: any) {
    console.error(error);
  }
}
//REST API
// const saveUser = async (user: User) => {
//   try {

//     const res = await axios.post(baseUrl + "/users",
//       {
//         fields: {
//           firstName: user.firstName || "",
//           lastName: user.lastName || "",
//           displayName: user.displayName || "",
//           email: user.email,
//           linkedin: user.linkedin || "",
//           //createTime: { timestampValue: user.createTime  },
//           photoURL: user.photoURL || "",
//           //accessToken:  user.accessToken ,
//           userType: user.userType || "",
//           interest: user.interest || "",
//           seciality: user.speciality || "",
//         }
//       });

//   } catch (error: any) {
//     console.error(error.response.data.error.message);
//   }

// const usersRef = doc(db, "users", "1");
// setDoc(usersRef, user, { merge: true });
// }

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
