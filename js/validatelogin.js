function validate(callback) {
    let fixedusername = /admin/;
    let fixedpassword = /12345/;
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let usernameerror = document.getElementById("usernameerror");
    let passworderror = document.getElementById("passworderror");

    let a;
    let b;
    if (username.value.trim() == "") {
        usernameerror.innerHTML = "Username cannot be empty";
        usernameerror.style.color = "red";
        a = 0;
    } if (password.value.trim() == "") {
        passworderror.innerHTML = "Password cannot be empty";
        passworderror.style.color = "red";
        b = 0;
    }
    if (username.value.trim() != "") {

        if (username.value.length < 6) {
            if (fixedusername.test(username.value)) {
                a = 1;
                usernameerror.innerHTML = "";
            } else {
                a = 0;
                usernameerror.style.color = "red";
                usernameerror.innerHTML = "Invalid user name";
            }

        }
        else {
            a = 0;
            usernameerror.style.color = "red";
            usernameerror.innerHTML = "Invalid user name";
        }
    }
    if (password.value.trim() != "") {
        console.log(password.value.length);
        if (password.value.length < 6) {
            if (fixedpassword.test(password.value)) {
                b = 1;

                passworderror.innerHTML = "";
            } else {
                passworderror.style.color = "red";
                passworderror.innerHTML = "Invalid password";
                b = 0;
            }


        } else {
            b = 0;
            passworderror.style.color = "red";
            passworderror.innerHTML = "Invalid password";
        }
    }
    if (a == 1 && b == 1) {
        let z = callback();
        if (z == true) {
            return true;
        }
    }
    else {
        return false;
    }
}
function check() {
    return true;
}
