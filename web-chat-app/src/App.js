/* global Scaledrone */
import Conversation from "./Conversation";
import "./App.css";
import MessageInput from "./MessageInput";
import React, { useState, useEffect } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const [drone, setDrone] = useState(null);

  useEffect(() => {
    setDrone(new Scaledrone("7Sl4zMQ23XoLFQRZ"));
  }, []);

  drone?.on("open", (error) => {
    if (error) {
      return console.error(error);
    }
  });

  const room = drone?.subscribe("my-room");
  room?.on("open", (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Connected to room");
    }
  });
  room?.on("message", (message) => {
    setMessages([...messages, message]);
  });

  const sendMessage = (textMessage) => {
    drone?.publish({
      room: "my-room",
      message: { message: textMessage, score: 42 },
    });
  };

  drone?.on("error", (error) => console.error(error));

  return (
    <div className="app">
      <Conversation
        ownClientId={drone?.clientId}
        allMessages={messages}
      ></Conversation>
      <MessageInput message={sendMessage}></MessageInput>
    </div>
  );
}

export default App;
