import React, { useState, useEffect } from 'react';
import api from '../api';
import RevenueChart from "../components/RevenueChart";
import CategoryChart from "../components/CategoryChart";

const Reports = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get('/api/transactions/').then(res => setTransactions(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Financial Reports</h1>
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Revenue vs Expenses</h2>
          <RevenueChart data={transactions} />
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Category Distribution</h2>
          <div className="h-80">
            <CategoryChart data={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;