(function() {
    'use strict';

    // General config
    var SESSION_KEY = 'BANCHATSESSION';

    // Server responses 
    socket.on('chatResponse', function(data) {
        uiConfig.chatContainer.innerHTML += createMessage(data);
    });

    /**
     * Method to handle the UI references in code.
     */
    function setupListeners() {
        uiConfig.sendButton.addEventListener('click', function() {
            sendMessage();
            return false;
        }, false);
        uiConfig.loginButton.addEventListener('click', function() {
            login();
            return false;
        }, false);
    }

    /**
     * Method to create a new session instance and save current session.
     */
    function login() {
        var newSession = new Session();
        newSession.userName = uiConfig.emailField.value;
        window.localStorage.setItem(SESSION_KEY, JSON.stringify(newSession));

        validateSession();
    }

    /**
     * Method to get current session from local storage
     * @return {*} : Session Model (model.js)
     */
    function getSession() {
        return JSON.parse(window.localStorage.getItem(SESSION_KEY));
    }

    /**
     * Method to notifiy server when user logout and remove session from local storage.
     */
    function logout() {
        socket.emit('logout', getSession());
        window.localStorage.removeItem(SESSION_KEY);
    }

    /**
     * Method to create a new message instance and send it to server.
     */
    function sendMessage() {
        var currentMessage = new Message();
        currentMessage.author = 'luis';
        currentMessage.body = uiConfig.messageInput.value;
        socket.emit('chat', currentMessage);
    }

    /**
     * Method to validate current session and show to user login or chat view.
     */
    function validateSession() {
        if (!getSession()) {
            uiConfig.loginContainer.style.display == 'block';
            uiConfig.chatSection.style.display == 'none';
        }
    }

    /**
     * Method to create a new message html structure.
     * @param {*} message : Message model (model.js)
     */
    function createMessage(message) {
        var html = '<li style="list-style:none" id="message-template">';
        html += '<p>Autor:<span id="author-message">' + message.author + '</span></p>';
        html += '<p>Mensaje:<span id="message-content">' + message.body + '</span></p>';
        html += '<p>Fecha:<span id="date-message">' + message.createdAt + '</span></p></li>';
        return html;
    }

    setupListeners();
    validateSession();

})();