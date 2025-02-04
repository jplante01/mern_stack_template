import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import AuthModal from './auth/AuthModal';
import TaskList from './tasks/TaskList';
import Header from './layout/Header';
import { taskService } from '../services/taskService';
import LoadingSpinner from './layout/LoadingSpinner';

export default function TaskManager() {
  const { token, isDemo } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await taskService.getAllTasks(isDemo);
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token || isDemo) {
      fetchTasks();
    }
  }, [token, isDemo]);

  if (!token && !isDemo) {
    return <AuthModal />;
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header onTaskCreate={fetchTasks} isDemo={isDemo} />
      <main className="container mx-auto px-4 py-8">
        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="text-red-600 text-center py-8">Error: {error}</div>
        ) : (
          <TaskList tasks={tasks} onTaskUpdate={fetchTasks} isDemo={isDemo} />
        )}
      </main>
    </div>
  );
}
