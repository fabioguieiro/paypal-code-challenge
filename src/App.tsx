import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getMockedTransactions } from "./mockTransactions";
import { TTransaction } from "./types";

function App() {
  const [transactions, setTransactions] = useState<TTransaction[]>([]);
  const [isAPIError, setIsAPIError] = useState(false);

  const fetchData = () => {
    try {
      const APIresponse = getMockedTransactions();
      setTransactions(APIresponse);
    } catch (error) {
      setIsAPIError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App App-header flex flex-col">
      <h1 className="ml-[10%] w-full text-3xl font-bold text-start mb-10">
        Your Transactions
      </h1>

      <div className="ml-[10%] w-full text-start mb-10 text-sm">
        <p>search for transactions between dates</p>
        <div className="flex  mt-4 w-1/4 items-center justify-between">
          <p className="font-bold">initial date:</p>
          <input type="date" className="ml-2 h-8 rounded-md w-36"></input>
        </div>
        <div className="flex  mt-4 w-1/4 items-center justify-between">
          <p className="font-bold">final date:</p>
          <input type="date" className="ml-2 h-8 rounded-md w-36"></input>
        </div>
      </div>
      {isAPIError ? (
        <>
          <p>Something went wrong fetching the transaction data...</p>
          <p>Try again later </p>
        </>
      ) : (
        <table className="w-[90%] ">
          <tr className=" bg-cyan-700 hover:bg-cyan-800">
            <th>ID</th>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="bg-gray-600 border">
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td> U$ {transaction.amount}</td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
}

export default App;
