// pin generator
function pinGenerator() {
    let number = Math.round(Math.random() * 1000);
    return number;
}
document.getElementById("displayInput").value =pinGenerator();  
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function () {
    const pin = pinGenerator();
    const displayInput = document.getElementById("displayInput");
    displayInput.value = pin;
});

// submit section

const allBtn = document.getElementById("allBtn");
allBtn.addEventListener("click", function (event) {
    const ownBtn = event.target.innerText;

    if (ownBtn == "C") {
        submitDisplay.value = "";
    }else if(ownBtn == "<") {
        const submitDisplay = document.getElementById("submitDisplay");
        const sumSting = submitDisplay.value;
        const removeLast = sumSting.slice(0,-1);
        submitDisplay.value = removeLast;
    }else if(ownBtn == "Submit") {
        const submitDisplay = document.getElementById("submitDisplay");
        const displayInput = document.getElementById("displayInput");
        const errorMessage = document.getElementById("error-message");
        const successMessage = document.getElementById("success-message");
        const right = document.getElementById("right");
        const left = document.getElementById("left");
        const rePlay = document.getElementById("re-play");

        if(submitDisplay.value == displayInput.value && displayInput.value > 500 && displayInput.value <= 599) {
            successMessage.style.display = "block";
            successMessage.innerText = "সে আপনাকে মোটেই ভালোবাসে না";
            errorMessage.style.display = "none";
            submitDisplay.value="";
            displayInput.value="";
            left.style.display="none";
            right.style.display="none";
            rePlay.style.display="block";
            rePlay.addEventListener("click", function() {
                window.location.href = "https://14february-game.netlify.app";
            });

        }else if(submitDisplay.value == displayInput.value && displayInput.value > 600 && displayInput.value <= 649) {
            successMessage.style.display = "block";
            successMessage.innerText = "আপনি সাবধান হোন। সেই আপনার সাথে ছলনা করছে";
            errorMessage.style.display = "none";
            submitDisplay.value="";
            displayInput.value="";
            left.style.display="none";
            right.style.display="none";
            rePlay.style.display="block";
            rePlay.addEventListener("click", function() {
                window.location.href = "https://14february-game.netlify.app";
            });
        }else if(submitDisplay.value == displayInput.value && displayInput.value > 650 && displayInput.value <= 699) {
            successMessage.style.display = "block";
            successMessage.innerText = "সে নিজের জীবনের চেয়েও বেশি আপনাকে ভালোবাসে";
            errorMessage.style.display = "none";
            submitDisplay.value="";
            displayInput.value="";
            left.style.display="none";
            right.style.display="none";
            rePlay.style.display="block";
            rePlay.addEventListener("click", function() {
                window.location.href = "https://14february-game.netlify.app";
            });
        }else if(submitDisplay.value == displayInput.value && displayInput.value > 700 && displayInput.value <= 799) {
            successMessage.style.display = "block";
            successMessage.innerText = "আপনি অনেক ভাগ্যবান যে তার মত মেয়ে আপনার কপালে জুটেছে";
            errorMessage.style.display = "none";
            submitDisplay.value="";
            displayInput.value="";
            left.style.display="none";
            right.style.display="none";
            rePlay.style.display="block";
            rePlay.addEventListener("click", function() {
                window.location.href = "https://14february-game.netlify.app";
            });
        }else if(submitDisplay.value == displayInput.value && displayInput.value > 800) {
            successMessage.style.display = "block";
            errorMessage.style.display = "none";
            submitDisplay.value="";
            displayInput.value="";
            left.style.display="none";
            right.style.display="none";
            rePlay.style.display="block";
            rePlay.addEventListener("click", function() {
                window.location.href = "https://14february-game.netlify.app";
            });
        }
        else{
            errorMessage.style.display = "block";
            successMessage.style.display = "none";
            left.style.display="none";
            right.style.display="none";
            rePlay.style.display="block";
            rePlay.addEventListener("click", function() {
                window.location.href = "https://14february-game.netlify.app";
            });
        }
       
    }else {
        const submitDisplay = document.getElementById("submitDisplay");
        const sumSting = submitDisplay.value + ownBtn;
        submitDisplay.value = sumSting;
    }
});