function create(){
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const cpassword = document.getElementById("cpassword").value;
    let created = false

    if(password.length < 5){
        document.getElementById("msg").innerHTML="Password must contain 5 or more characters"
    }
    else if(password != cpassword){
        document.getElementById("msg").innerHTML="Please retype the correct password"
    }
    else{
        localStorage.setItem("username",username);
        localStorage.setItem("email",email);
        localStorage.setItem("pwd",password);
        localStorage.setItem("cpwd",cpassword);
        document.getElementById("msg").innerHTML="User created Successfully"
        window.location.href = '/HTML/signin.html'
    }
}

function login(){
    const createdName = localStorage.getItem("username");
    const createdPwd = localStorage.getItem("pwd");

    const uname = document.getElementById("username").value;
    const pwd = document.getElementById("password").value;

    if(createdName == uname && createdPwd== pwd ){
        document.getElementById("msg").innerHTML = "Welcome "+ uname +" !"
        window.location.href = '/HTML/index.html';
        alert("hello "+uname)
    }
    else{
        document.getElementById("msg").innerHTML = "Please enter valid information"
    }
}
function logout(){
    const createdName = localStorage.getItem("username");
    const createdPwd = localStorage.getItem("pwd");

    const uname = document.getElementById("username").value;
    const pwd = document.getElementById("password").value;

    if(createdName == uname && createdPwd== pwd ){
        localStorage.removeItem("usename");
        localStorage.removeItem("email");
        localStorage.removeItem("pwd");
        localStorage.removeItem("cpwd")
        window.location.href = '/HTML/signup.html';
        alert("Successfully logged out of your account")
    }
    else{
        document.getElementById("msg").innerHTML = "Please enter valid information"
    }
}