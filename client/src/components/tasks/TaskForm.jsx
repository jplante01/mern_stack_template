import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { taskService } from '../../services/taskService';

export default function TaskForm({ onSuccess, isDemo }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await taskService.createTask(data, isDemo);
      reset();
      onSuccess();
      toast.success('Task created successfully');
    } catch (error) {
      toast.error('Failed to create task');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow rounded-lg p-4">
      <div className="flex gap-2">
        <input
          type="text"
          {...register('title', {
            required: 'Title is required',
            minLength: {
              value: 3,
              message: 'Title must be at least 3 characters',
            },
          })}
          placeholder="Add a new task..."
          className="input flex-1"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary"
        >
          {isSubmitting ? 'Adding...' : 'Add Task'}
        </button>
      </div>
      {errors.title && (
        <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
      )}
    </form>
  );
} 