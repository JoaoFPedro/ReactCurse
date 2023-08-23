import { useState, type ReactElement } from "react";
import Expenses from "../components/Expenses/view/Expenses";
import ExpensesFilter from "../components/ExpensesFilter";
import NewExpense from "../components/NewExpense";
import { Container } from "./style";
const DummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294,
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
  const [expenses, setExpenses] = useState(DummyExpenses);

  const addExpenseHandler = (expense: {
    id: string;
    title: string;
    amount: number;
    date: Date;
  }) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Container className="Container01">
        <ExpensesFilter
          selected={filteredYear}
          OnchangeFilter={filterChangeHandler}
        />
        {filteredExpenses.length === 0 && <p> No Expesens Found</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expenses) => (
            <Expenses
              key={expenses.id}
              title={expenses.title}
              amount={expenses.amount}
              date={expenses.date}
            />
          ))}
      </Container>
    </>
  );
}

export default Finances;
