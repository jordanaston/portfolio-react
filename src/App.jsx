import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Info from './pages/Info';

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/info" element={<Info />} />
        </Routes>
    </div>
  );
}

export default App;











