import { useState, useEffect } from 'react';

const ListaTarefas = () => {

    // Get tasks from localStorage
    let cache = localStorage.getItem("tasks");

    // States declaration
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState(!cache ? ('') : (JSON.parse(cache)));
    const [index, setIndex] = useState(-1);

    // Update localStorage useEffect
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    // Add new task
    const handleSubmit = (e) => {
        e.preventDefault();

        if (index !== -1) {
            let newTasks = [...tasks];
            newTasks[index] = task;
            setTasks([...newTasks]);
            setIndex(-1);
            setTask('');
        } else {
            setTasks([...tasks, task]);
            setTask('');
        }
    }

    // Set state to edit a task
    const handleEdit = (index) => {
        setTask(tasks[index]);
        setIndex(index);
    }

    // Delete a task
    const handleDelete = (index) => {
        let newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks([...newTasks]);
    }

    return (
        <div>
            <h2>{task ? (task) : ('Nova tarefa')}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite a tarefa" onChange={(e) => setTask(e.target.value)} value={task || ''}/>
                <input type="submit" value="Adicionar" />
            </form>    
            {tasks.length === 0 && <p>Nenhuma tarefa cadastrada</p>}
            {tasks && 
                <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task} - <button onClick={() => handleEdit(index)}>Editar</button> / <button onClick={() => handleDelete(index)}>Excluir</button></li>
                ))}
                </ul>
            }    
        </div>
    )
}

export default ListaTarefas;