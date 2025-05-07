const button = document.getElementById("submit");
const continues = document.getElementById("continue-btn");
input = document.getElementById('password-input');

function passwordcheck(){
    if (input.value == '6174'){
        continues.style.opacity = 100;
    }
    else{
        console.log("Incorrect!")
    }

}