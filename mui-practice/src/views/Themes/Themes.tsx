import { ThemeProvider } from "@mui/material/styles";
import { Button, Container, Typography, List, ListItem, ListItemText, Box, Paper } from "@mui/material";
import pragmaTheme from "../../themes/pragmaTheme";

function Themes() {
  return (
    // <ThemeProvider theme={pragmaTheme}>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4 }}>

        <Container maxWidth="md" sx={{ mt: 4 }}>
          {/* Typography Examples */}
          <Paper sx={{ p: 3, mb: 4 }}>
            <Typography variant="h1" gutterBottom>
              Typography h1: Large, Bold, Custom Color
            </Typography>
            <Typography variant="h2" gutterBottom>
              Typography h2: Large, Bold, Light Color
            </Typography>
            <Typography variant="h3" gutterBottom>
              Typography h3: Medium, Custom Color
            </Typography>
            <Typography variant="body1" gutterBottom>
              Typography body1: Standard body text, dark gray
            </Typography>
            <Typography variant="body2" gutterBottom>
              Typography body2: Smaller, muted gray text
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Typography button: No uppercase, bold
            </Button>
          </Paper>

          {/* Button Examples */}
          <Paper sx={{ p: 3, mb: 4 }}>
            <Typography variant="h3" gutterBottom>
              MuiButton: Custom Border Radius & Padding
            </Typography>
            <Button variant="contained" color="primary" sx={{ mr: 2 }}>
              Primary Contained
            </Button>
            <Button variant="outlined" color="secondary" sx={{ mr: 2 }}>
              Secondary Outlined
            </Button>
            <Button variant="contained" color="secondary" sx={{ mr: 2 }}>
              Secondary Contained
            </Button>
            <Button variant="outlined" color="primary">
              Primary Outlined
            </Button>
          </Paper>

          {/* ListItem Example */}
          <Paper sx={{ p: 3, mb: 4 }}>
            <Typography variant="h3" gutterBottom>
              MuiListItem: Hover Cursor Pointer
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="ListItem 1: Hover to see pointer" />
              </ListItem>
              <ListItem>
                <ListItemText primary="ListItem 2: Custom Style" />
              </ListItem>
              <ListItem>
                <ListItemText primary="ListItem 3: Uses theme palette.text.primary" />
              </ListItem>
            </List>
          </Paper>

          {/* Palette Example */}
          <Paper sx={{ p: 3, mb: 4, bgcolor: 'background.paper' }}>
            <Typography variant="h3" gutterBottom>
              Palette Colors
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2, borderRadius: 2 }}>
                Primary.main: rgba(2, 101, 143, 0.8)
              </Box>
              <Box sx={{ bgcolor: 'secondary.main', color: 'secondary.contrastText', p: 2, borderRadius: 2 }}>
                Secondary.main: #F97316
              </Box>
              <Box sx={{ bgcolor: 'background.default', color: 'text.primary', p: 2, borderRadius: 2, border: '1px solid #ccc' }}>
                Background.default: #F5F5F5
              </Box>
              <Box sx={{ bgcolor: 'background.paper', color: 'text.secondary', p: 2, borderRadius: 2, border: '1px solid #ccc' }}>
                Background.paper: #FFFFFF
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    // </ThemeProvider>
  );
}

export default Themes;