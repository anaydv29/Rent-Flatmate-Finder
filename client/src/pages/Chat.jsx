import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function Chat() {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);

  useEffect(() => {

    socket.on("receiveMessage", (data) => {

      setMessages((prev) => [...prev, data]);

    });

    return () => {

      socket.off("receiveMessage");

    };

  }, []);

  const sendMessage = () => {

    if (!message.trim()) return;

    socket.emit("sendMessage", {
      sender: "You",
      message,
    });

    setMessage("");

  };

  return (
    <div className="container">

      <h1>Chat</h1>

      <div
        style={{
          height: "400px",
          border: "1px solid gray",
          overflowY: "auto",
          padding: "10px",
          marginBottom: "15px",
        }}
      >
        {messages.map((msg, index) => (

          <div
            key={index}
            style={{
              marginBottom: "10px",
            }}
          >
            <b>{msg.sender}</b>

            <p>{msg.message}</p>

          </div>

        ))}
      </div>

      <input
        value={message}
        placeholder="Type message..."
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={sendMessage}>
        Send
      </button>

    </div>
  );
}

export default Chat;