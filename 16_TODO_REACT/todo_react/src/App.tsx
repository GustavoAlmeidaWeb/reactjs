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
import Modal from './components/Modal';

// Interfaces
import { ITask } from './interfaces/Task';


function App() {

  let cache = localStorage.getItem('tasks-list');

  const [taskList, setTaskList] = useState<ITask[]>(!cache ? ([]) : (JSON.parse(cache)));
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(taskList.filter((task) => {
      return task.id !== id;
    }))
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector('#modal');
    if(display) {
      modal!.classList.remove('hide');
    } else {
      modal!.classList.add('hide')
    }
  }

  const editTask = (task: ITask):void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  }

  const updateTask = (id:number, title: string, difficulty: number) => {

    const updatedTask: ITask = {id, title, difficulty};
    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    })

    setTaskList(updatedItems);
    hideOrShowModal(false);
  }

  return (
    <>
      <Modal children={<TaskForm btnText='Editar tarefa' taskList={taskList} setTaskList={setTaskList} task={taskToUpdate} handleUpdate={updateTask} />}/>
      <Header />
        <Container className={styles.main}>
          <Col xl={{ span: 6, offset: 3 }} className="py-3 text-center">
            <Row>
              <h2 className='mb-3'>O que você vai fazer ?</h2>
              <TaskForm btnText='Criar tarefa' taskList={taskList} setTaskList={setTaskList} />
            </Row>
            <Row>
              <h2 className='mb-3'>Suas tarefas:</h2>
              <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask}/>
            </Row>
          </Col>
        </Container>
      <Footer />
    </>
  );
}

export default App;
