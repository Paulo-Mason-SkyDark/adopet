import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#E5EDFD",
      primaryText: "#0D0E10",
      secondary: "#C32E65",
      tertiaryText: "#0F364A",
      headerColorText: "#000000",
      primaryButton: "#F285AD",
      secondaryButton: "#F2ACAC",
      white: "#FFFFFF",
      background: "#18191A",
    },
  },

  fonts: {
    heading: `'Fredoka', 'Fredoka One', 'cursive', ${base.fonts?.heading}`,
    body: `'Fredoka', 'Fredoka One', 'cursive', ${base.fonts?.body}`,
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
        marginLeft: "5em",
        marginRight: "5em",
        background: "#E5EDFD",
        fontFamily: `'Fredoka', 'Fredoka One', 'cursive'`,
      },
    },
  },
});
export default theme;
