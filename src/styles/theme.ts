import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  colors: {
    brand: {
      primary: "#E5EDFD",
      primaryText: "#0D0E10",
      secondaryText: "#C32E65",
      tertiaryText: "#0F364A",
      headerColorText: "#000000",
      primaryButton: "#F285AD",
      secondaryButton: "#F2ACAC",
      white: "#FFFFFF",
      background: "#18191A",
    },
  },
  textStyles: {
    h1: {
      fontSize: [`${42 / 16}rem`, `${21 / 16}`],
      fontWeight: "normal",
    },
    h2: {
      fontSize: [`${32 / 16}rem`, `${16 / 16}`],
      fontWeight: "normal",
    },
    h3: {
      fontSize: [`${19 / 16}rem`, `${9.5 / 16}`],
      fontWeight: "normal",
    },
  },

  styles: {
    global: {
      "html, body": {
        background: "#E5EDFD",
        backgroundSize: "100%",
        fontFamily: "Fredoka One', cursive, sans-serif",
      },
    },
  },
});
export default theme;
