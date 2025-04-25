Collective Forecast Chat

How to Run the Project?

Clone the repository, run npm install to install dependencies, then npm run dev to start the project locally. Open http://localhost:5173 in your browser.

How is Autoscroll Implemented?

A messagesEndRef was created using useRef for an empty div at the end of the message list. Within useEffect, scrollIntoView({ behavior: 'smooth' }) is called whenever the messages array changes, ensuring smooth autoscrolling to the latest message.

Why Did You Choose Zustand or Redux?

Zustand was chosen over Redux because it is lighter and faster to set up, involves minimal boilerplate, is well-suited for a small project like this chat, and offers simple state management. This test task was a great example to get acquainted with such a technology for the first time.
