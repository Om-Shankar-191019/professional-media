import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

export const LoginAPI = (email, password) => {
  try {
    let response = signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    alert(err.message);
  }
};

export const RegisterAPI = (email, password) => {
  try {
    let response = createUserWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    alert(err.message);
  }
};

export const GoogleSignInAPI = () => {
  try {
    const provider = new GoogleAuthProvider();
    let response = signInWithPopup(auth, provider);
    return response;
  } catch (err) {
    alert(err.message);
  }
};

export const FacebookSignInAPI = () => {
  try {
    const provider = new FacebookAuthProvider();
    let response = signInWithPopup(auth, provider);
    return response;
  } catch (err) {
    alert(err.message);
  }
};

export const onLogout = () => {
  try {
    signOut(auth);
  } catch (err) {
    return err;
  }
};
