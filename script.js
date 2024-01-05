function register() {
    var regUsername = document.getElementById("regUsername").value;
    var regPassword = document.getElementById("regPassword").value;
    var regMessage = document.getElementById("regMessage");

    var users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[regUsername]) {
        regMessage.innerHTML = "Username already exists. Please choose another one.";
        regMessage.style.color = "red";
    } else {
        users[regUsername] = { password: regPassword };
        localStorage.setItem('users', JSON.stringify(users));

        regMessage.innerHTML = "Registration successful!";
        regMessage.style.color = "green";
        setTimeout(function () {
            window.location.href = "login.html";
        }, 1000);
    }
}

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loginMessage = document.getElementById("loginMessage");

    var users = JSON.parse(localStorage.getItem('users')) || {};
    
    if (!users[username] || users[username].password !== password) {
        loginMessage.innerHTML = "Invalid credentials. Please try again.";
        loginMessage.style.color = "red";
    } else {
        loginMessage.innerHTML = "Login successful!";
        loginMessage.style.color = "green";
        setTimeout(function () {
            window.location.href = "secured.html";
        }, 1000);
    }
}

function confirmDelete() {
    const deleteMessage = document.getElementById('delete-message');
    deleteMessage.textContent = 'Account deleted! Redirecting to the index page...';
    setTimeout(function() {
        location.href = 'index.html';
    }, 3000); 
}
