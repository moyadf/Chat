  /**
   * App global config
   */

  'use strict';

  var $ = function(id) {
      return document.getElementById(id);
  };

  var uiConfig = {
      messageInput: $('message-input'),
      emailField: $('login-input'),
      chatContainer: $('chat-container'),
      sendButton: $('send-button')
  };