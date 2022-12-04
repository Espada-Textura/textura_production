import { createTheme } from "@mui/material/styles";
import "@/sass/abstract/_color.scss";

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "containedFair" },
        },
      ],
    },
  },
});

export default theme;
