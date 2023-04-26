import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from "./screens/home.js";

function App() {
  return (
    <Router>
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen/>}/>
          </Routes>
        </Container>
      </main>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn stuff
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
