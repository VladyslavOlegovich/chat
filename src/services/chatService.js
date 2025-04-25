import useStore from "../store";

export const handleSendMessage = (text) => {
  const { addMessage } = useStore.getState();

  addMessage({ id: Date.now(), text, sender: "user" });

  setTimeout(() => {
    addMessage({
      id: Date.now(),
      text: `Bot response to: ${text}`,
      sender: "bot",
    });
  }, 1000);
};
