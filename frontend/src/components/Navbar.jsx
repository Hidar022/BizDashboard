const Navbar = () => {
  return (
    <div className="bg-white p-5 rounded-2xl flex justify-between items-center shadow-sm">

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-4">

        <button className="border px-4 py-2 rounded-xl">
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