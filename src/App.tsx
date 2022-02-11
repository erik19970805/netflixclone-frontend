import Home from '@pages/Home';
import Movies from '@pages/Movies';
import { Route, Routes } from 'react-router-dom';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
  </div>
)

export default App;
