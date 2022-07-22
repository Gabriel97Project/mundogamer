import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./firebaseInitialize";




export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

   

export function loginUserClick({setState}:any){


  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("usuario",result.user)
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      setState(user ? user : null)
      // ...
    }).catch((error) => {
      console.log("erro de login",error)
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}