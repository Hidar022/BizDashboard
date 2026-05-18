import React, { useState, useEffect } from 'react';
import api from "../api"; 
import Navbar from "../components/Navbar";
import OverviewCard from "../components/OverviewCard";
import RevenueChart from "../components/RevenueChart";
import CategoryChart from "../components/CategoryChart";
import TransactionsTable from "../components/TransactionsTable";

const Dashboard = ({ setIsOpen }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/api/transactions/');
        setTransactions(response.data);
      } catch (err) {
        console.error("Error fetching data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const deleteTransaction = async (id) => {
    if (window.confirm("Are you sure you want to delete this transaction, bro?")) {
      try {
        await api.delete(`/api/transactions/${id}/`);
        // Refresh the list immediately after deleting
        setTransactions(transactions.filter(t => t.id !== id));
      } catch (err) {
        console.error("Failed to delete transaction", err);
        alert("Error deleting item.");
      }
    }
  };

// --- CALCULATIONS ---
  // 1. Sum up all Income
  const totalRevenue = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

  // 2. Sum up all Expenses (Your "Orders/Costs")
  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

  // 3. Calculate the Net Balance (What is actually left in the account)
  const netBalance = totalRevenue - totalExpenses;

  const totalTransactionsCount = transactions.length;

  if (loading) return <div className="flex justify-center items-center h-screen bg-[#0f172a] text-white">Loading...</div>;

  return (
    <div className="flex-1 p-6 bg-[#f5f7fb] min-h-screen">
      <Navbar setIsOpen={setIsOpen} />

      <div className="mt-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Dashboard Overview
        </h2>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <OverviewCard
          title="Net Balance"
          value={`$${netBalance.toLocaleString()}`}
          growth={netBalance >= 0 ? "+0.0%" : "-0.0%"} // Dynamic indicator
        />
        <OverviewCard
          title="Total Revenue"
          value={`$${totalRevenue.toLocaleString()}`}
          growth="+12.5%" 
        />
        <OverviewCard
          title="Total Expenses"
          value={`$${totalExpenses.toLocaleString()}`}
          growth="+5.2%"
        />
        <OverviewCard
          title="Total Actions"
          value={totalTransactionsCount}
          growth="+8.3%"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="col-span-2">
          <RevenueChart data={transactions} />
        </div>
        <div>
          <CategoryChart data={transactions} />
        </div>
      </div>

      <TransactionsTable transactions={transactions} onDelete={deleteTransaction} />
    </div>
  );
};

export default Dashboard;