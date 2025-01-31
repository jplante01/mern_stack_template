import { useAuth } from '../../context/AuthContext';

export default function Header() {
  const { logout, isDemo } = useAuth();

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Task Manager</h1>
          <div className="flex items-center gap-4">
            {isDemo && (
              <span className="text-sm text-gray-600">Demo Mode</span>
            )}
            <button
              onClick={logout}
              className="btn-secondary"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 