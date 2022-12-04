import { signInWithEmailAndPassword } from "firebase/auth";
import router from "next/router";
import { destroyCookie, setCookie } from "nookies";
import { auth } from "../../utils/firebase";

export const signIn = (email: string, password: string, callBack: (error: Array<string>) => void) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const payloadUser = {
        name: userCredential.user.displayName,
        email: userCredential.user.email,
        metadata: userCredential.user.metadata,
        phoneNumber: userCredential.user.phoneNumber,
        photoURL: userCredential.user.photoURL,
        refreshToken: userCredential.user.refreshToken,
        uid: userCredential.user.uid,
      };
      destroyCookie({}, "adopet");
      setCookie(undefined, "adopet", JSON.stringify(payloadUser));
      router.push("/adopt");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      callBack([errorCode, errorMessage]);
    });
};
