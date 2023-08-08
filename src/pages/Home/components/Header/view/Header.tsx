import { type ReactElement } from "react";
import keyConcepts from "../../../../../../src/assets/images/key-concepts.png";
import { Container } from "./styles";

function Header(): ReactElement {
  return (
    <Container>
      <img src={keyConcepts} alt="img"></img>
      <h1>Key React Concepts</h1>
      <p>Select Key React concepts you should know about</p>
    </Container>
  );
}
export default Header;
