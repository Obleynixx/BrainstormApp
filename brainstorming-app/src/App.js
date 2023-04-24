import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import AboutPage from './pages/About/About';
import BrainstormToolPage from './pages/BrainstormTool/Brainstorm';
import BoardPage from './pages/Board/BoardPage';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/brainstorm" element={<BrainstormToolPage />} />
          <Route path="/board" element={<BoardPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
