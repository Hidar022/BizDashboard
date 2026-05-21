import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Landing from './pages/Landing'; // 1. Import your new premium landing component
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import Transactions from './pages/Transactions';
import Categories from './pages/Categories';
import Reports from './pages/Reports'; 
import Settings from './pages/Settings'; 
import { FaBars } from 'react-icons/fa'; 

// The "Bouncer" Logic
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('access');
  if (!token) return <Navigate to="/login" replace />;
  return children;
};

// Aligned top-bar layout to remove duplicate close buttons and align the hamburger menu
const DashboardLayout = ({ children, isOpen, setIsOpen }) => (
  <div className="flex h-screen w-screen overflow-hidden bg-[#f5f7fb] relative">
    
    {/* MOBILE TOP BAR (Only visible on screens smaller than lg) */}
    <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#14213d] text-white flex items-center px-4 z-50 shadow-md gap-3">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-xl p-2 focus:outline-none text-gray-200 hover:text-white transition-colors cursor-pointer"
      >
        <FaBars />
      </button>

      <h1 className="text-xl font-bold tracking-tight">
        Biz<span className="text-purple-500">Dashboard</span>
      </h1>
    </div>

    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    
    {/* MOBILE OVERLAY */}
    {isOpen && (
      <div 
        onClick={() => setIsOpen(false)}
        className="lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity"
      />
    )}
    
    <main className="flex-1 overflow-x-hidden overflow-y-auto pt-16 lg:pt-0">
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
        {/* 2. Base path now delivers the obsidian premium introduction scene */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* All Protected Dashboard Routes */}
        {/* 3. Shifted primary dashboard node to /dashboard */}
        <Route path="/dashboard" element={
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

        {/* 4. Catch-all routing now naturally defaults safely back to Landing */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;