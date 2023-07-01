import {useState} from "react";
import useLiveChat from "../hooks/useLiveChat";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faPaperPlane,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/LiveChat.scss";

export default function LiveChat() {
  const [isActive, setIsActive] = useState(false);
  const {username, setUsername, setMessage, message, chats, handleSubmit} =
    useLiveChat();

  const handleToggle = () => {
    setIsActive(prev => !prev);
  };

  return (
    <>
      {!isActive ? (
        <div onClick={handleToggle} className="live_chat_open">
          <FontAwesomeIcon icon={faMessage} className="live_chat_icon" />
        </div>
      ) : (
        <section className="live-chat-modal">
          <header>
            <h4>실시간 채팅</h4>
            <div className="close" onClick={handleToggle}>
              <FontAwesomeIcon icon={faXmark} className="close-icon" />
            </div>
          </header>
          <section className="live-chat-body">
            <input
              onChange={e => {
                setUsername(e.target.value);
              }}
              name="username"
              value={username}
              placeholder="사용자 이름을 입력해주세요."
            />
            <ul>
              {chats.map((chat, i) => {
                return (
                  <li key={i}>
                    <label>{chat.username}</label>: {chat.content} - {chat.time}
                  </li>
                );
              })}
            </ul>
            <form onSubmit={handleSubmit}>
              <input
                onChange={e => {
                  setMessage(e.target.value);
                }}
                name="message"
                value={message}
                placeholder="무엇이든 물어보세요."
              />
              <button type="submit">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </section>
        </section>
      )}
    </>
  );
}
