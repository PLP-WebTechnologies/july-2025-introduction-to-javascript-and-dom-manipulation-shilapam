 // ===== PART 1: VARIABLES AND CONDITIONALS =====
// Demonstrating variable declarations and conditional statements
function checkNumber() {
    // Variable declarations
    let userInput = prompt("Enter a number:");
    let number = parseFloat(userInput);
    let result;
    
    // Conditional statements
    if (isNaN(number)) {
        result = "That's not a valid number!";
    } else if (number > 0) {
        result = `${number} is a positive number.`;
    } else if (number < 0) {
        result = `${number} is a negative number.`;
    } else {
        result = "You entered zero.";
    }
    
    // DOM interaction (output the result)
    document.getElementById("conditional-output").innerHTML = result;
}

// ===== PART 2: FUNCTIONS =====
// Custom function 1: Calculate sum
function calculateSum(a, b) {
    return a + b;
}

// Custom function 2: Calculate product
function calculateProduct(a, b) {
    return a * b;
}

// Function that uses the custom functions
function calculate() {
    // Get input values
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    
    // Input validation
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return;
    }
    
    // Use our custom functions
    let sum = calculateSum(num1, num2);
    let product = calculateProduct(num1, num2);
    
    // Display results
    document.getElementById("function-output").innerHTML = 
        `Sum: ${num1} + ${num2} = <span class="highlight">${sum}</span><br>
         Product: ${num1} × ${num2} = <span class="highlight">${product}</span>`;
}

// ===== PART 3: LOOPS =====
// Example 1: While loop (countdown)
function showCountdown() {
    let count = 5;
    let output = "Countdown:<br>";
    
    // While loop
    while (count >= 0) {
        output += count + "<br>";
        count--; // Decrement count
    }
    output += "Liftoff! 🚀";
    
    document.getElementById("loop-output").innerHTML = output;
}

// Example 2: For loop (multiplication table)
function showMultiplication() {
    let number = parseInt(prompt("Enter a number for multiplication table:"));
    let output = `Multiplication table for ${number}:<br>`;
    
    // For loop
    for (let i = 1; i <= 10; i++) {
        output += `${number} × ${i} = <span class="highlight">${number * i}</span><br>`;
    }
    
    document.getElementById("loop-output").innerHTML = output;
}

// ===== PART 4: DOM INTERACTIONS =====
// DOM Interaction 1: Change text content
function changeText() {
    document.getElementById("dom-output").innerHTML = 
        "The text has been changed! <span class='highlight'>DOM manipulation is working!</span>";
}

// DOM Interaction 2: Change style
function changeColor() {
    const colors = ["#ffe6ee", "#e6f7ff", "#f0e6ff", "#e6ffe6"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("dom-output").style.backgroundColor = randomColor;
}

// DOM Interaction 3: Add new element
function addItem() {
    const list = document.getElementById("item-list");
    const newItem = document.createElement("li");
    newItem.textContent = "New item " + (list.children.length + 1);
    list.appendChild(newItem);
}