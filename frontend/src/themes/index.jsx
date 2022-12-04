import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#f9fbfc",
      main: "#f9fbfc",
      dark: "#1a212f",
      contrastText: "#fff",
    },

    secondary: {
      light: "#1a212f",
      main: "#1a212f",
      dark: "#f9fbfc;",
      contrastText: "#000",
    },

    accent: {
      light: "#f4694d",
      main: "#f4694d",
      dark: "#f4694d",
    },
  },

  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: "Poppins";
        src: local("frontend/src/fonts/Poppins-Light.otf") format("truetype");
        font-weight: 300;
        font-style: normal;
      }
      
      @font-face {
        font-family: "Poppins";
        src: local("frontend/src/fonts/Poppins-LightItalic.otf") format("truetype");
        font-weight: 300;
        font-style: italic;
      }
      
      @font-face {
        font-family: "Poppins";
        src: local("frontend/src/fonts/Poppins-Regular.otf") format("truetype");
        font-weight: 400;
        font-style: normal;
      }
      
      @font-face {
        font-family: "Poppins";
        src: local("frontend/src/fonts/Poppins-Italic.otf") format("truetype");
        font-weight: 400;
        font-style: italic;
      }
      
      @font-face {
        font-family: "Poppins";
        src: local("frontend/src/fonts/Poppins-Medium.otf") format("truetype");
        font-weight: 500;
        font-style: normal;
      }
      
      @font-face {
        font-family: "Poppins";
        src: local("frontend/src/fonts/Poppins-MediumItalic.otf") format("truetype");
        font-weight: 500;
        font-style: italic;
      }
      
      @font-face {
        font-family: "Poppins";
        src: local("frontend/src/fonts/Poppins-SemiBold.otf") format("truetype");
        font-weight: 600;
        font-style: normal;
      }
      
      @font-face {
        font-family: "Poppins";
        src: local("frontend/src/fonts/Poppins-SemiBoldItalic.otf") format("truetype");
        font-weight: 600;
        font-style: italic;
      }
      
      @font-face {
        font-family: "Poppins";
        src: local("frontend/src/fonts/Poppins-Bold.otf") format("truetype");
        font-weight: bold;
        font-style: normal;
      }
      
      @font-face {
        font-family: "Poppins";
        src: local("frontend/src/fonts/Poppins-BoldItalic.otf") format("truetype");
        font-weight: bold;
        font-style: italic;
      }
      
      `,
    },

    MuiButtonBase: {
      variants: [
        {
          props: {
            variant: "fairContained",
          },
        },
      ],
      defaultProps: {
        disableRipple: true,
        size: "medium",
      },
    },
  },
});

export default theme;
