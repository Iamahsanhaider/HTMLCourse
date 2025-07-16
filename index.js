function toggleChat() {
    const chat = document.getElementById('chatBox');
    chat.style.display = chat.style.display === 'flex' ? 'none' : 'flex';
  }

  function sendMessage() {
    const input = document.getElementById('userInput');
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, 'user');

    const reply = getBotReply(text);
    setTimeout(() => {
      addMessage(reply, 'bot');
    }, 500); // simulate delay

    input.value = '';
  }

  function addMessage(message, sender) {
    const chatBody = document.getElementById('chatBody');
    const msg = document.createElement('div');
    msg.classList.add('chat-message');
    msg.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    msg.textContent = message;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function getBotReply(question) {
    const answers = {
      "what is ui ux design": "UI/UX design is the process of creating easy-to-use, attractive interfaces for users.",
      "how much do you charge": "Pricing depends on the project. Contact me with details for an estimate.",
      "do you work with figma": "Yes, I specialize in designing with Figma for modern UI/UX needs.",
      "hy": "Hello! How can I help you today?",
      "what is your name": "My name is Ahsan, your virtual assistant.",
      "how are you": "I'm just a program, but thanks for asking! How can I assist you today?",
      "what is your purpose": "My purpose is to assist you with information and answer your questions.",
      "what services do you offer": "I offer UI/UX design services, including website and app design, user research, and prototyping.",
      "can you help me with my project": "Absolutely! Please provide details about your project, and I'll do my best to assist you.",
      "what is your experience": "I have extensive experience in UI/UX design, working with various clients to create user-friendly and visually appealing designs.",
    };

    const lower = question.toLowerCase();
    return answers[lower] || "Sorry, I don't have an answer for that yet.";
  }