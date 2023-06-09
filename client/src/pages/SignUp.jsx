import React ,{useState}from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const user = {
      username,
      password
    }
    
    try {console.log("first")
      const response = await axios.post('http://localhost:5000/user', user)
     console.log(response)
      
    } catch (error) {
      console.log("Unable to add user")
    }
    setUsername("");
    setPassword("");
  

    setUsername("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Signup</button>
      <div>
        Already have an account
        <Link to="/login" className="btn">Login</Link>
      </div>
    </form>
    
  );
};

export default SignUp;
