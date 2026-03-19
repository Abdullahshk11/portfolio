let tl = gsap.timeline();
tl.from("header",
    {
        y: -100,
        opacity: 0,
        duration: 1
    })
tl.from(".about_lines, #element", {
    y: 25,
    opacity: 0,
    duration: 0.3,
    stagger: 0.1
});
tl.from(".about_pic", {
    y: 20,
    opacity: 0,
    duration: 1
});



let btn = document.getElementById("btn");
btn.addEventListener("click", function (event) {
    event.preventDefault();
    let email = document.getElementById("E-mail").value;
    let msg = document.getElementById("msg").value;
    if (email === "") {
        alert("Please enter your email address.😑");
    } else if (msg === "") {
        alert("Please enter your message.🙄");
    } else {
        alert("Thank you for your message! ❤️");
    }
});