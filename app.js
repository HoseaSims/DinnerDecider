const optionOne = document.querySelector("#option1")
const optionTwo = document.querySelector("#option2")
const optionThree = document.querySelector("#option3")
const result = document.querySelector("#result")
const form = document.querySelector("form");
const resultSub = document.querySelector(".result-sub")


let finalValue;
function getValue(){
    finalValue = Math.floor(Math.random() * 3);
    console.log(finalValue);
}


form.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log("button is reading you");
    
    getValue();
    
    if (finalValue === 0){
        result.textContent = optionOne.value;
        console.log(optionOne.value);
    }
    else if (finalValue === 1){
        result.textContent = optionTwo.value;
        console.log(optionTwo.value);
    }else if (finalValue === 2){
        result.textContent = optionThree.value;
        console.log(optionThree.value);
    }
    
    result.classList.add("text-success")
    result.classList.toggle("popanimation")
    result.classList.toggle("popanimationtwo")
    

    resultSub.style.visibility = "visible"
})
