






let btn = document.querySelector(".btn");
btn.addEventListener("click", function(event) {
    event.preventDefault();
    let email = document.getElementById("E-mail").value;
    let msg = document.getElementById("msg").value;
    if (email === "" ){
        alert("Please enter your email address.😑");
    } else if (msg === "") {
        alert("Please enter your message.🙄");
    } else {
        alert("Thank you for your message! ❤️");
    }
});