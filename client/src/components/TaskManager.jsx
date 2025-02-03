import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../context/AuthContext';
import AuthModal from './auth/AuthModal';
import TaskList from './tasks/TaskList';
import TaskForm from './tasks/TaskForm';
import Header from './layout/Header';
import { taskService } from '../services/taskService';
import LoadingSpinner from './layout/LoadingSpinner';

export default function TaskManager() {
  const { token, isDemo } = useAuth();

  const {
    data: tasks,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['tasks', isDemo],
    queryFn: () => taskService.getAllTasks(isDemo),
    enabled: !!(token || isDemo),
  });

  if (!token && !isDemo) {
    return <AuthModal />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <TaskForm onSuccess={refetch} isDemo={isDemo} />
        {isLoading ? (
          <LoadingSpinner />
        ) : isError ? (
          <div className="text-red-600 text-center py-8">
            Error: {error.message}
          </div>
        ) : (
          <TaskList tasks={tasks} onTaskUpdate={refetch} isDemo={isDemo} />
        )}
      </main>
    </div>
  );
}
