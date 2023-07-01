import {io} from "socket.io-client";
import {useEffect, useState} from "react";
// node server.js 실행 우선
const socket = io("http://localhost:3001");

export default function useLiveChat() {
  const savedName = localStorage.getItem("username");
  const [username, setUsername] = useState(() => {
    return savedName || "";
  });
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);

  useEffect(() => {
    socket.on("message", handleMessage);
    return () => {
      socket.off("message", handleMessage);
    };
  }, []);

  const handleUsername = e => {
    setUsername(e.target.value);
  };

  const onEnterUsername = e => {
    if (e.key === "Enter") {
      localStorage.setItem("username", username);
      window.location.reload();
    }
  };

  const handleMessage = message => {
    setChats(prev => [...prev, message]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (savedName === null) {
      alert("우측 상단의 사용자 이름을 입력해주세요.");
    } else if (message.trim() !== "") {
      const currentTime = new Date().toLocaleTimeString();
      socket.emit("message", {
        username,
        content: message,
        time: currentTime,
      });

      setMessage("");
    }
  };

  return {
    username,
    savedName,
    setUsername,
    setMessage,
    message,
    chats,
    handleUsername,
    onEnterUsername,
    handleSubmit,
  };
}
