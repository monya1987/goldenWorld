import logo from './logo.svg';
import './App.css';
import { Route, Link, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/About';
import TablesRacesPage from './pages/tables/Races';

function App() {
  return (
    <div>
        <Routes>
            <Route index element={<HomePage/>} />
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/tables/races' element={<TablesRacesPage/>} />
        </Routes>
    </div>
  );
}

export default App;
