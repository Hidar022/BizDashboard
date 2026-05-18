import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import Transactions from './pages/Transactions';
import Categories from './pages/Categories';
import Reports from './pages/Reports'; 
import Settings from './pages/Settings'; 
// The "Bouncer" Logic
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('access');
  if (!token) return <Navigate to="/login" replace />;
  return children;
};

// Updated Layout Wrapper to lock the sidebar and scroll only the main content
const DashboardLayout = ({ children, isOpen, setIsOpen }) => (
  <div className="flex h-screen w-screen overflow-hidden bg-[#f5f7fb]">
    {/* Sidebar stays locked here */}
    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    
    {/* Only this main area will scroll */}
    <main className="flex-1 overflow-x-hidden overflow-y-auto">
      {children}
    </main>
  </div>
);

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* All Protected Dashboard Routes */}
        <Route path="/" element={
          <ProtectedRoute>
            <DashboardLayout isOpen={isOpen} setIsOpen={setIsOpen}>
              <Dashboard setIsOpen={setIsOpen} />
            </DashboardLayout>
          </ProtectedRoute>
        } />

        <Route path="/transactions" element={
          <ProtectedRoute>
            <DashboardLayout isOpen={isOpen} setIsOpen={setIsOpen}>
              <Transactions />
            </DashboardLayout>
          </ProtectedRoute>
        } />

        <Route path="/categories" element={
          <ProtectedRoute>
            <DashboardLayout isOpen={isOpen} setIsOpen={setIsOpen}>
              <Categories />
            </DashboardLayout>
          </ProtectedRoute>
        } />

        <Route path="/reports" element={
          <ProtectedRoute>
            <DashboardLayout isOpen={isOpen} setIsOpen={setIsOpen}>
              <Reports />
            </DashboardLayout>
          </ProtectedRoute>
        } />

        <Route path="/settings" element={
          <ProtectedRoute>
            <DashboardLayout isOpen={isOpen} setIsOpen={setIsOpen}>
              <Settings />
            </DashboardLayout>
          </ProtectedRoute>
        } />

        {/* Redirect unknown paths */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;