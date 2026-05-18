import React, { useState, useEffect } from 'react';
import api from '../api';
import OverviewCard from '../components/OverviewCard';
import RevenueChart from '../components/RevenueChart';
import CategoryChart from '../components/CategoryChart';
import TransactionsTable from '../components/TransactionsTable';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const fetchData = async () => {
    try {
      const response = await api.get('/api/transactions/');
      setTransactions(response.data);
    } catch (err) {
      console.error("Error fetching dashboard content", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteTransaction = async (id) => {
    if (window.confirm("Are you sure you want to delete this transaction, bro?")) {
      try {
        await api.delete(`/api/transactions/${id}/`);
        setTransactions(transactions.filter(t => t.id !== id));
      } catch (err) {
        console.error("Failed to delete transaction", err);
        alert("Error deleting item.");
      }
    }
  };

  // --- CALCULATION METRICS ---
  const totalRevenue = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

  const netBalance = totalRevenue - totalExpenses;
  const totalTransactionsCount = transactions.length;

  // --- SEARCH & FILTER FILTER ---
  const filteredTransactions = transactions.filter(t => {
    const matchesSearch = t.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (t.category && t.category.toLowerCase().includes(searchTerm.toLowerCase()));
    if (activeFilter === 'all') return matchesSearch;
    return matchesSearch && t.type === activeFilter;
  });

  if (loading) return <div className="p-6 text-gray-500">Loading dynamic data streams...</div>;

  return (
    <div className="p-4 md:p-8 space-y-6 md:space-y-8 bg-[#f8fafc] min-h-screen w-full box-border">
      
      {/* Top Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        </div>
        <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
          <div className="text-xs md:text-sm font-medium text-gray-500 bg-white px-3 py-2 rounded-xl border shadow-sm whitespace-nowrap">
            May 1 - May 18, 2026 📅
          </div>
          <button className="bg-[#7c3aed] text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#6d28d9] transition-all shadow-sm">
            Export
          </button>
        </div>
      </div>

      {/* 4-Column Responsive Metric Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <OverviewCard title="Total Revenue" value={`$${totalRevenue.toLocaleString()}`} growth="12.5%" type="revenue" />
        <OverviewCard title="Total Transactions" value={totalTransactionsCount} growth="8.3%" type="transactions" />
        <OverviewCard title="Average Order" value={`$${(totalTransactionsCount > 0 ? (totalRevenue / totalTransactionsCount).toFixed(2) : 0)}`} growth="5.2%" type="order" />
        <OverviewCard title="Total Customers" value="89" growth="7.1%" type="customers" />
      </div>

      {/* Search and Filter Inputs Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center space-x-2 bg-gray-50 p-1 rounded-xl w-fit">
          {['all', 'income', 'expense'].map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`px-4 py-1.5 rounded-lg text-sm font-semibold capitalize transition-all cursor-pointer ${
                activeFilter === type ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="w-full md:max-w-md">
          <input 
            type="text"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#7c3aed] focus:bg-white text-sm"
          />
        </div>
      </div>

      {/* Main Grid Structure Container */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8 items-start">
        
        {/* LEFT COLUMN CONTAINER: Keeps charts perfectly aligned side-by-side on desktop */}
        <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <RevenueChart data={filteredTransactions} />
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <CategoryChart data={filteredTransactions} />
          </div>
        </div>

        {/* RIGHT COLUMN CONTAINER: Table Feed sits naturally on the side */}
        <div className="xl:col-span-1 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <TransactionsTable transactions={filteredTransactions.slice(0, 5)} onDelete={deleteTransaction} />
        </div>

      </div>

    </div>
  );
};

export default Dashboard;