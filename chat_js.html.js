const popup = document.querySelector(".container");
const chat_Btn = document.querySelector(".bay");
const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");
const loadingele = document.querySelector(".wrapper");
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
  return history(userInput);
  /*return responseObj[userInput] == undefined
  ? "Please try something else"
  : responseObj[userInput];*/
}

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

const toggleLoading=(show)=>loadingele.classList.toggle("hide",show);

function history(userInput){
  let y=userInput.toLowerCase();
    return responseObj[y] == undefined
    ? "Please try something else"
    : responseObj[y];
}