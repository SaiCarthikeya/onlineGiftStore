import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login'
import Home from './components/Home'
import Admin from './components/Admin'
import About from './components/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="admin" element={<Admin/>}></Route>
        <Route path="about" element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
