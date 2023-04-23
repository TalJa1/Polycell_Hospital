import React, { useState } from "react";
import "../styles/Loginpage.css";

const Loginpage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {};

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            name="email"
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            onChange={handlePassChange}
            type="password"
            id="password"
            value={password}
            name="password"
            required
          />

          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
