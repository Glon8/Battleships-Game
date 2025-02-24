import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import GameBoard from './pages/GameBoard'
import Score from './pages/Score'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/game-board' element={<GameBoard/>}></Route>
          <Route path='/score' element={<Score/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
