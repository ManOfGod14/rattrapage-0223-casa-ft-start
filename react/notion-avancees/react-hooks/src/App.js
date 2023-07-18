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
import { 
  CommentList, 
  TodoListUsingAjax 
} from './app/ApiFectch';
import { 
  CompteurDecompteurUseReducer,
  CompteurDecompteurUseState,
  PerformanceUseCallback,
  PerformanceUseLayoutEffect,
  PerformanceUseMemo,
  PerformanceUseRef 
} from './app/Performances';
import { ToolbarClassic } from './app/contextes/ToolbarClassic';
import { ToolbarContext } from './app/contextes/ToolbarContext';

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
            <TodoListUsingAjax />
            <CommentList />
          </Col>

          <Col>
            <h2 className="py-2">Le hook useRef</h2>
            <PerformanceUseRef />

            <h2 className="py-2">Le hook useMemo et useCallback</h2>
            <PerformanceUseMemo />
            <PerformanceUseCallback />

            <h2 className="py-2">Le hook useLayoutEffect</h2>
            <PerformanceUseLayoutEffect />

            <h2 className="py-2">Le hook useReducer Vs useState</h2>
            <h4>Exercice avec useState</h4>
            <CompteurDecompteurUseState start={10} step={5} />
            <CompteurDecompteurUseState start={100} step={25} />
            <h4>Exercice avec useReducer</h4>
            <CompteurDecompteurUseReducer start={1000} step={50} />

            <h2 className="py-2">Le hook useContexte</h2>
            <h4>Exemple classique avec les props qu'un composant parent envoie à ses enfants</h4>
            <ToolbarClassic />

            <h4>Exemple avec les contexts d'envoie d'informations d'un composant parent à ses enfants</h4>
            <ToolbarContext />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
