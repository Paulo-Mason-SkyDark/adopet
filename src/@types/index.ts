import { Timestamp } from "firebase/firestore/lite";

export type petProps = {
  id: string;
  name: string;
  age: number;
  breed: string;
  specie: string;
  img: Array<string>;
  created_at: Timestamp;
  updated_at: Timestamp;
  donated: boolean;
  adopter: petAdopter;
  donor: petDonor;
};

type attributesAdopterAndDonor = {
  id: string;
  name: string;
};

export type petDonor = attributesAdopterAndDonor & {
  id_donor: string;
};

export type petAdopter = attributesAdopterAndDonor & {
  id_adopter: string;
};

export interface IAuthContextType {
  isAuthenticated: boolean;
  signIn?: (email: string, password: string, callBack: (error: Array<string>) => void) => Promise<void>;
  user: { [key: string]: string } | IUser;
}

interface IUserProviderData {
  providerId: string;
  uid: string;
  displayName: string;
  email: string;
  phoneNumber: string;
  photoURL: string;
}
interface stsTokenManager {
  refreshToken: string;
  accessToken: string;
  expirationTime: Timestamp;
}
interface tokenReponse {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

export interface IUserInformation {
  user: {
    uid: string;
    email: string;
    emailVerified: boolean;
    isAnonymous: boolean;
    providerData: Array<IUserProviderData>;
    stsTokenManager: stsTokenManager;
    createdAt: Timestamp;
    lastLoginAt: Timestamp;
    apiKey: string;
    appName: string;
  };
  providerId: string;
  _tokenResponse: tokenReponse;
  operationType: string;
}

export interface IUser {
  name: string;
  email: string;
  metadata: Array<any>;
  phoneNumber: string;
  photoURL: string;
  refreshToken: string;
  uid: string;
}
