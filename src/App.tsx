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
  Box
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
      <Box>
            <Card>
              <CardContent>
                <Typography>
                  On a clear day you chance upon a strange animal, its leg trapped in a hunter's clawsnare. Judging from the bleeding it will not survive long.
                </Typography>
              </CardContent>
              <CardActions>
                <FormControl>
                  <RadioGroup>
                    <FormControlLabel value="strength" control={<Radio />} label="Draw your dagger, mercifully ending its life with a single thrust." />
                    <Divider />
                    <FormControlLabel value="magic" control={<Radio />} label="Use herbs from your pack to put it to sleep." />
                    <Divider />
                    <FormControlLabel value="stealth" control={<Radio />} label="Do not interfere in the natural evolution of events, but rather take the opportunity to learn more about a strange animal you have never seen before." />
                  </RadioGroup>
                </FormControl>
                <Button variant="contained">Next</Button>
              </CardActions>
            </Card>
      </Box>
    </ThemeProvider>
  );
}

export default App;
