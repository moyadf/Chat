  /**
   * App global config
   */

  'use strict';

  // DOM selector helper
  var $ = function(id) {
      return document.getElementById(id);
  };

  //DOM SELECTOR HELPER value
  var getValue = function(id) {
    return document.getElementById(id).value;
  }

  // General config
  var SESSION_KEY = 'BANCHATSESSION';

  var SERVER_URL = 'https://ban-chat.herokuapp.com/',
      uiConfig = {
          messageInput: $('message-input'),
          emailField: $('login-input'),
          chatContainer: $('chat-container'),
          sendButton: $('send-button'),
          loginContainer: $('login-view'),
          chatSection: $('chat-section'),
          loginButton: $('login-button')
      };

  /**
   * Socket IO configuration
   */
  var socket = io(SERVER_URL);
  socket.on('connect', function() {
      console.log('conectado al servidor.');
  });
