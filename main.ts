input.onButtonPressed(Button.A, function () {
    if (switchNumber == 0) {
        basic.showString("Press A+B to start")
    }
    if (switchNumber == 1) {
        number1 = number1 - 1
        basic.showNumber(number1)
    }
    if (switchNumber == 2) {
        number2 = number2 - 1
        basic.showNumber(number2)
    }
    if (switchNumber == 3) {
        operation = operation - 1
        if (operation == 1) {
            result = number1 + number2
            basic.showString("+")
        }
        if (operation == 2) {
            result = number1 - number2
            basic.showString("-")
        }
        if (operation == 3) {
            result = number1 * number2
            basic.showString("x")
        }
        if (operation == 4) {
            result = number1 / number2
            basic.showString(":")
        }
        if (operation == -1) {
            result = number1 + number2
            operation = 1
            basic.showString("+")
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    switchNumber = switchNumber + 1
    if (switchNumber == 1) {
        basic.clearScreen()
        basic.showString("Number 1")
        basic.showNumber(number1)
    }
    if (switchNumber == 2) {
        basic.clearScreen()
        basic.showString("Number 2")
        basic.showNumber(number2)
    }
    if (switchNumber == 3) {
        basic.clearScreen()
        basic.showString("Operation")
    }
    if (switchNumber == 4) {
        if (operation == 1) {
            basic.showString("" + number1 + "+" + number2 + "=")
            basic.clearScreen()
            basic.showNumber(result)
        }
        if (operation == 2) {
            basic.showString("" + number1 + "-" + number2 + "=")
            basic.clearScreen()
            basic.showNumber(result)
        }
        if (operation == 3) {
            basic.showString("" + number1 + "x" + number2 + "=")
            basic.clearScreen()
            basic.showNumber(result)
        }
        if (operation == 4) {
            basic.showString("" + number1 + ":" + number2 + "=")
            basic.clearScreen()
            basic.showNumber(result)
        }
    }
    if (switchNumber == 5) {
        control.reset()
    }
})
input.onButtonPressed(Button.B, function () {
    if (switchNumber == 0) {
        basic.showString("Press A+B to start")
    }
    if (switchNumber == 1) {
        number1 = number1 + 1
        basic.showNumber(number1)
    }
    if (switchNumber == 2) {
        number2 = number2 + 1
        basic.showNumber(number2)
    }
    if (switchNumber == 3) {
        operation = operation + 1
        if (operation == 1) {
            result = number1 + number2
            basic.showString("+")
        }
        if (operation == 2) {
            result = number1 - number2
            basic.showString("-")
        }
        if (operation == 3) {
            result = number1 * number2
            basic.showString("x")
        }
        if (operation == 4) {
            result = number1 / number2
            basic.showString(":")
        }
        if (operation == 5) {
            result = number1 + number2
            operation = 1
            basic.showString("+")
        }
    }
})
let result = 0
let operation = 0
let number2 = 0
let number1 = 0
let switchNumber = 0
basic.showString("Calculator")
switchNumber = 0
number1 = 0
number2 = 0
operation = 0
result = 0
