import React from 'react';

const App = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-black text-white font-sans">
      {/* Logo */}
      <img
        src="https://i.ibb.co/sd9gYjZ/logo.png"
        alt="Jephter Projects Logo"
        className="w-32 h-32 mb-6 rounded-full shadow-xl"
      />

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Jephter Projects
      </h1>
      <p className="text-lg text-gray-300 mb-10 text-center max-w-xl">
        Explore my creations. Each one is built with purpose, passion, and precision.
      </p>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        {/* AI Essay Generator Card */}
        <a
          href="https://ai-fq7z.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 hover:border-white/20 transition shadow-xl"
        >
          <img
            src="https://i.ibb.co/BVWMWyN/essay-logo.png"
            alt="AI Essay Generator"
            className="w-full h-40 object-contain mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">AI Essay Generator</h2>
          <p className="text-gray-300 text-sm">
            Instantly generate essays using AI. Provide a topic and get well-written content in seconds.
          </p>
        </a>
      </section>

      {/* Contact Section */}
      <footer className="mt-16 text-center">
        <p className="text-lg mb-3">Want to stay connected?</p>
        <a
          href="https://whatsapp.com/channel/0029VbAxkJl0lwgqAOojKI3R"
          target="_blank"
          className="inline-block bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-white font-semibold transition"
        >
          Join My WhatsApp Channel
        </a>
      </footer>
    </main>
  );
};

export default App;
