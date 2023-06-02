import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Info from './pages/Info';

function App() {
  return (
    <div className="fixed inset-0 bg-custom-black z-10">
      <div className="fixed inset-2 border-[1px] border-white z-20">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/info" element={<Info />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

