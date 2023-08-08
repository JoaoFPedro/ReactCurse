import { ReactElement } from "react";
import { Container } from "./styles";

interface conceptsProps {
  title: string;
  image: string;
  description: string;
}
function Items(props: conceptsProps): ReactElement {
  return (
    <Container>
      <li>
        <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </li>
    </Container>
  );
}
export default Items;
