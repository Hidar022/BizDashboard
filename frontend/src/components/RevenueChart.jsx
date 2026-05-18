import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RevenueChart = ({ data }) => {
  // Process the live transaction data to feed your line chart structure
  const processedData = [...data]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map(t => ({
      name: new Date(t.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      revenue: parseFloat(t.amount), // Matches the dataKey="revenue" in your Line component
    }));

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          Revenue Overview
        </h2>

        <select className="border rounded-lg px-3 py-2 outline-none text-gray-600 bg-gray-50 text-sm cursor-pointer">
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={processedData.length > 0 ? processedData : [{ name: 'No Data', revenue: 0 }]}>
          <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} />
          <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #f1f5f9' }}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#7c3aed" // Your exact clean purple stroke
            strokeWidth={3}
            dot={{ r: 4, strokeWidth: 2 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;