// Function to prompt the user for the number of candidates
function getCandidateCount() {
    return parseInt(prompt("Enter the number of candidates:"));
}

// Function to prompt the user for the names of the candidates
function getCandidateNames(candidateCount) {
    let candidates = [];    // array for names
    for (let i = 0; i < candidateCount; i++) {
        let name = prompt(`Name for candidate ${i + 1}:`);
        candidates.push({ name: name, votes: 0 });    // adding info
    }
    return candidates;
}

// Function to prompt the user for the number of voters
function getVoterCount() {
    return parseInt(prompt("Enter the number of voters:"));
}

// Function to conduct the voting process
function conductVoting(candidates, voterCount) {
    for (let i = 0; i < voterCount; i++) {
        let vote = prompt(`Enter the candidate's name you want to vote for (or leave empty for an empty vote):`);
        if (vote !== "") {
            let candidate = candidates.find(candidate => candidate.name === vote);
            if (candidate) {
                candidate.votes++;
            } else {
                console.log(`Invalid candidate: ${vote}`);
            }
        }
    }
}

// Function to determine the winner and print the results
function printResults(candidates) {
    candidates.sort((a, b) => b.votes - a.votes);
    let winner = candidates[0];
    console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
    console.log("Results:");
    candidates.forEach(candidate => console.log(`${candidate.name}: ${candidate.votes} votes`));
}

// Main program logic
function main() {
    let candidateCount = getCandidateCount();
    let candidates = getCandidateNames(candidateCount);
    let voterCount = getVoterCount();
    conductVoting(candidates, voterCount);
    printResults(candidates);
}

// Call the main function to start the program
main();