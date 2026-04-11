import { useState } from "react";
import API from "../api/api";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
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
      await API.post("/register", form);
      alert("Berhasil daftar!");
    } catch (err) {
      alert("Gagal daftar");
      console.log(err.response?.data);
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <input name="name" placeholder="Nama" onChange={handleChange} />
      <br /><br />

      <input name="email" placeholder="Email" onChange={handleChange} />
      <br /><br />

      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <br /><br />

      <button onClick={submit}>Daftar</button>
    </div>
  );
}