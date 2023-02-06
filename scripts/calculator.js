class Calculator {
    constructor(currNumText){
        this.currNumText = currNumText;
        this.currNum = ''
    }
    clear(){
        this.currNum = ''
        this.prevNum = ''
        this.operator = undefined
    }
    delete(){
        if(this.currNum.toString().includes("")){
            this.currNum = 0
        }
        this.currNum = this.currNum.toString().slice(0,-1)

    }
    appendNumber(number){
        if (number === '.' && this.currNum.includes('.')){
            this.currNum = this.currNum.toString()
            return this.currNum
        }
        if(this.prevNum === ''){
            this.currNumText.innerText = ""
        }

        this.currNum = this.currNum.toString() + number.toString()
        return this.currNum
    }
    selectOperator(operator){
        if(this.currNum === ''){
            return
        }
        if(this.prevNum !== ''){
            this.compute()
        }
        this.operator = operator
        this.prevNum = this.currNum
        this.currNum = ''
        
    }
    compute(){
        let result
        const previous = parseFloat(this.prevNum)
        const current = parseFloat(this.currNum)

        if(isNaN(previous) || isNaN(current)){
            return
        }
        switch(this.operator){
            case '+':
                result = previous + current
                break
            case '-':
                result = previous - current
                break
            case 'x':
                result = previous * current
                break
            case '/':
                result = previous / current
                break
            default:
                return
        }
        this.operator = undefined
        this.currNum = result
        this.prevNum = ''
        this.updateDisplay()
    }
    getNumber(number){
        let displayNum = Number(number).toLocaleString("en-US")
        if (displayNum.length > 15){
            alert('number is too big for this calculator')
            this.clear()
            this.updateDisplay()
        }
        return displayNum
    }
    updateDisplay(){
        this.currNumText.innerText = this.getNumber(this.currNum)
    }
   
}

const numberBtns = document.querySelectorAll('[data-num]')
const operatorBtns = document.querySelectorAll('[data-operator]')
const deleteBtn = document.querySelector('[data-delete]')
const clearBtn = document.querySelector('[data-clear]')
const equalsBtn = document.querySelector('[data-equals]')
const currNumText = document.querySelector('[data-display]')

let calculator = new Calculator(currNumText)

window.addEventListener('keydown', (event) => {
    if(Number(event.key)){
        calculator.appendNumber(event.key)
        calculator.updateDisplay()
    }
    if(event.code === 'Digit0' || event.code === 'Period'){
        console.log(event.code)
        calculator.appendNumber(event.key)
        calculator.updateDisplay()
    }
    let operators = ["+", "-", "x", "/"]
    if(operators.includes(event.key)){
        calculator.selectOperator(event.key)
        console.log(event.key)
    }
    if(["="].includes(event.key) || event.code === 'Enter'){
        calculator.compute()
        calculator.updateDisplay()
    }
    if(["Backspace"].includes(event.key)){
        calculator.delete()
        calculator.updateDisplay()
    }
})

numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operatorBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.selectOperator(button.innerText)
    })
})

clearBtn.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
    
})
deleteBtn.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
    
})

equalsBtn.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})