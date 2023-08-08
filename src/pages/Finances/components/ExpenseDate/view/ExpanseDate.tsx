import { type ReactElement } from "react";
import { Container } from "./styles";
interface expensesProps {
  date: Date;
}

function ExpenseDate(props: expensesProps): ReactElement {
  const month = props.date.toLocaleString("pt-BR", { month: "long" });
  const year = props.date.toLocaleString("pt-BR", { year: "numeric" }); //props.expense.date,getFyllYear() também iria retornar o mesmo resutlado
  const day = props.date.toLocaleString("pt-BR", { day: "2-digit" });
  return (
    <Container>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day} </div>
    </Container>
  );
}
export default ExpenseDate;
