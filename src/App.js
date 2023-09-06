import './App.css';
import Nav from './components/pageComponents/Nav';
import Footer from './components/pageComponents/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedPage from './pages/ConfirmedPage';

function App() {
  return (
    <div className='container app__container'>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/confirmed" element={<ConfirmedPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
