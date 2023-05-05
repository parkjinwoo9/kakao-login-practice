
import './App.css';

import Home from './components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Kakao from './components/Kakao';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/kakao' element={<Kakao />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
