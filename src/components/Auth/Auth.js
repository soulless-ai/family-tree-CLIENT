import React, { useState } from 'react';
import './Auth.css';
import { login, register } from '../../api/Auth.js';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password)
      .then(response => {
        console.log('Logged in successfully:', response.data);
        setLoggedIn(true);
        setUsername('');
        setPassword('');
      })
      .catch(error => {
        console.error('Login failed:', error);
        setUsername('');
        setPassword('');
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      alert('Passwords do not match');
      return;
    }
    register(username, password)
      .then(response => {
        console.log('Registered successfully:', response.data);
        setLoggedIn(true);
        setUsername('');
        setPassword('');
        setRepeatPassword('');
      })
      .catch(error => {
        console.error('Registration failed:', error);
        setUsername('');
        setPassword('');
        setRepeatPassword('');
      });
  };

  const handleToggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };
  if (loggedIn) {
    return (
      <div className="auth-container">
        <h2>Welcome, {username}!</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else if (isRegistering) {
    return (
      <div className="auth-container">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Repeat Password:
            <input
              type="password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Register</button>
          <button type="button" onClick={handleToggleForm}>Switch to Login</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Login</button>
          <button type="button" onClick={handleToggleForm}>Switch to Register</button>
        </form>
      </div>
    );
  }
};

export default Auth;