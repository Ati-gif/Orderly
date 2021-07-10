import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Container } from "semantic-ui-react";
import {Card, Image} from 'react-bootstrap'
import orderlyImg from '../images/Orderly.png'

export default () => {
  const { name} = useContext(AuthContext);
  return (
    <Container>
        <Card>
        <Image src={orderlyImg} fluid />
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
    </Container>
  );
};