import React, { useState } from 'react';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignIn = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': ''
        },
        body: JSON.stringify({ email: email, password: password })
      });

      if (response.ok) {
        // Replace with your desired behavior, e.g., redirecting or showing success message
        setMessage('Signed in successfully');
        window.location.href = '/home'; // Redirect to home page
      } else {
        const errorData = await response.json();
        setMessage(errorData.error || 'Sign in failed');
      }
    } catch (error) {
      setMessage('An error occurred while signing in');
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      {message && <p style={{ color: 'red' }}>{message}</p>}
      <form onSubmit={handleSignIn}>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="actions">
          <button type="submit">Get Connected!</button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;