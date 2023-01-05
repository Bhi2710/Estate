import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components.js/Header';
import Main from './components.js/Main';
import Body from './components.js/Body';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/body/:id' element={<Body />} />
      </Routes>
    </div>
  );
}

export default App;
