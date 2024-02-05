const popup = document.querySelector(".container");
const chat_Btn = document.querySelector(".bay");
const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");
const load = document.querySelector(".wrapper");
const msg = document.querySelector("#co")
var txt;

send.addEventListener("click", () => renderUserMessage());

txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    renderUserMessage();
  }
});

const renderUserMessage = () => {
  const userInput = txtInput.value;
  renderMessageEle(userInput, "user");
  txtInput.value = "";
  toggleLoading(false);
  setTimeout(() => {
    renderChatbotResponse(userInput);
    setScrollPosition();
    toggleLoading(true);
  }, 1200);
};

const renderChatbotResponse = (userInput) => {
  const res = getChatbotResponse(userInput);
  renderMessageEle(res);
};

const renderMessageEle = (txt, type) => {
  let className = "user-message";
  
  if (type !== "user") {
    className = "chatbot-message";
  }  
  const messageEle = document.createElement("div");
  const txtNode = document.createTextNode(txt);
  messageEle.classList.add(className);
  messageEle.append(txtNode);
  chatBody.append(messageEle);
};

const getChatbotResponse = (userInput) => {
  let sentence = userInput.toLowerCase();
  let wordsArray = sentence.split(" ");

  for (let i = 0; i < wordsArray.length; i++) {
    if (responseObj[wordsArray[i]] !== undefined) {
      return responseObj[wordsArray[i]];
    }
  }

  return "Please try something else";
};



const setScrollPosition = () => {
  if (chatBody.scrollHeight > 0) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
};

chat_Btn.addEventListener("click", () =>{
  popup.classList.toggle('show')
  if(txt==1){
    msg.innerHTML="on click <br> to open";
    return txt=0;
  }
  else{
    msg.innerHTML="on click <br> to close"
    return txt=1;
  }
});

const toggleLoading=(show)=>load.classList.toggle("hide",show);

