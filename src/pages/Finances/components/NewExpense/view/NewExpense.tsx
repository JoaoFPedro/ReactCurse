import { ReactElement } from "react";
import ExpenseForm from "../../ExpenseForm";
import { Container } from "./styles";

function NewExpense(): ReactElement {
  return (
    <Container>
      <div className="newExpense">
        <ExpenseForm />
      </div>
    </Container>
  );
}

export default NewExpense;
