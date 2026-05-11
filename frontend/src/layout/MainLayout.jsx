import { useState } from "react";

import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">

      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <div className="flex-1">

        {children(setIsOpen)}

      </div>

    </div>
  );
};

export default MainLayout;