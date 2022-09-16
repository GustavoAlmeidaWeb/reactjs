import { ITask } from '../interfaces/Task'
import styles from './TaskList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

type Props = {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask):void;
}

const TaskList = ({ handleEdit, handleDelete, taskList }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div className={styles.task} key={task.id}>
            <div>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div>
            <OverlayTrigger placement="top" overlay={<Tooltip>Editar <strong>Tarefa</strong>.</Tooltip>}>
              <button className='btn btn-info mx-2' onClick={() => handleEdit(task)}><FontAwesomeIcon icon='pen-nib' /></button>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>Excluir <strong>Tarefa</strong>.</Tooltip>}>
              <button className='btn btn-danger' onClick={() => handleDelete(task.id)}><FontAwesomeIcon icon='trash-can' /></button>
            </OverlayTrigger>
            </div>
          </div>
        ))
      ) : (
        <p>Não temos tarefas</p>
      )}
    </>
  )
}

export default TaskList