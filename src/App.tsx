import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.css';

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary">
            Click me!
          </Button>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
