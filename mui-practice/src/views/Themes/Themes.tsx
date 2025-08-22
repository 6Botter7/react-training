import { ThemeProvider } from "@mui/material/styles";
import { Button, Container, Typography } from "@mui/material";
import { customTheme } from "../../themes/customTheme";

function Themes() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Container>
          <Typography variant="h4" gutterBottom>
            Custom Theme Example
          </Typography>
          <Button variant="contained" color="primary">
            Primary Button
          </Button>
          <Button variant="outlined" color="secondary" sx={{ ml: 2 }}>
            Secondary Button
          </Button>
        </Container>
      </ThemeProvider>
      <Container>
        <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
          Normal Example
        </Typography>
        <Button variant="outlined" color="primary">
          Primary Button
        </Button>
        <Button variant="outlined"  sx={{ ml: 2 }}>
          Secondary Button
        </Button>
      </Container>
    </>
  );
}

export default Themes;