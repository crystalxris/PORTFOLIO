// LOADER

window.addEventListener("load", function () {

    var loader = document.getElementById("loader");

    if(loader){
        loader.style.display = "none";
    }

});

// TYPING EFFECT

var texts = [
    "Python Developer",
    "AI/ML Enthusiast",
    "Web Developer",
    "Student"
];

var count = 0;
var index = 0;

function typeEffect(){

    var typing =
    document.getElementById("typing");

    if(!typing) return;

    var currentText =
    texts[count];

    typing.innerHTML =
    currentText.substring(0, index);

    index++;

    if(index > currentText.length){

        count++;

        index = 0;

        if(count >= texts.length){
            count = 0;
        }

    }

    setTimeout(typeEffect, 150);

}

typeEffect();

// CURSOR GLOW

var cursor =
document.querySelector(".cursor-glow");

document.addEventListener("mousemove", function(e){

    if(cursor){

        cursor.style.left =
        e.clientX + "px";

        cursor.style.top =
        e.clientY + "px";

    }

});

// SCROLL BAR

window.addEventListener("scroll", function(){

    var scrollTop =
    document.documentElement.scrollTop;

    var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    var progress =
    (scrollTop / height) * 100;

    var bar =
    document.getElementById("scroll-progress");

    if(bar){

        bar.style.width =
        progress + "%";

    }

});

// PARTICLES

var particles =
document.getElementById("particles");

if(particles){

    for(var i = 0; i < 40; i++){

        var particle =
        document.createElement("div");

        particle.classList.add("particle");

        particle.style.left =
        Math.random() * 100 + "vw";

        particle.style.animationDuration =
        Math.random() * 3 + 2 + "s";

        particle.style.opacity =
        Math.random();

        particles.appendChild(particle);

    }

}

// SKILL DATA

var skillData = {

    python:[
        "Portfolio Website",
        "AI Chatbot",
        "Automation Scripts"
    ],

    java:[
        "OOP Projects",
        "Bank System"
    ],

    html:[
        "Responsive Websites"
    ],

    css:[
        "Modern UI"
    ],

    flask:[
        "Portfolio Backend"
    ],

    ml:[
        "Prediction Models"
    ],

    c:[
        "C Programs"
    ],

    cpp:[
        "C++ Projects"
    ]

};

// SHOW SKILL

function showSkill(skill){

    var modal =
    document.getElementById("skill-modal");

    var title =
    document.getElementById("skill-title");

    var projects =
    document.getElementById("skill-projects");

    modal.style.display = "flex";

    title.innerHTML =
    skill.toUpperCase();

    var list = "";

    if(skillData[skill]){

        for(var i = 0; i < skillData[skill].length; i++){

            list +=
            "<li>" +
            skillData[skill][i] +
            "</li>";

        }

    }

    projects.innerHTML = list;

}

// CLOSE MODAL

function closeModal(){

    document.getElementById("skill-modal")
    .style.display = "none";

}

// AI CHATBOT

var chatToggle =
document.getElementById("chat-toggle");

var chatbox =
document.getElementById("chatbox");

var closeChat =
document.getElementById("close-chat");

var sendBtn =
document.getElementById("send-btn");

var userInput =
document.getElementById("user-input");

var chatBody =
document.getElementById("chat-body");

// OPEN CHAT

if(chatToggle){

    chatToggle.onclick = function(){

        if(chatbox.style.display === "flex"){

            chatbox.style.display = "none";

        } else {

            chatbox.style.display = "flex";

        }

    };

}

// CLOSE CHAT

if(closeChat){

    closeChat.onclick = function(){

        chatbox.style.display = "none";

    };

}

// CHAT MESSAGES

var sendBtn =
document.getElementById("send-btn");

var userInput =
document.getElementById("user-input");

var chatBody =
document.getElementById("chat-body");

if(sendBtn){

    sendBtn.onclick = sendMessage;

}

if(userInput){

    userInput.addEventListener("keypress", function(e){

        if(e.key === "Enter"){

            sendMessage();

        }

    });

}

function sendMessage(){

    var message =
    userInput.value.trim();

    if(message === "") return;

    // USER MESSAGE

    var userDiv =
    document.createElement("div");

    userDiv.className =
    "user-message";

    userDiv.innerHTML =
    message;

    chatBody.appendChild(userDiv);

    userInput.value = "";

    // BOT REPLY

    setTimeout(function(){

        var botDiv =
        document.createElement("div");

        botDiv.className =
        "bot-message";

        botDiv.innerHTML =
        getBotReply(message);

        chatBody.appendChild(botDiv);

        chatBody.scrollTop =
        chatBody.scrollHeight;

    },800);

}

// BOT RESPONSES

function getBotReply(message){

    message =
    message.toLowerCase();

    if(message.includes("hello") ||
       message.includes("hi")){

        return "Hello 👋 Welcome to Rishabh's AI Portfolio!";

    }

    else if(message.includes("skills")){

        return "Rishabh works with Python, Flask, AI/ML, HTML, CSS and JavaScript.";

    }

    else if(message.includes("projects")){

        return "AI Portfolio, Chatbot, ML Projects and Automation Tools.";

    }

    else if(message.includes("contact")){

        return "Connect through Email, LinkedIn and GitHub.";

    }

    else{

        return "I'm your AI assistant 🚀";

    }

}


// SEND MESSAGE

if(sendBtn){

    sendBtn.onclick = sendMessage;

}

function sendMessage(){

    var message =
    userInput.value;

    if(message.trim() === "") return;

    // USER MESSAGE

    var userDiv =
    document.createElement("div");

    userDiv.className =
    "user-message";

    userDiv.innerHTML =
    message;

    chatBody.appendChild(userDiv);

    userInput.value = "";

    // BOT REPLY

    setTimeout(function(){

        var botDiv =
        document.createElement("div");

        botDiv.className =
        "bot-message";

        botDiv.innerHTML =
        getBotReply(message);

        chatBody.appendChild(botDiv);

        chatBody.scrollTop =
        chatBody.scrollHeight;

    }, 800);

}

// BOT REPLIES

function getBotReply(message){

    message =
    message.toLowerCase();

    if(message.includes("hello") ||
       message.includes("hi")){

        return "Hello 👋 Welcome to Rishabh's AI Portfolio!";

    }

    if(message.includes("skills")){

        return "Python, Flask, AI/ML, HTML, CSS, JavaScript, C and C++.";

    }

    if(message.includes("projects")){

        return "AI portfolio, chatbots, ML projects and automation tools.";

    }

    if(message.includes("contact")){

        return "Connect through Email, LinkedIn or GitHub.";

    }

    return "I'm your AI assistant 🚀";

}
// SCROLL REVEAL

var reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections(){

    for(var i = 0; i < reveals.length; i++){

        var windowHeight =
        window.innerHeight;

        var revealTop =
        reveals[i].getBoundingClientRect().top;

        var revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            reveals[i].classList.add("active");

        }

    }

}

