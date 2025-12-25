import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate(operator: string, num1: number, num2: number): number | string {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Cannot divide by zero!";
            }
            return num1 / num2;
        case '^':
        case '**':
            return num1 ** num2;
        default:
            return "Invalid operator";
    }
}

rl.question('Enter the first number: ', (num1Input) => {
    rl.question('Enter the operator (+, -, *, /, ^ or ** for exponent): ', (operator) => {
        rl.question('Enter the second number: ', (num2Input) => {
            const num1 = parseFloat(num1Input);
            const num2 = parseFloat(num2Input);

            if (isNaN(num1) || isNaN(num2)) {
                console.log("Invalid number input.");
            } else {
                const result = calculate(operator, num1, num2);
                console.log(`Result: ${result}`);
            }
            rl.close();
        });
    });
});

