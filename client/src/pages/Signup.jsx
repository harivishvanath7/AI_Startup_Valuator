import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signupUser from "../api/authApi";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signupUser(form);

    if (res.token) {
      localStorage.setItem("token", res.token);
      navigate("/dashboard");
    } else {
      alert(res.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <form
        onSubmit={handleSubmit}
        className="bg-card p-10 rounded-xl shadow w-96"
      >
        <h2 className="text-3xl font-heading mb-6 text-dark">Sign Up</h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-3 mb-4 rounded"
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 mb-4 rounded"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 mb-6 rounded"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-primary py-3 rounded-lg font-body"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
