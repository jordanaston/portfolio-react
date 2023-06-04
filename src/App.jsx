import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Info from './pages/Info';

function App() {
  return (
    <div className="flex min-h-screen bg-dark-mode-bg bg-cover bg-center">
        <div className="absolute border border-dark-mode-text m-2 sm:m-4 lg:m-6 inset-0">
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












