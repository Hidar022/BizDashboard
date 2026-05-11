import {
  FaHome,
  FaExchangeAlt,
  FaChartPie,
  FaFileAlt,
  FaCog
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-[260px] h-screen bg-[#14213d] text-white flex flex-col justify-between">

      <div>
        <div className="p-6 text-2xl font-bold border-b border-gray-700">
          BizDashboard
        </div>

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
          <h3 className="font-semibold">Aliyu Bin</h3>
          <p className="text-sm text-gray-400">Developer</p>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;