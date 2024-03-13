//import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import HomeScreen from './Screen/HomeScreen';
import QuoteList from './Screen/QuoteScreen';
import RestaurantsScreen from './Screen/RestaurantsScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
      <Router>
        <div className='app'>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/quotes' element={<QuoteList />} />
            <Route path='/restaurants' element={<RestaurantsScreen />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
};

export default App;
