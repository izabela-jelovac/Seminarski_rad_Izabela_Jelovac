import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";

function Conversation() {
  return (
    <div>
      <SentMessage></SentMessage>
      <ReceivedMessage></ReceivedMessage>
      <ReceivedMessage></ReceivedMessage>
      <ReceivedMessage></ReceivedMessage>
      <SentMessage></SentMessage>
    </div>
  );
}

export default Conversation;
