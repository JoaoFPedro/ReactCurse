import { ReactElement } from "react";
import ExpenseForm from "../../ExpenseForm";
import { Container } from "./styles";
interface NewExpenseFormProps {
  onAddExpense: (addExpenseHandler: any) => void;
}

function NewExpense(props: NewExpenseFormProps): ReactElement {
  const saveExpenseDataHandler = (enteredExpenseData: any) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <Container>
      <div className="newExpense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    </Container>
  );
}

export default NewExpense;
