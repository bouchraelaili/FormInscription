let inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("focus", function(event) {
        input.previousElementSibling.style.display = "inline";
        if (input.name == 'nom') {
            input.placeholder = "Jhon";
        } else if (input.name == 'email') {
            input.placeholder = "Jhon@gmail.com";
        }
    });
});

let nom = document.querySelector("#nom");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let conf = document.querySelector("#conf");
let accepte = document.querySelector("#accepte");
let check = document.querySelector(".check");
var submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!/^[a-zA-Z ]+$/.test(nom.value)) {
        nom.nextElementSibling.style.display = "inline";
    } else {
        nom.nextElementSibling.style.display = "none";

    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        email.nextElementSibling.style.display = "inline";
    } else {
        email.nextElementSibling.style.display = "none";

    }
    if (!/^\w{4,6}$/.test(password.value)) {
        password.nextElementSibling.style.color = "#FF5160";
    } else {
        password.nextElementSibling.style.color = "#000000";

    }
    if (conf.value != password.value) {
        conf.nextElementSibling.style.display = "inline";
    } else {
        conf.nextElementSibling.style.display = "none";

    }
    if (!accepte.checked) {
        check.style.display = "inline";
    } else {
        check.style.display = "none";

    }
})