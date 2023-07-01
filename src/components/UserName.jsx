import useLiveChat from "../hooks/useLiveChat";
import "../styles/LiveChat.scss";

export default function UserName() {
  const {savedName, username, onEnterUsername, handleUsername} = useLiveChat();
  return (
    <>
      {!savedName ? (
        <input
          className="username-input"
          onChange={handleUsername}
          onKeyPress={onEnterUsername}
          name="username"
          value={username}
          placeholder="사용자 이름을 입력해주세요."
        />
      ) : (
        <p className="username">{savedName}</p>
      )}
    </>
  );
}
