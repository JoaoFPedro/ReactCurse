import { useState, type ReactElement } from "react";
import { Container } from "./styles";

interface ExpenseFormProps {
  onSaveExpenseData: (enteredExpenseData: any) => void;
}
function ExpenseForm(props: ExpenseFormProps): ReactElement {
  // 1- First way to manipulate the user input
  const [inputTitle, setInputTitle] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputAmout, setInputAmout] = useState("");

  /*
      2 - Second way to manipulate the user input
*/
  /* 
const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmout: "",
    enteredDate: "",
  });
  */
  const titleChangeHandler = (event: { target: { value: any } }) => {
    setInputTitle(event.target.value);

    /* It will work but it's wrong for working with a lot of data
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
    */
    //If your state update depends on the previous state, it's necessary to pass em arrow function inside the state to unsure that the data is passing correctly
    /*setUserInput((prevState) => {
      return {...prevState, enteredTitle: event.target.value}
    })
    */
  };
  const amoutChangeHandler = (event: { target: { value: any } }) => {
    setInputAmout(event.target.value);

    /* setUserInput((prevState) => {
      return {...prevState, enteredAmout: event.target.value}
    })
    */
  };
  const dateChangeHandler = (event: { target: { value: any } }) => {
    setInputDate(event.target.value);

    /*
    setUserInput((prevState) => {
      return {...prevState, enteredDate: event.target.value}
    })
    */
  };

  const submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const expenseData = {
      title: inputTitle,
      amout: inputAmout,
      date: new Date(inputDate),
    };
    props.onSaveExpenseData(expenseData);
    setInputTitle("");
    setInputDate("");
    setInputAmout("");
  };

  return (
    <Container>
      <form onSubmit={submitHandler}>
        <div className="newExpenseControls">
          <div className="newExpenseControl">
            <label>Title</label>
            <input
              type="text"
              value={inputTitle}
              onChange={titleChangeHandler}
            />
            <label>Date</label>
            <input
              type="date"
              min="2023-01-01"
              max="2025-12-31"
              value={inputDate}
              onChange={dateChangeHandler}
            />
            <label>Amount</label>
            <input
              type="number"
              value={inputAmout}
              onChange={amoutChangeHandler}
            />
          </div>
        </div>
        <div className="newExpenseActions">
          <button type="submit">Adicionar Despesa</button>
        </div>
      </form>
    </Container>
  );
}

export default ExpenseForm;
