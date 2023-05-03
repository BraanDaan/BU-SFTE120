import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './bootstrap.min.css';
import HomeScreen from "./screens/home.js";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <main className='py-3'>
        <Header/>
          <Container>
            <Routes>
              <Route path='/' element={<HomeScreen/>}/>
            </Routes>
          </Container>
        <Footer/>
      </main>
    </Router>
  );
}

export default App;
