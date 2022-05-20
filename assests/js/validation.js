function closeNavbarFunc(){
    var checkinput = document.getElementById("check")
    if(checkinput.checked){
        checkinput.checked = false;
    }
}

console.log("working")
 // Get data
const nameInput = document.querySelector("#fname");
const email = document.querySelector("#cemail");
const message = document.querySelector("#msg");
const success = document.querySelector("#success");
const errorNodes = document.querySelector(".error");

// Validate data
function validateForm() {
    clearMessages();
    let errorFlag = false;
     
    if(nameInput.ariaValueMax.length < 1){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailValid(email.value)){
        errorNodes[1].innerText = "Nmae cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;

    }

    if(message.ariaValueMax.length < 1){
        errorNodes[0].innerText = "please enter message";
        message.classList.add("error-border");
        errorFlag = true;

    }

    if(!errorFlag){
        success.innerText = "Success!";
    }
}

// Clear error / success messages
function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");

}

//Check if email is valid

function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

function grabScholarshipErrorFunc(){
    alert("This feature coming soon!")
}