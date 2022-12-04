import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { petProps } from "../../../@types";
import { db } from "../../../utils/firebase";

export const useGetPets = () => {
  const [adopt, setAdopt] = useState<petProps[]>([]);

  useEffect(() => {
    const getPets = async () => {
      const pet = collection(db, "pet");
      const groupPets = await getDocs(pet);
      const pets = groupPets.docs.map((doc) => doc.data());
      setAdopt(pets as petProps[]);
    };

    getPets();
  }, []);

  return adopt;
};
