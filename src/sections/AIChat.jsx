import { useState } from "react";

const AIChat = () => {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hi! I'm EUGE AI Assistant 🤖 Ask me about EUGE's portfolio." }
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };

    // simple AI logic (rules-based)
    let reply = "Sorry, I don't understand that yet.";

    if (input.toLowerCase().includes("project")) {
      reply = "EUGE has projects like FlavorFix, Miss O Kitchenette, and EUGE AI Assistant.";
    } else if (input.toLowerCase().includes("skills")) {
      reply = "Skills: React, JavaScript, HTML, CSS, Node.js, Tailwind.";
    } else if (input.toLowerCase().includes("about")) {
      reply = "EUGE is a Full Stack Developer passionate about modern web apps.";
    } else if (input.toLowerCase().includes("contact")) {
      reply = "You can contact EUGE via email: euge.dev@gmail.com";
    }

    const aiMsg = { sender: "ai", text: reply };

    setMessages([...messages, userMsg, aiMsg]);
    setInput("");
  };

  return (
    <section id="ai" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">
          EUGE AI Assistant
        </h2>

        {/* CHAT BOX */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-[400px] overflow-y-auto space-y-3">

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-4 py-2 rounded-xl max-w-xs ${
                  msg.sender === "user"
                    ? "bg-cyan-500 text-black"
                    : "bg-white/10 text-gray-300"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

        </div>

        {/* INPUT */}
        <div className="mt-4 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something about EUGE..."
            className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none"
          />

          <button
            onClick={sendMessage}
            className="bg-cyan-500 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400"
          >
            Send
          </button>
        </div>

      </div>
    </section>
  );
};

export default AIChat;