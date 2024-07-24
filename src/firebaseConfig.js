import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {v4} from "uuid"

const firebaseConfig = {
  apiKey: "AIzaSyAC7WjcZh3C9mfS7zCUPn8klWloNldTUWU",
  authDomain: "ramp-3547d.firebaseapp.com",
  projectId: "ramp-3547d",
  storageBucket: "ramp-3547d.appspot.com",
  messagingSenderId: "902569381406",
  appId: "1:902569381406:web:c20cbaea9229c632b7a80f"
};

const app = initializeApp(firebaseConfig);

//db
export const db = getFirestore(app);

// AUTH
const auth = getAuth(app);

//storage
export const storage = getStorage(app)

// sign in
export const onSignIn = async ({ email, password }) => {
  try {
    let res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// google sign in
const googleProvider = new GoogleAuthProvider();

export const googleSignIn = async () => {
  try {
    let res = await signInWithPopup(auth, googleProvider);
    return res;
  } catch (error) {
    console.log(error);
  }
};

//sign out
export const logout = () => {
  signOut(auth);
};

// register
export const register = async ({ email, password }) => {
  try {
    let res = await createUserWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// forgot password
export const forgotPassword = async (email) => {
  try {
    let res = await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
    return res;
  } catch (err) {
    console.error(err);
  }
};


// Upload product images from dashboard
export const uploadImg = async (file) =>{
  try {
    const fileDestination = ref( storage, v4())
    await uploadBytes(fileDestination, file)
    const imgURL = await getDownloadURL(fileDestination)

    return imgURL

  } catch (error) {
    console.log(error)
  }
}
