import './App.css';
import { Toaster } from 'react-hot-toast';
import Main from './pages/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  document.body.style.background = "#f3f0ec"
  document.title="Recognizing photo with a particular face"
  return <>
    <Toaster />
    <Navbar/>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
         
        </Routes>
      </BrowserRouter>
  </>
}

export default App;
