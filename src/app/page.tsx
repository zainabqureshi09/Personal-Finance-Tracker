'use client';

import { useState } from 'react';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import AddTransaction from './Components/AddTransaction';
import TransactionList from './Components/TransactionList';

export default function Home() {
  const [transactions, setTransactions] = useState<
    { type: string; amount: number; category: string }[]
  >([]);

  const income = transactions
    .filter((t) => t.type === 'Income')
    .reduce((sum, t) => sum + t.amount, 0);
  const expenses = transactions
    .filter((t) => t.type === 'Expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const addTransaction = (transaction: { type: string; amount: number; category: string }) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <>
      <Header />
      <Dashboard income={income} expenses={expenses} />
      <AddTransaction onAddTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </>
  );
}
