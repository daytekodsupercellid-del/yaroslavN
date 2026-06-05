const TaskItem = ({ task, onToggleCompleted, onDeleteTask }) => {
  return (
    <li>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <button onClick={() => onToggleCompleted(task.id)}>
        {task.completed ? 'Повернути' : 'Виконано'}
      </button>
      <button onClick={() => onDeleteTask(task.id)}>Видалити</button>
    </li>
  );
};

export default TaskItem;
