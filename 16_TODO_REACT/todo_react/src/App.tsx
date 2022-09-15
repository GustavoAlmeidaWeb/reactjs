import { useState } from 'react';

// CSS
import styles from './App.module.css';

// Bootstrap
import { Container, Row, Col } from 'react-bootstrap';

// Components
import Footer from './components/Footer';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

// Interfaces
import { ITask } from './interfaces/Task';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);


  return (
    <>
      <Header />
        <Container className={styles.main}>
          <Col xl={{ span: 6, offset: 3 }} className="py-3 text-center">
            <Row>
              <h2 className='mb-3'>O que você vai fazer ?</h2>
              <TaskForm btnText='Criar tarefa' taskList={taskList} setTaskList={setTaskList} />
            </Row>
            <Row>
              <h2 className='mb-3'>Suas tarefas:</h2>
              <TaskList />
            </Row>
          </Col>
        </Container>
      <Footer />
    </>
  );
}

export default App;
