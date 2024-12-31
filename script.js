function isSameType(value1, value2) {
    // Special case: Check if both are NaN
    if (Number.isNaN(value1) && Number.isNaN(value2)) {
        return true;
    }

    // General case: Compare types
    return typeof value1 === typeof value2;
}


// Prompt inputs
let input1 = prompt("Enter the first value:");
let input2 = prompt("Enter the second value:");

// Convert inputs intelligently
let value1 = !isNaN(input1) && input1.trim() != "" ? Number(input1) : input1;
let value2 = !isNaN(input2) && input2.trim() != "" ? Number(input2) : input2;

alert(isSameType(value1, value2).toString());
