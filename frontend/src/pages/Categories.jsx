import React, { useState, useEffect } from 'react';
import api from '../api';

const Categories = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get('/api/transactions/').then(res => setTransactions(res.data));
  }, []);

  // Grouping logic: sums up amounts by category name
  const categories = transactions.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + parseFloat(t.amount);
    return acc;
  }, {});

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Spending by Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(categories).map(([name, total]) => (
          <div key={name} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-500 font-medium uppercase text-xs tracking-wider">{name}</p>
            <h3 className="text-2xl font-bold text-gray-800 mt-1">${total.toLocaleString()}</h3>
            <div className="w-full bg-gray-100 h-2 rounded-full mt-4">
               <div className="bg-purple-600 h-2 rounded-full" style={{width: '60%'}}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;