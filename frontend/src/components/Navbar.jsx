import { FaBars } from "react-icons/fa";

const Navbar = ({ setIsOpen }) => {
  return (
    <div className="bg-white p-5 rounded-2xl flex justify-between items-center shadow-sm">
      
      {/* Left side: Hamburger (mobile only) + Title */}
      <div className="flex items-center gap-3">
        {/* --- INSERTED BUTTON STARTS HERE --- */}
        <button
          className="lg:hidden text-2xl text-gray-800"
          onClick={() => setIsOpen(true)}
        >
          <FaBars />
        </button>
        {/* --- INSERTED BUTTON ENDS HERE --- */}

        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h1>
      </div>

      {/* Right side: Date and Export */}
      <div className="flex items-center gap-4">
        <button className="border px-4 py-2 rounded-xl hidden sm:block">
          May 1 - May 18, 2025
        </button>

        <button className="bg-purple-600 text-white px-5 py-2 rounded-xl">
          Export
        </button>
      </div>

    </div>
  );
};

export default Navbar;