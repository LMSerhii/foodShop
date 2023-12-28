
const buttonCheck = document.querySelector('.order-submit');

function validateEmail() {
    const emailInput = document.querySelector(".order-box-input").value;
    console.log(emailInput);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  // pattern


if (emailRegex.test(emailInput)) {
    console.log(emailRegex.test(emailInput));
    alert("Email is valid!"); // valid
} else {
    console.log(emailRegex.test(emailInput));
    alert("Invalid email format!"); // invalid
}
}


if (buttonCheck) {
    buttonCheck.addEventListener('click', function(event) {
    event.preventDefault();
    validateEmail();
});
}

export { validateEmail }