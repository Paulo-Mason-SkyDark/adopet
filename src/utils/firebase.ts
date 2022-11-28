import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfigs = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASEURL,
  projectId: "adopet-26173",
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID,
};

const app = initializeApp(firebaseConfigs);
const db = getFirestore(app);

const te = async (db: any) => {
  const doador = collection(db, "doador");
  const cdoador = await getDocs(doador);
  const ldoador = cdoador.docs.map((doc) => doc.data());
  console.log("file: firebase.ts | line 25 | te | ldoador", ldoador);
};

export { db, te };
