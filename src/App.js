import Header from './components/Header/Header';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Products from './components/Products-Section/Products'
import Footer from './components/Footer/Footer';
import Info from './components/Info/Info';
import Slider from './components/Slider/Slider'
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Products/>
        <Slider/>
        <Info/>
        <Footer/>

        
        <Routes>
          
        
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
