import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {

const btnClick = () => {
  console.log('AAAA');
  alert('AAAAAAAAAA');
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <view>
          <p>
            ASDASDASDASDASDASDASD
          </p>
        </view>
        <div>
          <p>
            My First React Native Page
          </p>
          <p>
            asd
          </p>
        </div>
        <button
          onClick={btnClick}>MyButton</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <p>asdasdasdasdasd</p>
        <BrowserRouter>
          <div>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
              </ul>
            </nav>
            

            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/About" element={<About />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
