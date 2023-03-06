import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 4, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Gym Yearly Subscription",
    amount: 200.50,
    date: new Date(2022, 2, 1),
  },
  {
    id: "e6",
    title: "Bike",
    amount: 1300,
    date: new Date(2022, 8, 27),
  },
  {
    id: "e7",
    title: "New Pet Dog",
    amount: 300.92,
    date: new Date(2023, 1, 7),
  },
  {
    id: "e8",
    title: "Air Conditioner",
    amount: 139.99,
    date: new Date(2019, 9, 18),
  },
  {
    id: "e9",
    title: "New sofa",
    amount: 599.99,
    date: new Date(2019, 11, 4),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2',{},"Let's get started!"),
  //   React.createElement(Expenses,{items: expenses})
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
