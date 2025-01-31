import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import DemoModeButton from './DemoModeButton';

export default function AuthModal() {
  const [mode, setMode] = useState('login'); // 'login' or 'register'

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <button
            className={`mx-2 px-4 py-2 ${
              mode === 'login' ? 'text-blue-600 border-b-2 border-blue-600' : ''
            }`}
            onClick={() => setMode('login')}
          >
            Login
          </button>
          <button
            className={`mx-2 px-4 py-2 ${
              mode === 'register' ? 'text-blue-600 border-b-2 border-blue-600' : ''
            }`}
            onClick={() => setMode('register')}
          >
            Register
          </button>
        </div>

        {mode === 'login' ? <LoginForm /> : <RegisterForm />}

        <div className="mt-6 pt-6 border-t">
          <DemoModeButton />
        </div>
      </div>
    </div>
  );
} 