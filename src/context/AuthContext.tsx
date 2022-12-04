import { parseCookies } from "nookies";
import React, { createContext, ReactNode, useContext } from "react";
import { IAuthContextType } from "../@types";

export const AuthContext = createContext({} as IAuthContextType);

const AuthProvider: React.FC<any> = ({ children }) => {
  let user = parseCookies(undefined, "adopet");
  let isAuthenticated = false;

  if (user.adopet !== undefined) {
    user = JSON.parse(user.adopet);
    isAuthenticated = true;
  }

  return <AuthContext.Provider value={{ isAuthenticated, user }}>{children}</AuthContext.Provider>;

  // return <AuthContext.Provider value={{ isAuthenticated, user }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
