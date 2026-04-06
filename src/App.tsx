import { useState } from 'react';
import HomePage from './components/HomePage';
import PseudocodeTrack from './components/PseudocodeTrack';
import PythonTrack from './components/PythonTrack';

type View = 'home' | 'pseudocode' | 'python';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [pseudocodeCompleted, setPseudocodeCompleted] = useState<Set<string>>(new Set());
  const [pythonCompleted, setPythonCompleted] = useState<Set<string>>(new Set());

  // 104 total pseudocode sections (12 days + day 17)
  const pseudocodeProgress = Math.round((pseudocodeCompleted.size / 178) * 100);
  const pythonProgress = Math.round((pythonCompleted.size / 133) * 100);

  const goHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'pseudocode') {
    return (
      <PseudocodeTrack
        onGoHome={goHome}
        completedSections={pseudocodeCompleted}
        onUpdateCompleted={setPseudocodeCompleted}
      />
    );
  }

  if (currentView === 'python') {
    return (
      <PythonTrack
        onGoHome={goHome}
        completedSections={pythonCompleted}
        onUpdateCompleted={setPythonCompleted}
      />
    );
  }

  return (
    <HomePage
      onSelectTrack={(track) => setCurrentView(track)}
      pseudocodeProgress={pseudocodeProgress}
      pythonProgress={pythonProgress}
    />
  );
}
