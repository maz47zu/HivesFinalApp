import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './routes/Start';
import Navbar from './components/Navbar';
import Settings from './routes/Settings';
import Details from './routes/Details';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Chilanka',
      'cursive',
    ].join(','),
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Start />} />
          <Route path={"/settings"} element={<Settings />} />
          <Route path={"/details"} element={<Details />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
