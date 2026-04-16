import { useEffect, useMemo, useState } from 'react';
import { FiMail, FiLock, FiEye, FiEyeOff, FiSun, FiMoon } from 'react-icons/fi';

const initialState = {
  email: '',
  password: '',
};

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function Login({ onExplore, onLoginSuccess }) {
  const [form, setForm] = useState(initialState);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [focused, setFocused] = useState({ email: false, password: false });
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const isSubmitDisabled = useMemo(() => !form.email || !form.password, [form]);

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    setError('');
  };

  const handleFocus = (field) => () => {
    setFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => () => {
    setFocused((prev) => ({ ...prev, [field]: false }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(form.email) || form.password.length < 6) {
      setError('Please enter a valid email and password (6+ chars).');
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    setError('');
    if (typeof onLoginSuccess === 'function') {
      onLoginSuccess();
    }
  };

  return (
    <section className="login-page">
      <div className="background-glow" aria-hidden="true">
        <span className="float-dot dot-1" />
        <span className="float-dot dot-2" />
        <span className="float-dot dot-3" />
        <span className="float-dot dot-4" />
      </div>

      <div className="login-card-wrap">
        <div className="login-card animate-entry">
          <div className="card-topbar">
            <div className="brand-mark">A</div>
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>
          </div>

          <div className="card-header">
            <div className="hero-illustration" aria-hidden="true" />
            <h1>Sign in to Anime World</h1>
            <p> Welcome my friend.</p>
          </div>

          <form onSubmit={handleSubmit} className={`login-form ${shake ? 'shake' : ''}`} noValidate>
            <div className={`input-group ${focused.email || form.email ? 'filled' : ''}`}>
              <FiMail className="input-icon" />
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange('email')}
                onFocus={handleFocus('email')}
                onBlur={handleBlur('email')}
                required
                autoComplete="username"
              />
              <label htmlFor="email">Email address</label>
              <span className="focus-border" />
            </div>

            <div className={`input-group ${focused.password || form.password ? 'filled' : ''}`}>
              <FiLock className="input-icon" />
              <input
                id="password"
                type={passwordVisible ? 'text' : 'password'}
                value={form.password}
                onChange={handleChange('password')}
                onFocus={handleFocus('password')}
                onBlur={handleBlur('password')}
                required
                autoComplete="current-password"
              />
              <label htmlFor="password">Password</label>
              <button
                type="button"
                className="password-toggle"
                onClick={() => setPasswordVisible((prev) => !prev)}
                aria-label={passwordVisible ? 'Hide password' : 'Show password'}
              >
                {passwordVisible ? <FiEyeOff /> : <FiEye />}
              </button>
              <span className="focus-border" />
            </div>

            {error && <p className="form-error">{error}</p>}

            <button type="submit" className="login-button" disabled={isSubmitDisabled}>
              <span>Continue</span>
              <span className="button-glow" />
            </button>

            <div className="login-footer">
              <a href="#" className="link">Forgot Password?</a>
              <a href="#" className="link accent">Sign Up</a>
            </div>

            <div className="explore-cta">
              <button type="button" className="link secondary" onClick={onExplore}>
                Explore AI Futures
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
