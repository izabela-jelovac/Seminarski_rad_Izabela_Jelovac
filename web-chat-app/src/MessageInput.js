import { useState } from "react";

function MessageInput(props) {
  const placeholder = "Enter your message and press ENTER";
  const [messageInputValue, setMessageInputValue] = useState("");
  const handleChange = (event) => {
    setMessageInputValue(event.target.value);
  };

  const handleClick = (event) => {
    props.message(messageInputValue);
    setMessageInputValue("");
  };

  const handleKeyDown = (event) => {
    const keyCodeEnter = 13;
    if (event.keyCode === keyCodeEnter) {
      props.message(messageInputValue);
      setMessageInputValue("");
    }
  };

  return (
    <div className="input-send">
      <input
        className="input-message rounded-border-shadow"
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={messageInputValue}
        placeholder={placeholder}
      />
      <button
        className="button-send rounded-border-shadow"
        type="button"
        onClick={handleClick}
      >
        Send
      </button>
    </div>
  );
}
export default MessageInput;
