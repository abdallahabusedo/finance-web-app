import { ScrollArea, Table, useMantineTheme } from "@mantine/core";
import React from "react";
import StringRow from "./TableRows/StringRow";
import DateRow from "./TableRows/DateRow";

let data = [
  {
    totalAmount: 30000,
    currentDate: new Date().toLocaleString(),
    goalDate: new Date().toLocaleString(),
    monthlyPayment: 1250,
  },
  {
    totalAmount: 30000,
    currentDate: new Date().toLocaleString(),
    goalDate: new Date().toLocaleString(),
    monthlyPayment: 1250,
  },
  {
    totalAmount: 30000,
    currentDate: new Date().toLocaleString(),
    goalDate: new Date().toLocaleString(),
    monthlyPayment: 1250,
  },
];
const TableComponent = () => {
  const theme = useMantineTheme();
  const rows = data.map((item, index) => (
    <tr key={index}>
      <td>
        <StringRow str={index + 1} />
      </td>
      <td>
        <StringRow str={item.totalAmount} />
      </td>
      <td>
        <DateRow date={item.currentDate} />
      </td>
      <td>
        <DateRow date={item.goalDate} />
      </td>
      <td>
        <StringRow str={item.monthlyPayment} />
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Total Amount</th>
            <th>Current Date</th>
            <th>Date to reach goal</th>
            <th>Monthly payment</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
};

export default TableComponent;
