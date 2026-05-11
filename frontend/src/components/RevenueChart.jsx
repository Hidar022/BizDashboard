import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { revenueData } from "../data/chartData";

const RevenueChart = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">
          Revenue Overview
        </h2>

        <select className="border rounded-lg px-3 py-2">
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={revenueData}>

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#7c3aed"
            strokeWidth={3}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
};

export default RevenueChart;