function ReceivedMessage(props) {
  return (
    <div className="flex-item-received">
      {props.receivedMessage.data.message}
    </div>
  );
}
export default ReceivedMessage;
