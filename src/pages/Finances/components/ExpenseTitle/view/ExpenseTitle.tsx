import { type ReactElement } from "react";

interface expensesProps {
  title: string;
}

function ExpenseTitle(props: expensesProps): ReactElement {
  const title = props.title;
  return (
    <>
      <h1>{title}</h1>
    </>
  );
}

export default ExpenseTitle;
