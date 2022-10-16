const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    const usernameValue = username.value
    const emailValue = email.value
    const passwordValue = password.value
    const passwordConfirmationValue = passwordConfirmation.value

    if (usernameValue === "") {
        setErrorFor(username, "You need an username")
    } else {
        setSuccessFor(username)
    }

    if(email === "") {
        setErrorFor(email, "Email required")
    } else if (!checkEmail(emailValue)) {
        setSuccessFor(email, "Please inset a valid email")
    } else {
        setSuccessFor(email)
    }

    if (password === "") {
        setErrorFor(password, "Password required")
    } else if (passwordValue.length < 7) {
        setErrorFor(password, "Password too small. Min. 7 characters")
    } else {
        setSuccessFor(password)
    }

    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, "Confirmation required")
    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, "Password do not match")
    }
    

    const formControls = form.querySelectorAll(".form-control")

    const formIsValid = [...formControls].every((formControl)=> {
        return (formControl.className === "form-control success")
    })

    if(formIsValid) {
        console.log("Form is 100% working")
    }
}



function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    //Adding error message
    small.innerText = message;

    formControl.className = "form-control error"
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    //Adding success class
    formControl.className = "form-control success"
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }