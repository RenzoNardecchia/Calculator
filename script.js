// These ariables hold the number buttons
const numberOneBtn = document.querySelector('#one'),
    numberTwoBtn = document.querySelector('#two'),
    numberThreeBtn = document.querySelector('#three'),
    numberFourBtn = document.querySelector('#four'),
    numberFiveBtn = document.querySelector('#five'),
    numberSixBtn = document.querySelector('#six'),
    numberSevenBtn = document.querySelector('#seven'),
    numberEightBtn = document.querySelector('#eight'),
    numberNineBtn = document.querySelector('#nine'),
    numberZeroBtn = document.querySelector('#zero');

// These variables hold the operation buttons
const divideBtn = document.querySelector('#divide'),
    multiplyBtn = document.querySelector('#multiply'),
    substractBtn = document.querySelector('#substract'),
    addBtn = document.querySelector('#add');

// These variables store the other buttons
const clearBtn = document.querySelector('#clear'),
    decimalBtn = document.querySelector('#decimal'),
    equalBtn = document.querySelector('#equal');

// This variable stores the value the display will show
let displayValue = document.querySelector('#displayValue');

// These variables store the number values
let previousNumber = '';
let currentNumber = '';

// This variable stores the last operator used
let lastOperator = '';

// This variable stores the decimal point to serve as a comparison
let decimal = '.';

// This variable stores the result of the different operations
let result;

// This function rounds the number depending on it's size to prevent overflow of the screen
function roundResult(){
    if(`${result}`.includes('.')){
        if(result < 10){
            console.log('less than 10');
            result = parseFloat(result.toFixed(8));
            displayValue.textContent = `${result}`;
        } else if(result < 100){
            result = parseFloat(result.toFixed(7));
            displayValue.textContent = `${result}`;
        } else if(result < 1000){
            result = parseFloat(result.toFixed(6));
            displayValue.textContent = `${result}`;
        } else if(result < 10000){
            result = parseFloat(result.toFixed(5));
            displayValue.textContent = `${result}`;
        } else if(result < 100000){
            result = parseFloat(result.toFixed(4));
            displayValue.textContent = `${result}`;
        } else if(result < 1000000){
            result = parseFloat(result.toFixed(3));
            displayValue.textContent = `${result}`;
        } else if(result < 10000000){
            result = parseFloat(result.toFixed(2));
            displayValue.textContent = `${result}`;
        } else if(result < 100000000){
            result = parseFloat(result.toFixed(1));
            displayValue.textContent = `${result}`;
        } else if(result < 1000000000){
            result = parseFloat(result.toFixed(0));
            displayValue.textContent = `${result}`;
        }                  
    }
}

// These will be the operation functions
function add(){
    displayValue.textContent = +previousNumber + +currentNumber;
    result =  +previousNumber + +currentNumber;

    // This statement limits the number size to 9999999999
    if(result > 9999999999){
        displayValue.textContent = 'ERROR';
        return;
    }
    roundResult();
    previousNumber = `${result}`;
    currentNumber = '';
}

function substract(){
    displayValue.textContent = +previousNumber - +currentNumber;
    result =  +previousNumber - +currentNumber;
    if(result > 9999999999){
        displayValue.textContent = 'ERROR';
        return;
    }
    roundResult();
    previousNumber = `${result}`;
    currentNumber = '';
}

function multiply(){
    displayValue.textContent = +previousNumber * +currentNumber;
    result =  +previousNumber * +currentNumber;
    if(result > 9999999999){
        displayValue.textContent = 'ERROR';
        return;
    }
    roundResult();
    previousNumber = `${result}`;
    currentNumber = '';
}

function divide(){
    if(previousNumber === 0 || previousNumber === ''){
        displayValue.textContent = 'ERROR';
        return;
    }
    displayValue.textContent = +previousNumber / +currentNumber;
    result =  +previousNumber / +currentNumber;
    if(result > 9999999999){
        displayValue.textContent = 'ERROR';
        return;
    }
    roundResult();
    previousNumber = `${result}`;
    currentNumber = '';
}

// This function will be the one that calls the operation
function operate(){
    switch(lastOperator){
        case '+':
            add();
            break;
        case '−':
            substract();
            break;
        case '×':
            multiply();
            break;
        case '÷':
            divide();
            break;
    }
}

// These will be the chained operation functions
// The difference between these and the normal operation functions is that these operations
// don't show the result on the display
function addChain(){
    result =  +previousNumber + +currentNumber;
    if(result > 9999999999){
        displayValue.textContent = 'ERROR';
        return;
    }
    roundResult();
    previousNumber = `${result}`;
    currentNumber = '';
}

function substractChain(){
    result =  +previousNumber - +currentNumber;
    if(result > 9999999999){
        displayValue.textContent = 'ERROR';
        return;
    }
    roundResult();
    previousNumber = `${result}`;
    currentNumber = '';
}

function multiplyChain(){
    result =  +previousNumber * +currentNumber;
    if(result > 9999999999){
        displayValue.textContent = 'ERROR';
        return;
    }
    roundResult();
    previousNumber = `${result}`;
    currentNumber = '';
}

function divideChain(){
    if(previousNumber === 0){
        displayValue.textContent = 'ERROR';
        return;
    }
    result =  +previousNumber / +currentNumber;
    if(result > 9999999999){
        displayValue.textContent = 'ERROR';
        return;
    }
    roundResult();
    previousNumber = `${result}`;
    currentNumber = '';
}

// This will hold the chained operations functions
function operateChain(){
    switch(lastOperator){
        case '+':
            addChain();
            break;
        case '−':
            substractChain();
            break;
        case '×':
            multiplyChain();
            break;
        case '÷':
            divideChain();
            break;
    }
}

