import SentMessage from "./SentMessage";

function Conversation(props) {
  return (
    <div>
      <div className="flex-container">
        {props.allMessages.map((message) => {
          return <SentMessage sentMessage={message}></SentMessage>;
        })}
      </div>
    </div>
  );
}

export default Conversation;
