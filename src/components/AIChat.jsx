import { useState } from "react";

const AIChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi! I'm EUGE AI Assistant 🤖",
    },
  ]);

  const [input, setInput] = useState("");

const sendMessage = () => {
  if (!input.trim()) return;

  const userMessage = {
    sender: "user",
    text: input,
  };

  const userInput = input.toLowerCase();

  setMessages((prev) => [...prev, userMessage]);
  setInput("");

  let reply =
    "Sorry, I don't understand that yet. Try asking about skills, projects, experience, or contact.";

  // 🔥 GREETING
  if (
    userInput.includes("hi") ||
    userInput.includes("hello") ||
    userInput.includes("hey")
  ) {
    reply = "Hi! I'm EUGE AI Assistant 🤖 Ask me about EUGE's portfolio!";
  }

  // 🔥 KEYWORDS SYSTEM
  const keywords = [
    {
      keys: ["skill", "skills", "can you do", "what can you do"],
      reply:
        "EUGE's skills include HTML, CSS, JavaScript, React, Node.js, Express, Tailwind CSS, Git, Netlify, and Vercel.",
    },
    {
      keys: ["project", "projects", "work", "built"],
      reply:
        "EUGE built projects like FlavorFix Food Hub and Miss O Kitchenette using React, HTML, CSS, and JavaScript.",
    },
    {
      keys: ["experience", "job", "intern", "work"],
      reply:
        "EUGE worked as IT Staff at Baron Travel Corporation, MIS Intern at Sto. Tomas City Hall, and IT Support Intern at First Asia Institute.",
    },
    {
      keys: [
        "contact",
        "reach",
        "email",
        "message",
        "how to contact",
        "how can i contact",
      ],
      reply:
        "You can contact EUGE at 📧 ejcpunzalan16@gmail.com or 📍 Philippines.",
    },
    {
      keys: ["about", "who are you", "who is euge"],
      reply:
        "EUGE is a Full Stack Developer who builds modern web applications using React, Node.js, and Tailwind CSS.",
    },
  ];

  // 🔥 SEARCH MATCH
  for (let item of keywords) {
    if (item.keys.some((key) => userInput.includes(key))) {
      reply = item.reply;
      break;
    }
  }

  const aiMessage = {
    sender: "ai",
    text: reply,
  };

  setMessages((prev) => [...prev, aiMessage]);
};

  return (
    <>
      {/* FLOAT BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-cyan-500 hover:bg-cyan-400 w-16 h-16 rounded-full text-3xl shadow-lg z-50"
      >
        🤖
      </button>

      {/* CHAT BOX */}
      {open && (
        <div className="fixed bottom-24 right-6 w-[350px] bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50">

          {/* HEADER */}
          <div className="bg-cyan-500 p-4 font-bold text-black">
            EUGE AI Assistant
          </div>

          {/* MESSAGES */}
          <div className="h-[400px] overflow-y-auto p-4 space-y-3">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-xl max-w-[80%] ${
                    msg.sender === "user"
                      ? "bg-cyan-500 text-black"
                      : "bg-white/10 text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

          </div>

          {/* INPUT */}
          <div className="p-4 flex gap-2 border-t border-white/10">

            <input
  type="text"
  value={input}
  onChange={(e) => setInput(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  }}
  placeholder="Ask something..."
              className="flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white outline-none"
            />

            <button
              onClick={sendMessage}
              className="bg-cyan-500 hover:bg-cyan-400 px-4 rounded-xl font-semibold"
            >
              Send
            </button>

          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;