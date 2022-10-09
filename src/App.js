
import './App.css';
import Navbar from'./components/navbar';
import Home from './pages/Homepage';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Footer from './components/footer';
import Thankyou from './pages/thankyou';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
 
  return (

    <div className="App">
     <div>
       <Navbar />
      </div>
      <div className='main'>
      <Routes>
      <Route exact path="/" element={<Home/>} /> 
      <Route exact path="/thankyou" element={<Thankyou/>} />  
      </Routes>
      </div>
      <div>
      <Footer />
      </div>
    </div>
 
  );
}

export default App;
