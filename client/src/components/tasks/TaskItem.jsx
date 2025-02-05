import { useState } from 'react';
import { toast } from 'react-toastify';
import { taskService } from '../../services/taskService';

export default function TaskItem({ task, onUpdate, isDemo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleUpdate = async () => {
    try {
      await taskService.updateTask(task.id, { title }, isDemo);
      setIsEditing(false);
      onUpdate();
      toast.success('Task updated successfully');
    } catch (error) {
      toast.error('Failed to update task');
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;
    
    try {
      setIsDeleting(true);
      await taskService.deleteTask(task.id, isDemo);
      onUpdate();
      toast.success('Task deleted successfully');
    } catch (error) {
      toast.error('Failed to delete task');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="p-4">
      {isEditing ? (
        <div className="flex gap-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input flex-1"
          />
          <button
            onClick={handleUpdate}
            className="btn-primary"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="btn-secondary"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="flex justify-between items-end border-b border-gray-400 pb-2">
          <span className="text-gray-800 text-lg">{task.title}</span>
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="btn-secondary"
              disabled={isDeleting}
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="btn-secondary text-red-600"
              disabled={isDeleting}
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 