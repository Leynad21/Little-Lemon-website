import './App.css';
import HomePage from './pages/HomePage';
import Nav from './components/pageComponents/Nav';
import Footer from './components/pageComponents/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='container app__container'>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
