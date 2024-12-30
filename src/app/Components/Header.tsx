import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Personal Finance Tracker</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#dashboard" className="hover:underline">Dashboard</Link></li>
            <li><Link href="#transactions" className="hover:underline">Transactions</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
