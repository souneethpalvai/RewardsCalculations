import { useState, useEffect } from "react";
import "./styles.css";

const CustomerRewardsTable = ({ transactionData }) => {
  const [tranformedData, setTransformedData] = useState([]);
  useEffect(() => {
    const updatedTrans = transactionData.map(transaction => {
      const cName = transaction.cName;
      let totalRewardsPoints = 0;
      let monthlyRewards = [];
      transaction.monthlyTransactionData.map(mTrans => {
        let points = 0;
        mTrans.billAmounts.map(amt => {
          let above100 = amt - 100;
          if (above100 > 0) {
            points += above100 * 2;
          }
          if (amt > 50) {
            points += 50;
          }
        });
        totalRewardsPoints += points;
        monthlyRewards.push({
          month: mTrans.billingMonth,
          totalPoints: points
        });
      });
      return { cName, totalRewardsPoints, monthlyRewards };
    });
    setTransformedData(updatedTrans);
  }, [transactionData]);
  return (
    <table id="customers">
      <tr>
        <th>Customer Name</th>
        {tranformedData[0] && tranformedData[0].monthlyRewards.map(item => {
          return <th>{item.month}</th>;
        })}
        <th>Total Reward Points</th>
      </tr>
      {tranformedData.map((data, index) => {
        return (
          <tr key={index}>
            <td>{data.cName}</td>
            {data.monthlyRewards.map(month => {
              return <td>{month.totalPoints}</td>;
            })}
            <td>{data.totalRewardsPoints}</td>
          </tr>
        );
      })}
    </table>
  );
};
export default CustomerRewardsTable;
