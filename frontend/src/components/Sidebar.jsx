import { FaTimes, FaHome, FaExchangeAlt, FaChartPie, FaFileAlt, FaCog } from "react-icons/fa";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`
        fixed lg:static top-0 left-0 z-50
        w-[260px] h-screen bg-[#14213d]
        text-white flex flex-col justify-between
        transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
    >
      <div>
        {/* --- INSERTED CODE STARTS HERE --- */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h1 className="text-2xl font-bold">BizDashboard</h1>
          
          {/* This button only shows on mobile (lg:hidden) */}
          <button
            className="lg:hidden p-2 hover:bg-gray-700 rounded-lg transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>
        </div>
        {/* --- INSERTED CODE ENDS HERE --- */}

        <div className="mt-6 px-4">
          <div className="flex items-center gap-3 bg-purple-600 p-3 rounded-xl mb-3 cursor-pointer">
            <FaHome />
            <span>Dashboard</span>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#1f2f56] cursor-pointer">
            <FaExchangeAlt />
            <span>Transactions</span>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#1f2f56] cursor-pointer">
            <FaChartPie />
            <span>Categories</span>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#1f2f56] cursor-pointer">
            <FaFileAlt />
            <span>Reports</span>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#1f2f56] cursor-pointer">
            <FaCog />
            <span>Settings</span>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-700 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
          A
        </div>
        <div>
          <h3 className="font-semibold">Aliyu Bin Ahmad</h3>
          <p className="text-sm text-gray-400">Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;