const chatbotResponses = [
  "Hi! How can I help you?",
  "Hello there!",
  "Good Morning!",
  "Good Evening!",
  "What can I assist you with today?",
  "You're welcome!"
];

const chatContainer = document.getElementById("chatContainer");
const sendMsgBtn = document.getElementById("sendMsgBtn");
const userInput = document.getElementById("userInput");
let responseIndex = 0;

sendMsgBtn.addEventListener("click", () => {
  const message = userInput.value.trim();
  if (message === "") return;

  const userMsgEl = document.createElement("div");
  userMsgEl.className = "msg-to-chatbot-container text-right";
  userMsgEl.innerHTML = `<span class='msg-to-chatbot'>${message}</span>`;
  chatContainer.appendChild(userMsgEl);

  const botMsgEl = document.createElement("div");
  botMsgEl.className = "msg-from-chatbot-container";
  botMsgEl.innerHTML = `<span class='msg-from-chatbot'>${chatbotResponses[responseIndex]}</span>`;
  chatContainer.appendChild(botMsgEl);

  userInput.value = "";
  chatContainer.scrollTop = chatContainer.scrollHeight;
  responseIndex = (responseIndex + 1) % chatbotResponses.length;
});
