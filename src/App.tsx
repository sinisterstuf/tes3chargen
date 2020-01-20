import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Question from './Question';
import { Container } from '@material-ui/core';

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
        <Question />
      </Container>
    </ThemeProvider>
  );
}

export default App;
