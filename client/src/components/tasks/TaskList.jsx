import PropTypes from 'prop-types';
import TaskItem from './TaskItem';

export default function TaskList({ tasks = [], onTaskUpdate, isDemo }) {
  if (!tasks.length) {
    return (
      <div className="text-center py-8 text-gray-500">
        No tasks yet. Create one above!
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onUpdate={onTaskUpdate} />
      ))}
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      createdAt: PropTypes.string,
    })
  ),
  onTaskUpdate: PropTypes.func.isRequired,
  isDemo: PropTypes.bool.isRequired,
};
