document.getElementById("user-login").addEventListener('click',function () {
    const emailField = document.getElementById("user-email").value;
    console.log(emailField);

    const passwordField = document.getElementById("user-password").value;
    console.log(passwordField);

    if (emailField =='sontan@baap.com' && passwordField == "secret") {
        console.log("valid user");
        window.location.href="banking.html";
    }
})