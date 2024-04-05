function rollDice(sides) {
    // Generate a random number between 1 and 6 (inclusive)
    return Math.floor(Math.random() * sides) + 1;
}

function main() {
    let sides = parseInt(prompt("Enter the number of sides on the dice:"));
     if (isNaN(sides) || sides <= 0) {
        alert("Please enter a valid number of sides.");
        return;
    }

    let rolls = [];
    let result;

    // Roll the dice until the result is 6
    do {
        result = rollDice(sides);
        rolls.push(result);
        console.log('Roll:', result);
    } while (result !== sides);
    console.log('Maximum number on the dice reached!');

}

main();