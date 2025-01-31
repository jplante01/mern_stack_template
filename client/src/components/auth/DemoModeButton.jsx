import { useAuth } from '../../context/AuthContext';

export default function DemoModeButton() {
  const { enableDemoMode } = useAuth();

  return (
    <button
      onClick={enableDemoMode}
      className="btn-secondary w-full"
    >
      Try Demo Mode
    </button>
  );
} 