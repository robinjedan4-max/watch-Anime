import { useState } from 'react';
import Login from './Login';
import AIFutures from './AIFutures';
import AnimeLibrary from './AnimeLibrary';

function App() {
  const [view, setView] = useState('login');

  return (
    <div className="app-shell">
      {view === 'login' && (
        <Login
          onExplore={() => setView('ai-futures')}
          onLoginSuccess={() => setView('anime')}
        />
      )}
      {view === 'ai-futures' && <AIFutures onBack={() => setView('login')} />}
      {view === 'anime' && <AnimeLibrary onBack={() => setView('login')} />}
    </div>
  );
}

export default App;
