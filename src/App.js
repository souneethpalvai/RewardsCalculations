import { useEffect, useState } from "react";
import "./App.css";
import { getTransactionsData } from "./api";
import CustomerRewardsTable from "./CustomerRewardsTable";

const App = () => {
  const [transactionsList, setTransactions] = useState([]);
  useEffect(() => {
    getTransactionsData()
      .then(response => {
        setTransactions(response.customersTransactionData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <CustomerRewardsTable transactionData={transactionsList} />
    </div>
  );
};

export default App;
