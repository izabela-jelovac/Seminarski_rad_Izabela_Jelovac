/* global Scaledrone */
import Conversation from "./Conversation";
import "./App.css";
import MessageInput from "./MessageInput";

function App() {
  const drone = new Scaledrone("7Sl4zMQ23XoLFQRZ");

  drone.on("open", (error) => {
    if (error) {
      return console.error(error);
    }
    drone.publish({
      room: "my-room",
      message: { message: "Hello world!", score: 42 },
    });
  });

  const room = drone.subscribe("my-room");
  room.on("open", (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Connected to room");
    }
  });
  room.on("message", (message) => console.log("Received message:", message));

  drone.on("error", (error) => console.error(error));
  return (
    <div className="app">
      <Conversation></Conversation>
      <MessageInput></MessageInput>
    </div>
  );
}

export default App;
