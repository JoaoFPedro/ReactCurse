import { styled } from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  text-align: center;

  & > img {
    width: 7%;
  }
  & > h1 {
    margin: 0;
    font-size: 1.5rem;
    color: white;
  }
  & > p {
    margin: 0;
    font-weight: 500;
    color: white;
  }
`;
