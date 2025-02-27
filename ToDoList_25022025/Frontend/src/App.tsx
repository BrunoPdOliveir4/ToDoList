import Router from './config/Router';
import { ThemeProvider } from './components/ThemeProvider';
import { ThemeToggle } from './components/ThemeToggle';
import { Box } from '@mui/material';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Box className="app-container">
        <ThemeToggle />
        <Router />
      </Box>
    </ThemeProvider>
  );
}

export default App;
