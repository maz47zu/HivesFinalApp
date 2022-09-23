import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './routes/Start';
import Navbar from './components/Navbar';
import Settings from './routes/Settings';
import Details from './routes/Details';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Start/>}/>
        <Route path={"/settings"} element={<Settings/>}/>
        <Route path={"/details"} element={<Details/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
