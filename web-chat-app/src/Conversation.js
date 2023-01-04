import SentMessage from "./SentMessage";
import ReceivedMessage from "./ReceivedMessage";

function Conversation(props) {
  return (
    <div className="flex-container">
      {props.allMessages.map((message) => {
        if (message.clientId === props.ownClientId) {
          return (
            <SentMessage key={message.id} sentMessage={message}></SentMessage>
          );
        }
        return (
          <ReceivedMessage
            key={message.id}
            receivedMessage={message}
          ></ReceivedMessage>
        );
      })}
    </div>
  );
}

export default Conversation;
