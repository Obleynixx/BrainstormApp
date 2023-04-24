import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import AboutPage from './pages/About/About';
import BrainstormToolPage from './pages/BrainstormTool/Brainstorm';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/brainstorm" element={<BrainstormToolPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
