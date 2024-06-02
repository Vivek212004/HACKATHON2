document.addEventListener("DOMContentLoaded", () => {
	const chatboxBody = document.getElementById("chatbox-body");
	const userInput = document.getElementById("user-input");
	const sendBtn = document.getElementById("send-btn");

	sendBtn.addEventListener("click", () => {
		let userText = userInput.value.trim();
		if (userText) {
			addMessage("user", userText);
			userInput.value = "";
			getBotResponse(userText);
		}
	});

	userInput.addEventListener("keypress", (event) => {
		if (event.key === "Enter") {
			sendBtn.click();
		}
	});

	function addMessage(sender, text) {
		let messageDiv = document.createElement("div");
		messageDiv.classList.add(sender === "bot" ? "bot-message" : "user-message");
		messageDiv.textContent = text;
		chatboxBody.appendChild(messageDiv);
		chatboxBody.scrollTop = chatboxBody.scrollHeight;
	}

	function getBotResponse(userText) {
		let botResponse = "I'm not sure how to respond to that.";
		if (userText.toLowerCase().includes("help")) {
			botResponse = "Sure, I'm here to help. What do you need assistance with?";
		} else if (userText.toLowerCase().includes("hello")) {
			botResponse = "Hello! How can I assist you today?";
        } else if (userText.toLowerCase().includes("upload")) {
			botResponse = "Move to the Dashboard and click on the upload button!";
		}
		setTimeout(() => {
			addMessage("bot", botResponse);
		}, 1000);
	}
});
