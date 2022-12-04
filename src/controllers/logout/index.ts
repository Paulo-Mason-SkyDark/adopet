import { signOut } from "firebase/auth";
import router from "next/router";
import { destroyCookie } from "nookies";
import { auth } from "../../utils/firebase";

export const logout = (callback: () => void): void => {
  signOut(auth)
    .then((e) => {
      console.log("file: index.ts:13 | .then | e", e);
      destroyCookie({}, "adopet");
      router.push("/");
      callback;
    })
    .catch((error) => {
      alert(error);
      console.log("file: index.ts | line 22 | signOut | error", error);
    });
};
