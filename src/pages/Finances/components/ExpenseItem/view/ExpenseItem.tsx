import { useState, type ReactElement } from "react";
import ExpenseAmout from "../../ExpenseAmount";
import ExpenseDate from "../../ExpenseDate";
import ExpenseTitle from "../../ExpenseTitle";
import { Container } from "./styles";
interface expensesProps {
  title: string;
  amount: number;
  date: Date;
}

function ExpenseItem(props: expensesProps): ReactElement {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Updated");
  };

  return (
    <Container>
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item_description">
        <ExpenseTitle title={title} />
        <ExpenseAmout amount={props.amount} />
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Container>
  );
}
export default ExpenseItem;
