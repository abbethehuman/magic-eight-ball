const answers = [
    "Definitely, but only if you're wearing a purple hat.",
    "Ask again later, the stars are not aligned.",
    "Absolutely not, unless you can dance like a chicken.",
    "Only on Tuesdays during a full moon.",
    "Sure, if you can solve a Rubik's Cube blindfolded.",
    "No way, José!",
    "The answer is hidden in the depths of the ocean.",
    "Yes, but only if you hop on one leg.",
    "The universe says... maybe?",
    "Only if you promise to eat broccoli for a week."
];

function shake8Ball() {
    const question = document.getElementById('question').value;
    const responseDiv = document.getElementById('response');
    
    if (question.trim() === "") {
        responseDiv.innerHTML = "Please ask a question!";
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];
    
    responseDiv.innerHTML = `<p>You asked: ${question}</p><p>The Magic 8 Ball says: ${randomAnswer}</p>`;
}
