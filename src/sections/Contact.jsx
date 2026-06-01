import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs
      .sendForm(
        "ejcpunzalan16@gmail.com",
        "template_2p88s7r",
        form.current,
        "iLlaiLiF5eBmOfY1t"
      )
      .then(() => {
        setSuccess(true);
        form.current.reset();
        setLoading(false);

        setTimeout(() => setSuccess(false), 3000);
      })
      .catch((error) => {
        alert("Failed to send message");
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-8 text-cyan-400">
          Contact Me
        </h2>

       

        {/* SUCCESS MESSAGE */}
        {success && (
          <p className="text-green-400 mb-4">
            Message sent successfully!
          </p>
        )}

        {/* FORM */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Message"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-xl font-semibold transition w-full disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contact;