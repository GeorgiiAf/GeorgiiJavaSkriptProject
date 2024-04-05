function rollDice() {
    // Generate a random number between 1 and 6 (inclusive)
    return Math.floor(Math.random() * 6) + 1;
}

function main() {
    let rolls = [];
    let result;

    // Roll the dice until the result is 6
    do {
        result = rollDice();
        rolls.push(result);
        console.log('Roll:', result);
    } while (result !== 6);
}

main();