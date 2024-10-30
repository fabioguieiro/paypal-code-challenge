import { TTableProps } from "./types";
import { formatTransactionDate } from "./util";

export const Table = ({ data }: TTableProps) => {
  return (
    <table className="w-[90%] ">
      <tr className=" bg-cyan-700 hover:bg-cyan-800">
        <th>ID</th>
        <th>Date</th>
        <th>Description</th>
        <th>Amount</th>
      </tr>
      {data.map((transaction) => {
        const date = new Date(transaction.date);
        console.log("DATE: ", date);
        return (
          <tr key={transaction.id} className="bg-gray-600 border">
            <td>{transaction.id}</td>
            <td>{formatTransactionDate(transaction.date)}</td>
            <td>{transaction.description}</td>
            <td> U$ {transaction.amount}</td>
          </tr>
        );
      })}
    </table>
  );
};
