// Hooks
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

import { Form, Button } from 'react-bootstrap';

// Interfaces
import { ITask } from '../interfaces/Task';

type Props = {
    btnText: string;
    taskList: ITask[];
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>('');
    const [difficulty, setDifficulty] = useState<number>(0);

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const id = Math.floor(Math.random() * 1000);
        const newTask: ITask = { id, title, difficulty }; 

        setTaskList!([...taskList, newTask]);
        setTitle('');
        setDifficulty(0);
        console.log(taskList);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === 'title'){
            setTitle(e.target.value);
        } else {
            setDifficulty(parseInt(e.target.value));
        }
    }

  return (
    <Form onSubmit={addTaskHandler} className='mb-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><strong>Título:</strong></Form.Label>
        <Form.Control type="text" name="title" placeholder="Título da tarefa" onChange={handleChange} value={title} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><strong>Dificuldade:</strong></Form.Label>
        <Form.Control type="number" name="difficulty" placeholder="Dificuldade da Tarefa"  onChange={handleChange} value={difficulty} />
      </Form.Group>
      <Form.Group className='d-grid'>
        <Button size='lg' variant="info" type="submit">{btnText}</Button>
      </Form.Group>
    </Form>
  )
}

export default TaskForm