import { useState } from "react";

function MessageInput() {
  const placeholder = "Enter your message and press ENTER";
  const [messageInputValue, setMessageInputValue] = useState("");

  const handleChange = (event) => {
    setMessageInputValue(event.target.value);
  };

  const handleClick = (event) => {
    console.log(messageInputValue);
  };

  const handleKeyDown = (event) => {
    const keyCodeEnter = 13;
    if (event.keyCode === keyCodeEnter) {
      console.log(messageInputValue);
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={messageInputValue}
        placeholder={placeholder}
      />
      <button type="button" onClick={handleClick}>
        Send
      </button>
    </div>
  );
}
export default MessageInput;
