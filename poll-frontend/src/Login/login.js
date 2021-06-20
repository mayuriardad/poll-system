import { useState } from "react";
import { login } from "../api";
import "../App.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    const data = await login({
      username,
      password,
    });
    console.log("data", data);
  };

  return (
    <div className="App">
      <div className="form-card">
        <header className="App-header">
          <h1>Login</h1>
        </header>
        <section>
          <form>
            <div>
              <input
                className="input-field"
                name="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              ></input>
            </div>
            <div>
              <input
                className="input-field"
                name="Password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              ></input>
            </div>
            <button className="button" type="button" onClick={loginUser}>
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Login;
