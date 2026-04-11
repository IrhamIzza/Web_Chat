import { useState } from "react";
import API from "../api/api";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submit = async () => {
    try {
      const res = await API.post("/login", form);

      // simpan token
      localStorage.setItem("token", res.data.token);

      alert("Login berhasil!");
    } catch (err) {
      alert("Login gagal");
      console.log(err.response?.data);
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input name="email" placeholder="Email" onChange={handleChange} />
      <br /><br />

      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <br /><br />

      <button onClick={submit}>Login</button>
    </div>
  );
}