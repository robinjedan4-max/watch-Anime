import { useState, useEffect } from 'react';
import Login from './Login';
import AIFutures from './AIFutures';
import AnimeLibrary from './AnimeLibrary';
import Profile from './Profile';

function App() {
  const [view, setView] = useState(() => {
    const savedView = localStorage.getItem('currentView');
    return ['anime', 'ai-futures', 'profile'].includes(savedView) ? savedView : 'login';
  });
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });
  const [currentUser, setCurrentUser] = useState(() => {
    return localStorage.getItem('currentUser') || 'Anime Lover';
  });

  // Save view and login state to localStorage
  useEffect(() => {
    localStorage.setItem('currentView', view);
  }, [view]);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem('currentUser', currentUser);
  }, [currentUser]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setView('anime');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setView('login');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentView');
    localStorage.removeItem('currentUser');
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
          currentUser={currentUser}
        />
      )}
      {view === 'profile' && (
        <Profile
          onBack={() => setView('anime')}
          onLogout={handleLogout}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )}
    </div>
  );
}

export default App;

