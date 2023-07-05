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
  const {setMessage, message, chats, handleSubmit} = useLiveChat();

  const handleToggle = () => {
    setIsActive(prev => !prev);
  };

  return (
    <>
      <div onClick={handleToggle} className="live_chat_open">
        <FontAwesomeIcon icon={faMessage} className="live_chat_icon" />
      </div>

      <section className={`live-chat-modal ${isActive ? "on" : "off"}`}>
        <header>
          <h4>실시간 채팅</h4>
          <div
            className={`close ${isActive ? "on" : "off"}`}
            onClick={handleToggle}
          >
            <FontAwesomeIcon icon={faXmark} className="close-icon" />
          </div>
        </header>
        <section className="live-chat-body">
          <ul className="chat-list">
            {chats.map((chat, i) => {
              return (
                <li className="chat" key={i}>
                  <label>{chat.username}</label>
                  <p className="chat-content">{chat.content}</p>
                  <p className="chat-time">{chat.time}</p>
                </li>
              );
            })}
          </ul>
          <form onSubmit={handleSubmit}>
            <input
              required
              maxLength={30}
              onChange={e => {
                setMessage(e.target.value);
              }}
              name="message"
              value={message}
              placeholder="무엇이든 물어보세요."
            />
            <button className="chat-submit-btn" type="submit">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </section>
      </section>
    </>
  );
}
