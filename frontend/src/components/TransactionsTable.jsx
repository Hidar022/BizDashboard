import React from 'react';
import { FaTrash } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; // 1. IMPORT THIS AT THE TOP

const TransactionsTable = ({ transactions, onDelete }) => { 
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          Recent Transactions
        </h2>
        {/* 2. CHANGED FROM <button> TO <Link> AND ADDED to="/transactions" */}
        <Link 
          to="/transactions" 
          className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
        >
          View All
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="pb-3 font-medium">Description</th>
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 font-medium">Amount</th>
              <th className="pb-3 font-medium">Type</th>
              <th className="pb-3 font-medium text-center">Action</th> 
            </tr>
          </thead>

          <tbody>
            {transactions.length > 0 ? (
              transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b last:border-none hover:bg-gray-50 transition-colors">
                  <td className="py-4 text-gray-800 font-medium">
                    {transaction.title}
                  </td>
                  <td className="text-gray-600">
                    {transaction.date}
                  </td>
                  <td className={`font-semibold ${
                    transaction.type === "income" ? "text-green-600" : "text-gray-900"
                  }`}>
                    {transaction.type === "income" ? "+" : "-"}${parseFloat(transaction.amount).toLocaleString()}
                  </td>
                  <td>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      transaction.type === "income"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}>
                      {transaction.type.toUpperCase()}
                    </span>
                  </td>
                  <td className="text-center">
                    <button 
                      onClick={() => onDelete(transaction.id)} 
                      className="text-red-400 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-all duration-200"
                      title="Delete Transaction"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-10 text-center text-gray-400"> 
                  No transactions found. Add some in your Transactions page!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;