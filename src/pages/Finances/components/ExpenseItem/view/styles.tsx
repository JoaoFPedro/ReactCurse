import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;

  & > div {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    flex-grow: 1;
  }
  & > div > h1 {
    font-size: 26px;
    margin: 1rem;
    color: white;
    padding: 0 5%;
  }
`;
