import { useState, useEffect } from 'react';
import Login from './Login';
import AIFutures from './AIFutures';
import AnimeLibrary from './AnimeLibrary';
import Profile from './Profile';

function App() {
  const [view, setView] = useState(() => {
    const savedView = localStorage.getItem('currentView');
    return savedView === 'anime' || savedView === 'ai-futures' ? savedView : 'login';
  });
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  // Save view and login state to localStorage
  useEffect(() => {
    localStorage.setItem('currentView', view);
  }, [view]);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setView('anime');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setView('login');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentView');
  };

  return (
    <div className="app-shell">
      {view === 'login' && (
        <Login
          onExplore={() => {
            setIsLoggedIn(true);
            setView('ai-futures');
          }}
          onLoginSuccess={handleLogin}
        />
      )}
      {view === 'ai-futures' && (
        <AIFutures 
          onBack={() => setView('anime')}
          onToAnime={() => setView('anime')}
          onProfile={() => setView('profile')}
          onLogout={handleLogout}
        />
      )}
      {view === 'anime' && (
        <AnimeLibrary 
          onProfile={() => setView('profile')}
          onExplore={() => setView('ai-futures')}
          onLogout={handleLogout}
        />
      )}
      {view === 'profile' && (
        <Profile
          onBack={() => setView('anime')}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}

export default App;
