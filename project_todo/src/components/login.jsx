import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }


  function onFormSubmit(event) {
    event.preventDefault();


    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);

    // Check if user data exists in localStorage
    if (user) {
      if (user.email === email && user.password === password) {
        alert("Login successful");
        navigate("/todo");
      } else if (user.email === email && user.password !== password) {
        alert("Check password");
      }
    } else {
      alert("Please signup, no user data found try again");
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div
        className="bg-secondary p-5 rounded shadow"
        style={{ minWidth: "350px" }}
      >
        <h1 className="text-light text-center mb-4">
          <i className="fas fa-Login-alt me-2"></i>Login
        </h1>

        
        <form onSubmit={onFormSubmit}>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="form-control"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              placeholder="Enter your password"
              className="form-control"
              value={password}
              onChange={onPasswordChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            <i className="fas fa-sign-in-alt me-2"></i>Login
          </button>
        </form>

        <p className="text-light text-center mt-3">
          Don't have an account?{" "}
          <a href="/" className="text-warning text-decoration-none">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
}