import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getMockedTransactions } from "./mockTransactions";
import { TTransaction } from "./types";
import { Header } from "./components/Header";
import { Filter } from "./components/Filter";
import { ErrorMessage } from "./components/ErrorMessage";
import { Table } from "./components/Table";

function App() {
  const [transactions, setTransactions] = useState<TTransaction[]>([]);
  const [isAPIError, setIsAPIError] = useState(false);
  const now = new Date();
  const defaultDate = now.toISOString().slice(0, 10);

  const [filterInitialDate, setFilterInitialDate] = useState(defaultDate);
  const [filterFinalDate, setFilterFinalDate] = useState(defaultDate);

  const fetchData = () => {
    try {
      const APIresponse = getMockedTransactions();
      setTransactions(APIresponse);
    } catch (error) {
      setIsAPIError(true);
    }
  };

  function filterTransactionsByDateRange() {
    const filteredTransactions = transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date * 1000);
      return (
        transactionDate >= new Date(filterInitialDate) &&
        transactionDate <= new Date(filterFinalDate)
      );
    });

    setTransactions(filteredTransactions);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App App-header flex flex-col">
      <Header title="Your Transactions" />
      <Filter
        initialDate={filterInitialDate}
        finalDate={filterFinalDate}
        setInitialDate={setFilterInitialDate}
        setFinalDate={setFilterFinalDate}
        handleFilter={filterTransactionsByDateRange}
      />
      {isAPIError ? (
        <ErrorMessage message="Something went wrong fetching the transaction data..." />
      ) : (
        <Table data={transactions} />
      )}
    </div>
  );
}

export default App;
