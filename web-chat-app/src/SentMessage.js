function SentMessage(props) {
  return (
    <div className="flex-item-sent">
      <div style={{ color: props.sentMessage.data.userData.color }}>
        {props.sentMessage.data.userData.name}
      </div>
      {props.sentMessage.data.message}
    </div>
  );
}
export default SentMessage;
