let currentValue = 0;
let selectOperation = null;
let storedValue = null;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return (b == 0) ? "LOL" : a / b;
    //return a / b;
}

function operate(operator, a, b) {
    return operator(a, b);
}

const numberList = document.querySelectorAll("div[data-number]");
const display = document.querySelector(".display");

display.innerHTML = currentValue;

numberList.forEach(function(number) {
    number.addEventListener("click", function () {
        // show in display and add to value
        currentValue = (currentValue * 10) + Number(number.dataset.number);
        display.innerHTML = currentValue;
    })
})

document.querySelector("#add").addEventListener("click", function () {
    //console.log("add");
    if (selectOperation == null) {
        storedValue = currentValue;
        currentValue = null;
    } else if (currentValue !== null) {
        currentValue = selectOperation(storedValue, currentValue);
        display.innerHTML = currentValue;
        storedValue = currentValue;
        currentValue = null;
    }

    selectOperation = add;

});

document.querySelector("#subtract").addEventListener("click", function () {
    //console.log("subtract");
    if (selectOperation == null) {
        storedValue = currentValue;
        currentValue = null;
    } else if (currentValue !== null) {
        currentValue = selectOperation(storedValue, currentValue);
        display.innerHTML = currentValue;
        storedValue = currentValue;
        currentValue = null;
    }

    selectOperation = subtract;

});

document.querySelector("#multiply").addEventListener("click", function () {
    if (selectOperation == null) {
        storedValue = currentValue;
        currentValue = null;
    } else if (currentValue !== null) {
        currentValue = selectOperation(storedValue, currentValue);
        display.innerHTML = currentValue;
        storedValue = currentValue;
        currentValue = null;
    }

    selectOperation = multiply;

});

document.querySelector("#divide").addEventListener("click", function () {
    if (selectOperation == null) {
        storedValue = currentValue;
        currentValue = null;
    } else if (currentValue !== null) {
        currentValue = selectOperation(storedValue, currentValue);
        display.innerHTML = currentValue;
        storedValue = currentValue;
        currentValue = null;
    }

    selectOperation = divide;

});

document.querySelector("#operate").addEventListener("click", function () {
    if ((selectOperation == null) || (currentValue == null)) {
        // do nothing
    } else if (currentValue !== null) {
        currentValue = selectOperation(storedValue, currentValue);
        display.innerHTML = currentValue;
        storedValue = currentValue;
        selectOperation = null;
    }
});

document.querySelector("#clear").addEventListener("click", function() {
    console.log("deleting");

    currentValue = 0;
    selectOperation = null;
    storedValue = null;

    display.innerHTML = currentValue;
})