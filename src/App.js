import {
  Route, Routes
} from 'react-router-dom'
import End from './controller/end';
import Game from './controller/game';
import Home from './controller/home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/game' element={<Game />} />
      <Route path='/end' element={<End />} />
    </Routes>
  );
}

export default App;
