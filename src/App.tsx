import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {

  return (
    <Router>
      <Routes>
        {/* Ruta default */}
          <Route path="/" element={<Login />} />
          {/* Ruta dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </Router>
  )
}

export default App
