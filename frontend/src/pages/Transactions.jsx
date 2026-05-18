import React, { useState, useEffect } from 'react';
import api from '../api';
import { FaPlus, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: 'Food',
    type: 'expense',
    date: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const res = await api.get('/api/transactions/');
      setTransactions(res.data);
    } catch (err) {
      console.error("Failed to fetch", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/transactions/', formData);
      setFormData({ ...formData, title: '', amount: '' }); // Reset form
      fetchTransactions(); // Refresh list
    } catch (err) {
      alert("Error adding transaction");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Transactions</h1>

      {/* Quick Add Form */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Add New Transaction</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Description (e.g. Salary)"
            className="p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-purple-500"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            required
          />
          <input
            type="number"
            placeholder="Amount"
            className="p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-purple-500"
            value={formData.amount}
            onChange={(e) => setFormData({...formData, amount: e.target.value})}
            required
          />
          <select 
            className="p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-purple-500"
            value={formData.type}
            onChange={(e) => setFormData({...formData, type: e.target.value})}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <input
            type="date"
            className="p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-purple-500"
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
            required
          />
          <button type="submit" className="bg-purple-600 text-white font-bold py-3 rounded-xl hover:bg-purple-700 transition-all flex items-center justify-center gap-2">
            <FaPlus /> Add
          </button>
        </form>
      </div>

      {/* History Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="p-4 font-semibold text-gray-600">Description</th>
              <th className="p-4 font-semibold text-gray-600">Category</th>
              <th className="p-4 font-semibold text-gray-600">Date</th>
              <th className="p-4 font-semibold text-gray-600 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="p-4 text-gray-800 font-medium">{t.title}</td>
                <td className="p-4 text-gray-500">{t.category}</td>
                <td className="p-4 text-gray-500">{t.date}</td>
                <td className={`p-4 text-right font-bold ${t.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
                  {t.type === 'income' ? '+' : '-'}${parseFloat(t.amount).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;