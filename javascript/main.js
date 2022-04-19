/* function contain the calculator */
function calculator(){
    /* define variables */
    const currentoutput = document.querySelector(".currentoutput");
    const previousoutput = document.querySelector(".previousoutput");
    const buttonsNumbers = document.querySelectorAll(".btn");
    const operationbutton = document.querySelectorAll(".operationbutton");
    const persent = document.querySelector(".persent")
    const aclear = document.querySelector(".aclear")
    const del = document.querySelector(".del") 
    const equal = document.querySelector(".equal");

    /* function to append Number */
    function appendNumber(number){
        if(number === "." && currentoutput.innerText.includes(".")) return
        /* convert to string to sum not add */ 
        currentoutput.innerText = currentoutput.innerText.toString() + number.toString()
    }

    /* function to chooseOperation  */
    function chooseOperation(operation){
        if(currentoutput.innerText === "" ) return
        /* to compute the sum */
        if(previousoutput.innerText !== ''){ 
            compute()
        }
        previousoutput.innerText = currentoutput.innerText
        currentoutput.innerText = "";
        this.operation = operation
        update()
    }
    function compute(){
        let computation;
        const prev = parseFloat(previousoutput.innerText);
        const current = parseFloat(currentoutput.innerText);
        if(isNaN(prev)  || isNaN(current)) return
        switch(this.operation){
            case "+":
                computation =  prev + current 
                break
            case "×":
                computation =  prev * current 
                break
            case "÷":
                computation =  prev / current 
                break
            case "-":
                computation =  prev - current 
                break
            default:
                return;
        }
        currentoutput.innerText = computation
        this.operation = undefined;
        previousoutput.innerText = ""
    }

function delte(){
    currentoutput.innerText = currentoutput.innerText.toString().slice(0, -1)
}


    buttonsNumbers.forEach(button => {
        button.addEventListener("click" , () => {
            appendNumber(button.innerText)
            
        })
    }); 
function update(){
    if(this.operation != null){
        previousoutput.innerText = `${previousoutput.innerText} ${this.operation}`
    }
}

    operationbutton.forEach(operation => {
        operation.addEventListener("click" , () => {
            chooseOperation(operation.innerText)
        })
    }); 
    equal.addEventListener("click", () => {
        compute()
    })
    aclear.addEventListener("click" , () => {
        currentoutput.innerText = "";
        previousoutput.innerText = "";
    })

    del.addEventListener("click" , () => {
        delte()
    })

    persent.addEventListener("click" , () => {
        compute();
        currentoutput.innerText = currentoutput.innerText / 100
    })



}
calculator()
