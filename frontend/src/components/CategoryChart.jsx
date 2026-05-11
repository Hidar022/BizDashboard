import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { categoryData } from "../data/chartData";

const COLORS = [
  "#7c3aed",
  "#3b82f6",
  "#22c55e",
  "#f59e0b",
];

const CategoryChart = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">

      <h2 className="text-xl font-bold mb-6">
        Revenue by Category
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <PieChart>

          <Pie
            data={categoryData}
            dataKey="value"
            outerRadius={100}
            label
          >

            {categoryData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
};

export default CategoryChart;