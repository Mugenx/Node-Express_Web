var chatForm = document.forms.chatForm;

if (chatForm) {
    var chatUsername = document.querySelector('#chat-username');
    var chatMeessage = document.querySelector('#chat-message');

    chatForm.addEventListener('submit', function (e) {
        e.preventDefault();
        showMessage({
            username: chatUsername.value,
            message: chatMeessage.value,
        });
        chatMeessage.value = '';
        chatMeessage.focus();
    });


    function showMessage(data) {
        var chatDisplay = document.querySelector('.chat-display');
        var newMessage = document.createElement('p');
        newMessage.className = 'bg-success chat-text';
        newMessage.innerHTML = '<strong>' + data.username + '</strong>: ' + data.message;
        chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);
    }
}