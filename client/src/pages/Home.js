import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Container } from "semantic-ui-react";
import {Card, Image} from 'react-bootstrap'
import orderlyImg from '../images/Orderly.png'
import PrintThisComponent from '../pages/Print';
export default () => {
  const { name} = useContext(AuthContext);
  return (
    
    <div>
    <Card className="text-center"style={{display: 'flex'}}>
<Card.Body>
<Image src={orderlyImg} fluid />
</Card.Body>
</Card>
<PrintThisComponent />
</div>
    

    
  );
};