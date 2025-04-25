import { useEffect, useRef } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { handleSendMessage } from "../services/chatService";
import useStore from "../store";

function ChatWindow() {
  const { messages } = useStore();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div className="flex-1 overflow-y-auto mb-4 p-4 bg-white rounded-2xl shadow">
        <MessageList messages={messages} />
        <div ref={messagesEndRef} />
      </div>
      <MessageInput onSendMessage={handleSendMessage} />
    </>
  );
}

export default ChatWindow;
