import { type ReactElement } from "react";
import { Container } from "./styles";
interface expensesProps {
  amount: number;
}

function ExpenseAmout(props: expensesProps): ReactElement {
  const amount = props.amount;
  return (
    <>
      <Container>{amount}</Container>
    </>
  );
}

export default ExpenseAmout;
