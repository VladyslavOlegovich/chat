import ChatWindow from "./components/ChatWindow";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto p-4 bg-gray-100 rounded-2xl">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Collective Forecast Chat
      </h1>
      <ChatWindow />
    </div>
  );
}
export default App;
