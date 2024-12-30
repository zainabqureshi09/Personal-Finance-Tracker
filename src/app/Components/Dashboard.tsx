import React from 'react';

interface DashboardProps {
  income: number;
  expenses: number;
}

const Dashboard: React.FC<DashboardProps> = ({ income, expenses }) => {
  const balance = income - expenses;

  return (
    <section id="dashboard" className="py-10 bg-gray-100 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold">Income</h3>
            <p className="text-green-500 text-2xl">${income}</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold">Expenses</h3>
            <p className="text-red-500 text-2xl">${expenses}</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold">Balance</h3>
            <p className={`text-2xl ${balance >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              ${balance}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
