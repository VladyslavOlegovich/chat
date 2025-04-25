import { useRef } from "react";

function MessageInput({ onSendMessage }) {
  const inputRef = useRef("");

  const handleSend = () => {
    const text = inputRef.current.value.trim();
    if (!text) return;
    onSendMessage(text);
    inputRef.current.value = "";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex gap-2">
      <input
        ref={inputRef}
        type="text"
        className="flex-1 p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type your message..."
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleSend}
        className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900"
      >
        Send
      </button>
    </div>
  );
}

export default MessageInput;
