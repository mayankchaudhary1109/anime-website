
import './App.css';
import Main from './components/Main'
import Navbar from './components/Navbar'
import Middle from './components/Middle'
import Latest from './components/Latest'
import Signin from './components/Signin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
   <BrowserRouter>
     <Navbar/>
   <Routes>
   <Route path="/" element={ <Main/> } />
   <Route path="/sign" element={ <Signin/> } />
   <Route path="/about" element={ <Middle/> } />
   </Routes>
   <Latest/>
   </BrowserRouter>
    </>
  );
}

export default App;
