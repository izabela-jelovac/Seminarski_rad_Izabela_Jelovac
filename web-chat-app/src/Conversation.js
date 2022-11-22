import ReceivedMessage from "./ReceivedMessage";

function Conversation(props) {
  return (
    <div>
      <div className="flex-container">
        {props.allMessages.map((message) => {
          return <ReceivedMessage></ReceivedMessage>;
        })}
      </div>
    </div>
  );
}

export default Conversation;
