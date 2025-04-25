import MessageItem from "./MessageItem";

function MessageList({ messages }) {
  return (
    <>
      {messages.map((msg) => (
        <MessageItem key={msg.id} message={msg} />
      ))}
    </>
  );
}

export default MessageList;
