import useLiveChat from "../hooks/useLiveChat";

export default function LiveChat() {
  const {username, setUsername, setMessage, message, chats, handleSubmit} =
    useLiveChat();

  return (
    <section>
      <h1>실시간 채팅</h1>
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
        />
        <button type="submit">Enter</button>
      </form>
    </section>
  );
}
