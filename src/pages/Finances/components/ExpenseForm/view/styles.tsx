import { styled } from "styled-components";

export const Container = styled.div`
  .newExpenseControls {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
    text-align: center;
    justify-content: center;
  }

  .newExpenseControl label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }

  .newExpenseControl input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
  }

  .new-expense__actions {
    text-align: right;
  }
`;
