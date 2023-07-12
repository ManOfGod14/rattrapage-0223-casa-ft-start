import {
  Card,
  Col,
  Container,
  Row
} from 'react-bootstrap';
import { 
  Compteur1, 
  Compteur2, 
  Compteur3,
  Compteur4,
  Compteur5,
  Compteur6,
  Compteur7,
  Compteur8
} from './app/Compteurs';

function App() {
  return (
    <>
      <Container>
        <Card>
          <h1 className='text-center'>
            Les Hooks dans React
          </h1>
        </Card>
        
        <Row className='text-white'>
          <Col>
            <h2 className="py-2">Le hook useState</h2>
            <Compteur1 />
            <Compteur2 />
            <Compteur3 />
            <Compteur4 />

            <h2 className="py-2">Création des hooks personnalisés</h2>
            <Compteur5 />

            <h2 className="py-2">Le hook useEffect</h2>
            <Compteur6 />
            <Compteur7 />
            <Compteur8 />

            <h2 className="py-2">Le hook useRef</h2>
          </Col>

          <Col>
            <h2 className="py-2">Le hook useMemo et useCallback</h2>

            <h2 className="py-2">Le hook useLayoutEffect</h2>

            <h2 className="py-2">Le hook useReducer Vs useState</h2>

            <h2 className="py-2">Le hook useContexte</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
