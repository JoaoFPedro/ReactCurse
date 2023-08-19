import { useState, type ReactElement } from "react";
import Expenses from "../components/Expenses/view/Expenses";
import ExpensesFilter from "../components/ExpensesFilter";
import NewExpense from "../components/NewExpense";
import { Container } from "./style";
const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
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
    title: "Maconha",
    amount: 700,
    date: new Date(2023, 9, 13),
  },
];
function Finances(): ReactElement {
  const addExpenseHandler = (expense: any) => {
    console.log("Finances app");
    console.log(expense);
  };
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Container className="Container01">
        <ExpensesFilter
          selected={filteredYear}
          OnchangeFilter={filterChangeHandler}
        />
        {expenses.map((expense) => (
          <Expenses
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Container>
    </>
  );
}

export default Finances;
