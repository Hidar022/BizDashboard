import React from 'react';
import { FaGift, FaChartLine, FaCut, FaUsers } from 'react-icons/fa';

const OverviewCard = ({ title, value, growth, type }) => {
  // Pure mapping matching the layout schema colors and icons from your reference image
  const configuration = {
    revenue: {
      textColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
      icon: <FaGift />
    },
    transactions: {
      textColor: 'text-blue-500',
      bgColor: 'bg-blue-50',
      icon: <FaChartLine />
    },
    order: {
      textColor: 'text-orange-500',
      bgColor: 'bg-orange-50',
      icon: <FaCut />
    },
    customers: {
      textColor: 'text-pink-600',
      bgColor: 'bg-pink-50',
      icon: <FaUsers />
    }
  };

  const current = configuration[type] || configuration.revenue;

  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-start w-full">
      <div className="space-y-1.5">
        <span className="text-xs font-semibold text-gray-400 block tracking-normal">
          {title}
        </span>
        <span className="text-2xl font-bold text-gray-800 block tracking-tight">
          {value}
        </span>
        <div className="flex items-center space-x-1.5 mt-1">
          <span className="text-xs font-bold text-green-500 bg-green-50 px-1.5 py-0.5 rounded-md">
            ↑ {growth}
          </span>
          <span className="text-[11px] text-gray-400 font-medium">from last month</span>
        </div>
      </div>

      {/* Styled clean badge box matching the reference template */}
      <div className={`p-3 rounded-xl ${current.bgColor} ${current.textColor} text-xl flex items-center justify-center`}>
        {current.icon}
      </div>
    </div>
  );
};

export default OverviewCard;