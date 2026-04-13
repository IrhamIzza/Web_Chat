import { useEffect, useState } from "react";
import API from "../api/api";

export default function Admin() {
  const [messages, setMessages] = useState([]);

  const getAll = async () => {
    const res = await API.get("/admin/messages");
    setMessages(res.data);
  };

  const answer = async (id, answerText) => {
    await API.post(`/admin/answer/${id}`, {
      answer: answerText
    });

    getAll(); // refresh
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      <h2>Admin Panel</h2>

      {messages.map((msg) => (
        <div key={msg.id}>
          <p><b>User:</b> {msg.user?.email}</p>
          <p><b>Pertanyaan:</b> {msg.question}</p>

          <input
            placeholder="Tulis jawaban..."
            onBlur={(e) => answer(msg.id, e.target.value)}
          />

          <hr />
        </div>
      ))}
    </div>
  );
}