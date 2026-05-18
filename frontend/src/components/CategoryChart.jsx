import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#7c3aed", // Purple
  "#3b82f6", // Blue
  "#22c55e", // Green
  "#f59e0b", // Amber
];

const CategoryChart = ({ data }) => {
  // Aggregate live backend amounts grouped cleanly by their explicit category string
  const categoryTotals = data.reduce((acc, curr) => {
    const cat = curr.category || 'Other';
    acc[cat] = (acc[cat] || 0) + parseFloat(curr.amount);
    return acc;
  }, {});

  // Restructure grouped values directly into the list shape Recharts reads
  const processedCategoryData = Object.keys(categoryTotals).map(key => ({
    name: key,
    value: categoryTotals[key] // Matches your exact dataKey="value"
  }));

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-xl font-bold mb-6 text-gray-800">
        Revenue by Category
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={processedCategoryData.length > 0 ? processedCategoryData : [{ name: 'No Data', value: 1 }]}
            dataKey="value"
            outerRadius={100}
            label
          >
            {processedCategoryData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryChart;