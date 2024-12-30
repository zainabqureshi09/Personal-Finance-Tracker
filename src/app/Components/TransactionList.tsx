import React from 'react';

interface Transaction {
  type: string;
  amount: number;
  category: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <section id="transactions" className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Transactions</h2>
        <table className="table-auto w-full bg-white shadow rounded">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Category</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{transaction.type}</td>
                <td
                  className={`border px-4 py-2 ${
                    transaction.type === 'Income' ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  ${transaction.amount}
                </td>
                <td className="border px-4 py-2">{transaction.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TransactionList;