// This function displays the numbers on the screen
function displayNumbers(e){
    // This statement clears the screen when the user tries to add numbers to the result of an operation
    // or when an error has ocurred
    if(result == +displayValue.textContent || displayValue.textContent == 'ERROR'){
        clear();
    }

    // This if statement clears the screen when the display value is an operator
    if(displayValue.textContent == '+' || displayValue.textContent == '−' || displayValue.textContent == '×' ||
    displayValue.textContent == '÷'){ displayValue.textContent = ''}

    // This statement prevents the numbers input if the display value is more than
    // 10 characters long
    if((displayValue.textContent).length == 10){return}

    // console.log(e.target.textContent);

    // This statement sets the value of number1 and number2
        switch(+((e.target).textContent)){
            case 1:
                displayValue.textContent += 1;
                currentNumber += 1;
                break;
            case 2:
                displayValue.textContent += 2;
                currentNumber += 2;
                break;
            case 3:
                displayValue.textContent += 3;
                currentNumber += 3;
                break;
            case 4:
                displayValue.textContent += 4;
                currentNumber += 4;
                break;
            case 5:
                displayValue.textContent += 5;
                currentNumber += 5;
                break;
            case 6:
                displayValue.textContent += 6;
                currentNumber += 6;
                break;
            case 7:
                displayValue.textContent += 7;
                currentNumber += 7;
                break;
            case 8:
                displayValue.textContent += 8;
                currentNumber += 8;
                break;
            case 9:
                displayValue.textContent += 9;
                currentNumber += 9;
                break;
            case 0:
                displayValue.textContent += 0;
                currentNumber += 0;
                break;
        }
        return currentNumber;
}

function addDecimalPoint(){

    if((displayValue.textContent).includes(decimal)){
        return;
    }
    displayValue.textContent += '.';
    currentNumber += '.';

}
// This function updates the screen, numbers and operator
function displayOperations(e){
    // This statement keeps the user from using operators if no number has been added
    if(displayValue.textContent == '') return;
    displayValue.textContent = '';
    switch((e.target).textContent){
        case '+':
            displayValue.textContent = '+';

            //This statement does the chained operations
            if(previousNumber !== '' && currentNumber !== ''){
                operateChain();
                previousNumber = `${result}`;
                lastOperator = '+';
                return;
            }
            // This statement allows the user to do operations with the result of an operation. The reason
            // behind this is that when the user press "=" (equal), statement activates the operate 
            // function, which adds or substract the currentNumber to the previousNumber, and the currentNumber 
            // after pressing "=" it's set to 0 (zero)
            if(currentNumber == '' && result !== undefined){
                previousNumber = `${result}`;
                lastOperator = '+';
                return;
            }
            lastOperator = '+';
            previousNumber = currentNumber;
            currentNumber = '';
            break;
        case '−':
            displayValue.textContent = '−';
            if(previousNumber !== '' && currentNumber !== ''){
                operateChain();
                previousNumber = `${result}`;
                lastOperator = '−';
                return;
            }
            if(currentNumber == '' && result !== undefined){
                previousNumber = `${result}`;
                lastOperator = '−';
                return;
            }
            lastOperator = '−';
            previousNumber = currentNumber;
            currentNumber = '';
            break;
        case '×':
            displayValue.textContent = '×';
            if(previousNumber !== '' && currentNumber !== ''){
                operateChain();
                previousNumber = `${result}`;
                lastOperator = '×';
                return;
            }

            // This statement allows the user to use the multiply and divide functions with the result of
            // an operation, because the previous statement activates the operate function and the
            // previousNumber is multiplied or divided by the current number, which after pressing "="
            // it is set to 0 (zero)
            if(currentNumber == '' && result !== undefined){
                previousNumber = `${result}`;
                lastOperator = '×';
                return;
            }
            lastOperator = '×';
            previousNumber = currentNumber;
            currentNumber = '';
            break;
        case '÷':
            displayValue.textContent = '÷';
            if(previousNumber !== '' && currentNumber !== ''){
                operateChain();
                previousNumber = `${result}`;
                lastOperator = '÷';
                return;
            }
            if(currentNumber == '' && result !== undefined){
                previousNumber = `${result}`;
                lastOperator = '÷';
                return;
            }
            lastOperator = '÷';
            previousNumber = currentNumber;
            currentNumber = '';
            break;
    }
}

// This function clears all the data
function clear(){
    currentNumber = '';
    previousNumber = '';
    displayValue.textContent = '';
    result = undefined;

}

// Number buttons event listeners
numberOneBtn.addEventListener('click', displayNumbers);
numberTwoBtn.addEventListener('click', displayNumbers);
numberThreeBtn.addEventListener('click', displayNumbers);
numberFourBtn.addEventListener('click', displayNumbers);
numberFiveBtn.addEventListener('click', displayNumbers);
numberSixBtn.addEventListener('click', displayNumbers);
numberSevenBtn.addEventListener('click', displayNumbers);
numberEightBtn.addEventListener('click', displayNumbers);
numberNineBtn.addEventListener('click', displayNumbers);
numberZeroBtn.addEventListener('click', displayNumbers);

// Operation buttons event listeners
addBtn.addEventListener('click', displayOperations);
substractBtn.addEventListener('click', displayOperations);
multiplyBtn.addEventListener('click', displayOperations);
divideBtn.addEventListener('click', displayOperations);

// Other buttons event listeners
clearBtn.addEventListener('click', clear);
decimalBtn.addEventListener('click', addDecimalPoint);
equalBtn.addEventListener('click', operate);
