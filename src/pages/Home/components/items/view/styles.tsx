import { styled } from "styled-components";

export const Container = styled.div`
  & > li {
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 1rem;
    background: linear-gradient(#250358, #440c66);
    padding: 1.5rem;
    border-radius: 6px;
    box-shadow: 0 2px 20px rgba(234, 78, 240, 0.2);
    width: 50%;
    transition: all 0.2s;
    color: white;
  }
  & > li > img {
    width: 6rem;
    height: 5rem;
    object-fit: contain;
  }
  & > li:hover {
    transform: translateY(-2px);
    transition: transform 0.2s;
    box-shadow: 0 2px 30px rgba(234, 78, 240, 0.4);
  }
`;
