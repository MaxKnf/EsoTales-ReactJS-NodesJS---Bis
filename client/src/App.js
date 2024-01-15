import './App.css';
import  Navbar  from './components/ui/Navbar';
import Footer from './components/ui/Footer'; 
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Classes from './pages/Classes';
import News from './pages/News';
import Guides from "./pages/Guides";
import DisplayClasses from './pages/DisplayClasses'
import DisplayGuides from './pages/DisplayGuides'
import DisplayNews from './pages/DisplayNews'
import CreateNews from './pages/CreateNews'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/classes' element={<Classes/>}/>
        <Route path='/classes/:id' element={<DisplayClasses/>}/>
        <Route path='/guides' element={<Guides/>}/>
        <Route path='/guides/:id' element={<DisplayGuides/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/news/:id' element={<DisplayNews/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/createnews' element={<CreateNews/>}/> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;