import { ReactElement } from "react";
interface ExpensesFilterProps {
  selected: string | number | readonly string[] | undefined;
  OnchangeFilter: (selectedYear: string) => void; // Changed the type to string
}

function ExpensesFilter(props: ExpensesFilterProps): ReactElement {
  const dropdownChangeHandler = (event: { target: { value: any } }) => {
    props.OnchangeFilter(event.target.value);
  };

  return (
    <>
      <div className="expenses-filter_control">
        <label htmlFor="Filter by Year"></label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </>
  );
}

export default ExpensesFilter;
