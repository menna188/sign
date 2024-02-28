function loginValidate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");
    var text = "";

    if (username.length < 4) {
        text = "Please Enter a Valid Username";
        error.innerHTML = text;
        return false;
    } else if (password.length < 6) {
        text = "Please Enter a Valid Password";
        error.innerHTML = text;
        return false;
    } else {
        alert("Login Successful!");
        return true;
    }
}