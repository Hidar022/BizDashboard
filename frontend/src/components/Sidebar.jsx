import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  FaTimes, 
  FaHome, 
  FaExchangeAlt, 
  FaChartPie, 
  FaFileAlt, 
  FaCog, 
  FaSignOutAlt 
} from "react-icons/fa";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // This function clears the session and kicks the user to login
  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  // Helper function to handle styling for active/inactive links
  const getLinkClass = (path) => {
    const baseClass = "flex items-center gap-3 p-3 rounded-xl mb-2 cursor-pointer transition-all duration-200";
    const isActive = location.pathname === path;
    
    return isActive 
      ? `${baseClass} bg-purple-600 text-white shadow-lg shadow-purple-900/20` 
      : `${baseClass} text-gray-400 hover:bg-[#1f2f56] hover:text-white`;
  };

  return (
    <div
      className={`
        fixed lg:static top-0 left-0 z-50
        w-[260px] h-screen bg-[#14213d]
        text-white flex flex-col justify-between
        transition-transform duration-300 shadow-2xl
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
    >
      <div>
        {/* Header Section */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700/50">
          <h1 className="text-2xl font-bold tracking-tight">
            Biz<span className="text-purple-500">Dashboard</span>
          </h1>
          
          <button
            className="lg:hidden p-2 hover:bg-gray-700 rounded-lg transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="mt-6 px-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="block">
            <div className={getLinkClass("/")}>
              <FaHome className="text-lg" />
              <span className="font-medium">Dashboard</span>
            </div>
          </Link>

          <Link to="/transactions" onClick={() => setIsOpen(false)} className="block">
            <div className={getLinkClass("/transactions")}>
              <FaExchangeAlt className="text-lg" />
              <span className="font-medium">Transactions</span>
            </div>
          </Link>

          <Link to="/categories" onClick={() => setIsOpen(false)} className="block">
            <div className={getLinkClass("/categories")}>
              <FaChartPie className="text-lg" />
              <span className="font-medium">Categories</span>
            </div>
          </Link>

          <Link to="/reports" onClick={() => setIsOpen(false)} className="block">
            <div className={getLinkClass("/reports")}>
              <FaFileAlt className="text-lg" />
              <span className="font-medium">Reports</span>
            </div>
          </Link>

          <Link to="/settings" onClick={() => setIsOpen(false)} className="block">
            <div className={getLinkClass("/settings")}>
              <FaCog className="text-lg" />
              <span className="font-medium">Settings</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Footer Section: User Profile & Logout */}
      <div className="p-4 border-t border-gray-700/50 space-y-4">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center font-bold shadow-md">
            A
          </div>
          <div className="overflow-hidden">
            <h3 className="font-semibold text-sm truncate">Aliyu Bin Ahmad</h3>
            <p className="text-xs text-gray-400">Software Engineer</p>
          </div>
        </div>

        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 p-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-500 transition-all font-medium"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;