function ReceivedMessage(props) {
  return (
    <div className="flex-item-received">
      <div style={{ color: props.receivedMessage.data.userData.color }}>
        {props.receivedMessage.data.userData.name}
      </div>
      {props.receivedMessage.data.message}
    </div>
  );
}
export default ReceivedMessage;
