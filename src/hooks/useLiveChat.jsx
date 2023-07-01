import {io} from "socket.io-client";
import {useEffect, useState} from "react";
// node server.js 실행 우선
const socket = io("http://localhost:3001");

export default function useLiveChat() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);

  useEffect(() => {
    socket.on("message", handleMessage);
    return () => {
      socket.off("message", handleMessage);
    };
  }, []);

  const handleMessage = message => {
    setChats(prev => [...prev, message]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (message.trim() !== "") {
      const currentTime = new Date().toLocaleDateString();
      socket.emit("message", {
        username,
        content: message,
        time: currentTime,
      });

      setMessage("");
    }
  };

  return {username, setUsername, setMessage, message, chats, handleSubmit};
}
