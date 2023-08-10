import { useState, type ReactElement } from "react";
import { Container } from "./styles";

function ExpenseForm(): ReactElement {
  /* 
      1- First way to manipulate the user input
  const [inputTitle, setInputTitle] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputAmout, setInputAmout] = useState("");
*/

  /*
      2 - Second way to manipulate the user input
*/
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmout: "",
    enteredDate: "",
  });
  const titleChangeHandler = (event: { target: { value: any } }) => {
    //setInputTitle(event.target.value);
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
  };
  const amoutChangeHandler = (event: { target: { value: any } }) => {
    //setInputAmout(event.target.value);
    setUserInput({
      ...userInput,
      enteredAmout: event.target.value,
    });
  };
  const dateChangeHandler = (event: { target: { value: any } }) => {
    //setInputDate(event.target.value);
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };
  return (
    <Container>
      <form>
        <div className="newExpenseControls">
          <div className="newExpenseControl">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} />
            <label>Date</label>
            <input
              type="date"
              min="2023-01-01"
              max="2025-12-31"
              onChange={dateChangeHandler}
            />
            <label>Amount</label>
            <input type="number" onChange={amoutChangeHandler} />
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
