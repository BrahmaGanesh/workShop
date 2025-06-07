import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import HeroSection from './components/hersection';
import ServicesPreview from './components/services';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Services' element={<ServicesPreview/>}></Route>
      <Route path='/Shop' element={<HeroSection/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
