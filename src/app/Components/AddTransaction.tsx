import React, { useState } from 'react';

interface AddTransactionProps {
  onAddTransaction: (transaction: { type: string; amount: number; category: string }) => void;
}

const AddTransaction: React.FC<AddTransactionProps> = ({ onAddTransaction }) => {
  const [type, setType] = useState('Income');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !category) return;

    onAddTransaction({ type, amount, category });
    setAmount(0);
    setCategory('');
  };

  return (
    <section id="add-transaction" className="py-10 bg-gray-100 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Add Transaction</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 max-w-md mx-auto">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="p-3 border rounded"
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            placeholder="Amount"
            className="p-3 border rounded"
          />
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
            className="p-3 border rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600"
          >
            Add Transaction
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddTransaction;
