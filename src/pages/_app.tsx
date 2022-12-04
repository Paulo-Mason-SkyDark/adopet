import type { AppProps } from "next/app";
import theme from "../styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/style.css";
import AuthProvider from "../context/AuthContext";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
}

export default MyApp;
