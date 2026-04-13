import { useState, useEffect } from "react";
import API from "../api/api";

export default function Chat() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);

  const token = localStorage.getItem("token");

  const getMessages = async () => {
    try {
      const res = await API.get("/messages", {
        headers: {
          Authorization: "Bearer " + token
        }
      });

      setMessages(res.data);
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  const send = async () => {
    try {
      await API.post(
        "/message",
        { question },
        {
          headers: {
            Authorization: "Bearer " + token
          }
        }
      );

      setQuestion("");
      getMessages(); // refresh data
    } catch (err) {
      alert("Gagal kirim");
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div>
      <h2>Kirim Pertanyaan</h2>

      <textarea
        placeholder="Tulis pertanyaan kamu..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <br /><br />
      <button onClick={send}>Kirim</button>

      <hr />

      <h3>Daftar Pertanyaan</h3>

      {messages.map((msg) => (
        <div key={msg.id} style={{ marginBottom: "10px" }}>
          <b>Pertanyaan:</b>
          <p>{msg.question}</p>

          <b>Jawaban:</b>
          <p>{msg.answer || "Belum dijawab"}</p>

          <hr />
        </div>
      ))}
    </div>
  );
}