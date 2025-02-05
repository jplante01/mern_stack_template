import { useAuth } from '../../context/AuthContext';
import TaskForm from '../tasks/TaskForm';

export default function Header({ onTaskCreate, isDemo }) {
  const { logout, isDemo: authDemo } = useAuth();

  return (
    <header className="bg-neutral-50 border-b-2 border-gray-400">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 pb-1">
            TaskManager()
          </h1>
          <div className="flex items-center gap-4">
            <TaskForm onSuccess={onTaskCreate} isDemo={isDemo} />
            {/* {authDemo && (
              <span className="text-sm text-gray-600">Demo Mode</span>
            )} */}
            <button onClick={logout} className="btn-secondary">
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
