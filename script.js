const changer = document.querySelector(".changer")
const changerBtns = document.querySelectorAll(".changer-btn") 

const body = document.querySelector("body")
const visorContainer = document.querySelector("#visor-container")
const header = document.querySelector(".header")
const numbersBackground = document.querySelector("#numbers-and-functions");

const calcBtn = document.querySelectorAll(".calc-btn");
const previousOperationText = document.querySelector("#previous-operation");
const currentOperation = document.querySelector("#current-operation");

let changerIndex = 1;


// Change theme
changer.addEventListener("click", () => {

    for (let i = 0; i < changerBtns.length; i++) {
        changerBtns[i].classList.remove("active")
        }
          
        changerIndex++;
          
        if (changerIndex > changerBtns.length) {
            changerIndex = 1;
        }
          
        changerBtns[changerIndex - 1].classList.add("active");
    

    if(changerIndex === 1) {
        body.style.backgroundColor = "hsl(222, 26%, 31%)"
        visorContainer.style.backgroundColor = "hsl(224, 36%, 15%)"
        numbersBackground.style.backgroundColor = "hsl(223, 31%, 20%)"

        header.classList.remove("text-theme3")
    }

    if(changerIndex === 2) {
        body.style.backgroundColor = "hsl(0, 0%, 90%)"
        visorContainer.style.backgroundColor = "hsl(0, 0%, 93%)"
        numbersBackground.style.backgroundColor = "hsl(0, 5%, 81%)"
        currentOperation.style.color = "black"

        header.classList.add("text-theme2")
    }

    if(changerIndex === 3) {
        body.style.backgroundColor = "hsl(268, 75%, 9%)"
        visorContainer.style.backgroundColor = "hsl(268, 71%, 12%)"
        numbersBackground.style.backgroundColor = "hsl(268, 71%, 12%)"
        currentOperation.style.color = "white"
        
        header.classList.remove("text-theme2")
        header.classList.add("text-theme3")
    }
})

// Calc Functions
let currentNumber = []
let previousNumber = 0;
let operationFunction = "";
let resultNumber = 0

const addNumber = (number, array) => {
    array.push(number)
}

const changeNumber = (array) => {
    return +array.join('')
}

const showResult = (resultNumber, currentNumber, previousNumber) => {
    
    if(resultNumber && currentNumber !== 0 && previousNumber !== 0) {
        currentOperation.innerHTML = resultNumber
    }
}


const checkOperation = (selectedBtn) => {


    if(selectedBtn === "+") {
    
        if(previousNumber === 0) {
            previousNumber = changeNumber(currentNumber)
        } else {
            previousNumber = resultNumber

            console.log(previousNumber)
            console.log(currentNumber)
        }
        
        currentNumber = []

        return operationFunction = "sum"
    } 

    if(selectedBtn === "-") {
    
        if(previousNumber === 0) {
            previousNumber = changeNumber(currentNumber)
        }else {
            previousNumber = resultNumber

            console.log("novo " + previousNumber)
        }
        
        currentNumber = []

        return operationFunction = "subtraction"
    } 

    if(selectedBtn === "X") {
    
        if(previousNumber === 0) {
            previousNumber = changeNumber(currentNumber)
        }else {
            previousNumber = resultNumber

            console.log("novo " + previousNumber)
        }
        
        currentNumber = []

        return operationFunction = "multiplication"
    } 

    if(selectedBtn === "/") {
    
        if(previousNumber === 0) {
            previousNumber = changeNumber(currentNumber)
        }else {
            previousNumber = resultNumber

            console.log("novo " + previousNumber)
        }
        
        currentNumber = []

        return operationFunction = "division"
    } 
    
    if(+selectedBtn >= 0 || selectedBtn === ".") {
        addNumber(selectedBtn, currentNumber)
        currentOperation.innerHTML = changeNumber(currentNumber)

        console.log(currentNumber)
    }

    if(selectedBtn === "DEL") {
        currentNumber.pop()
        currentOperation.innerHTML = changeNumber(currentNumber)
    }

    if(selectedBtn === "=") {
        currentNumber = changeNumber(currentNumber)


        if(operationFunction === "sum") {
            resultNumber = previousNumber + currentNumber 


            console.log("current " + currentNumber)
            console.log("previous " + previousNumber)
            console.log(resultNumber)

            return resultNumber

        }

        if(operationFunction === "subtraction") {
            resultNumber = previousNumber - currentNumber 

            return resultNumber
        }

        if(operationFunction === "multiplication") {
            resultNumber = previousNumber * currentNumber 

            return resultNumber
        }

        if(operationFunction === "division") {
            resultNumber = previousNumber / currentNumber 

            return resultNumber.toFixed(2)
        }
       
    }

    if(selectedBtn === "RESET") {
        window.location.reload()
    }
}

calcBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const selectedBtn = e.target.innerText

        checkOperation(selectedBtn)
        showResult(resultNumber, currentNumber, previousNumber)
        
    })
})
