function MessageItem({ message }) {
  return (
    <div
      className={`mb-2 p-2 rounded-lg break-words ${
        message.sender === "user"
          ? "bg-blue-500 text-white ml-auto max-w-xs"
          : "bg-gray-200 text-black mr-auto max-w-xs"
      }`}
    >
      {message.text}
    </div>
  );
}

export default MessageItem;
