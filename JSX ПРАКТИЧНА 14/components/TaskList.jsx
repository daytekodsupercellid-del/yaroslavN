import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleCompleted, onDeleteTask }) => {
  if (tasks.length === 0) {
    return <p>Поки що немає задач. Додайте першу задачу.</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleCompleted={onToggleCompleted}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
