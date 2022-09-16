import { ITask } from '../interfaces/Task'
import styles from './TaskList.module.css';

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
              <button className='btn btn-info' onClick={() => handleEdit(task)}>Edit</button>
              <button className='btn btn-danger' onClick={() => handleDelete(task.id)}>Excluir</button>
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