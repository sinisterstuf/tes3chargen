import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import {
  Button,
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
  Card,
  CardContent,
  Typography,
  CardActions,
  Divider,
  Box,
  Paper,
  Container
} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffffe5',
      main: '#ffecb3',
      dark: '#cbba83',
      contrastText: '#000',
    },
    secondary: {
      light: '#e6f9ff',
      main: '#b3c6ff',
      dark: '#8296cc',
      contrastText: '#000',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container className="main" maxWidth="md">
        <Paper variant="outlined" className="question">
          <Typography className="question-text" variant="h6">
            On a clear day you chance upon a strange animal, its leg trapped in a hunter's clawsnare. Judging from the bleeding it will not survive long.
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup className="question-choices">
              <FormControlLabel value="strength" control={<Radio />} label="Draw your dagger, mercifully ending its life with a single thrust." />
              <Divider />
              <FormControlLabel value="magic" control={<Radio />} label="Use herbs from your pack to put it to sleep." />
              <Divider />
              <FormControlLabel value="stealth" control={<Radio />} label="Do not interfere in the natural evolution of events, but rather take the opportunity to learn more about a strange animal you have never seen before." />
            </RadioGroup>
          </FormControl>
          <Box display="flex" flexDirection="row-reverse">
            <Button className="button">Next</Button>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
