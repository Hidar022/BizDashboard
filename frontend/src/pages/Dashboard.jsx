import Navbar from "../components/Navbar";
import OverviewCard from "../components/OverviewCard";
import RevenueChart from "../components/RevenueChart";
import CategoryChart from "../components/CategoryChart";

const Dashboard = () => {
  return (
    <div className="flex-1 p-6 bg-[#f5f7fb] min-h-screen">

      <Navbar />

      <div className="mt-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Dashboard Overview
        </h2>
      </div>

      {/* Cards Section */}

      <div className="grid grid-cols-4 gap-6 mt-6">

        <OverviewCard
          title="Total Revenue"
          value="$24,560"
          growth="12.5%"
        />

        <OverviewCard
          title="Transactions"
          value="152"
          growth="8.3%"
        />

        <OverviewCard
          title="Orders"
          value="89"
          growth="5.2%"
        />

        <OverviewCard
          title="Customers"
          value="120"
          growth="7.1%"
        />

      </div>

          <div className="grid grid-cols-3 gap-6 mt-8">

        <div className="col-span-2">
          <RevenueChart />
        </div>

        <div>
          <CategoryChart />
        </div>

      </div>

    </div>
  );
};

export default Dashboard;