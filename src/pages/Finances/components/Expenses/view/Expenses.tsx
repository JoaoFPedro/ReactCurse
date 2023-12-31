import { type ReactElement } from "react";
import ExpenseItem from "../../ExpenseItem";

import { Container } from "./styles";

interface expensesProps {
  title: string;
  amount: number;
  date: Date;
}
function Expenses(props: expensesProps): ReactElement {
  return (
    <>
      <div className="container">
        <Container>
          <ExpenseItem
            title={props.title}
            amount={props.amount}
            date={props.date}
          />
        </Container>
      </div>
    </>
  );
}

export default Expenses;
