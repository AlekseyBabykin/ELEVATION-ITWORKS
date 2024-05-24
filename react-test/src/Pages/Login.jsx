import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userData, setUserData] = useState();

  const handleSumbitData = () => {
    if (!email || !password) {
      return <div> don't exit email or password</div>;
    }
    setUserData({ email, password });
  };

  return (
    <form>
      <label>
        Email:
        <input type="text" name="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input
          type="text"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button onClick={handleSumbitData}>sumbit</button>
    </form>
  );
}

export default Login;
