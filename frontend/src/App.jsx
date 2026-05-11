import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Later, this 'isAuthenticated' will come from your Django Token
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Dashboard Route */}
        <Route 
          path="/" 
          element={
            <div className="flex min-h-screen bg-[#f5f7fb]">
              <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
              <Dashboard setIsOpen={setIsOpen} />
            </div>
          } 
        />

        {/* Redirect any unknown path to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;