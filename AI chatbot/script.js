function sendMessage(){
    let input = document.getElementById("userInput");
    let message = input.value.trim();
    if(message === "") return;

    let chatBox = document.getElementById("chatBox");

    // User Message
    let userMsg = document.createElement("div");
    userMsg.classList.add("message","user");
    userMsg.innerText = message;
    chatBox.appendChild(userMsg);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Typing Animation
    let typingDiv = document.createElement("div");
    typingDiv.classList.add("message","bot");
    typingDiv.innerHTML = `
        <div class="typing">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;
    chatBox.appendChild(typingDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(()=>{
        typingDiv.remove();

        let botMsg = document.createElement("div");
        botMsg.classList.add("message","bot");
        botMsg.innerText = getBotReply(message);
        chatBox.appendChild(botMsg);
        chatBox.scrollTop = chatBox.scrollHeight;
    },1500);
}

function getBotReply(message){
    message = message.toLowerCase();

    if(message.includes("hello") || message.includes("hi")){
        return "Hello 😊 How are you today?";
    }
    else if(message.includes("ai")){
        return "I am a smart AI chatbot designed beautifully 😎";
    }
    else if(message.includes("project")){
        return "Nice! Your projects are improving day by day 🚀";
    }
    else if(message.includes("help")){
        return "Sure! Ask me anything.";
    }
    else{
        return "Interesting 🤔 Tell me more!";
    }
}

document.getElementById("userInput")
.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        sendMessage();
    }
});