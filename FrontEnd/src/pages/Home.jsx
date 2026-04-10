import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import API from "../api/api";
export default function Home() {
  const testAPI = async () => {
    try {
      const res = await API.get("/");
      console.log(res.data);
    } catch (err) {
      console.log("Error:", err.message);
    }
  };

  return (
    <div>
      <h1>Test Koneksi</h1>
      <button onClick={testAPI}>Test API</button>
    </div>
  );

}   