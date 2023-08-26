import { type ReactElement } from "react";
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
  return (
    <>
      <li className="listItem">
        <Container>
          <div>
            <ExpenseDate date={props.date} />
          </div>
          <div className="expense-item_description">
            <ExpenseTitle title={props.title} />
            <ExpenseAmout amount={props.amount} />
          </div>
        </Container>
      </li>
    </>
  );
}
export default ExpenseItem;
