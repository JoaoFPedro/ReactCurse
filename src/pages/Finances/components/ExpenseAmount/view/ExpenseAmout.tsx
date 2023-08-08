import { type ReactElement } from "react";
import { Container } from "./styles";
interface expenseProps {
  amount: number;
}

function ExpenseAmout(props: expenseProps): ReactElement {
  return (
    <Container>
      <div>R$ {props.amount}</div>
    </Container>
  );
}

export default ExpenseAmout;
