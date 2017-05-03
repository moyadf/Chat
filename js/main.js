(function(){
  'use strict';

  function Message(){
    this.body = null;
    this.author = null;
    this.createdAt = new Date();
  }
  function Session(){
    this.userName = null;
  }

  var $ = function (id) {
    return document.getElementById(id);
  };

  var uiConfig = {
    messageInput : $('message-input'),
    emailField: $('login-input'),
    chatContainer: $('chat-container'),
    sendButton : $('send-button')
  };

  function setupListeners(){
    uiConfig.sendButton.addEventListener('click', function(){
      sendMessage();
      return false;
    }, false);
  }

  function login (){
      var newSession = new Session();
      newSession.userName = uiConfig.emailField.value;
  }

  function sendMessage () {
       var currentMessage = new Message();
       currentMessage.author = 'luis';
       currentMessage.body = uiConfig.messageInput.value;

       uiConfig.chatContainer.innerHTML += createMessage(currentMessage);

  }

  function printMessage () {

  }

  function createMessage(message){
    var html = '<li style="list-style:none" id="message-template">';
    html += '<p>Autor:<span id="author-message">'+ message.author +'</span></p>';
    html += '<p>Mensaje:<span id="message-content">'+ message.body +'</span></p>';
    html += '<p>Fecha:<span id="date-message">'+ message.createdAt.toJSON() +'</span></p></li>';
    return html;
  }

  setupListeners();

})();
