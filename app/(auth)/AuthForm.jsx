'use client';

import { useState } from 'react';

function AuthForm({ handleSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form onSubmit={(e) => handleSubmit(e, email, password)}>
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
      />
      <button className='btn-primary'>Submit</button>
    </form>
  );
}

export default AuthForm;
