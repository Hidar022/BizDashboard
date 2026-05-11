import { transactions } from "../data/transactions";

const TransactionsTable = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm mt-8">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-xl font-bold">
          Recent Transactions
        </h2>

        <button className="text-purple-600 font-semibold">
          View All
        </button>

      </div>

      <table className="w-full">

        <thead>

          <tr className="text-left text-gray-500 border-b">

            <th className="pb-3">Customer</th>
            <th className="pb-3">Date</th>
            <th className="pb-3">Amount</th>
            <th className="pb-3">Status</th>

          </tr>

        </thead>

        <tbody>

          {transactions.map((transaction) => (

            <tr
              key={transaction.id}
              className="border-b last:border-none"
            >

              <td className="py-4">
                {transaction.customer}
              </td>

              <td>
                {transaction.date}
              </td>

              <td>
                {transaction.amount}
              </td>

              <td>

                <span
                  className={`
                    px-3 py-1 rounded-full text-sm

                    ${
                      transaction.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : transaction.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }
                  `}
                >

                  {transaction.status}

                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default TransactionsTable;