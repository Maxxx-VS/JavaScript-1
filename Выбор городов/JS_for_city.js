
function enter(){
    var city = document.getElementById("city").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        localStorage.setItem("city", city);
        alert("You are logged in!");

        window.location.href = "other_page.html";
    } else {
        alert("Invalid username or password");
    }
}