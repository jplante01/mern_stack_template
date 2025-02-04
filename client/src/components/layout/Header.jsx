import { useAuth } from '../../context/AuthContext';
import TaskForm from '../tasks/TaskForm';

export default function Header({ onTaskCreate, isDemo }) {
  const { logout, isDemo: authDemo } = useAuth();

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold text-gray-800">Task Manager</h1>
          <div className="flex items-center gap-4">
            {authDemo && (
              <span className="text-sm text-gray-600">Demo Mode</span>
            )}
            <button onClick={logout} className="btn-secondary">
              Logout
            </button>
          </div>
        </div>
        <TaskForm onSuccess={onTaskCreate} isDemo={isDemo} />
      </div>
    </header>
  );
}
