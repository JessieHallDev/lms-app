import React from "react";
import Button from "../../Components/Button";
import '../../index.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [role, setRole] = useState("student");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  
    const handleSignIn = async (e) => {
      e.preventDefault();
      setLoading(true);
  
      const userData = {
        role: role.charAt(0).toUpperCase() + role.slice(1), // e.g. "Teacher"
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      };
  
      console.log("Sending user data:", userData);
  
      try {
        const rawResponse = await fetch("http://127.0.0.1:8000/register/", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
  
        const content = await rawResponse.json();
  
        if (rawResponse.ok) {
          console.log("✅ Registration successful:", content);
          localStorage.setItem("role", role);
          alert(`${role.toUpperCase()} registered successfully!`);
  
          // Redirect based on role
          navigate(`/${role}`);
        } else {
          console.error("❌ Registration failed:", content);
          alert(`Registration failed: ${JSON.stringify(content)}`);
        }
      } catch (err) {
        console.error("❌ Error during fetch:", err);
        alert("Server error, please try again later.");
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div className="sign-up">
        <h2>Welcome!</h2>
        <h3>Sign up as...</h3>
  
        {/* Role Selection */}
        <div className="select">
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
        </div>
  
        <form onSubmit={handleSignIn}>
          <div className="name-input">
            <div>
              <label>First Name *</label>
              <br />
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Last Name *</label>
              <br />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
  
          <div>
            <label>Email *</label>
            <br />
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
  
          <div className="password">
            <label>Password *</label>
            <br />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
  
          <div>
            <Button type="submit" label={loading ? "Registering..." : "Sign Up"} />
          </div>
        </form>
      </div>
    );
  };
  
  export default SignUp;