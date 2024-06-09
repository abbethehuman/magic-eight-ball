const answers = [
    "Definitely.",
    "Ask again later.",
    "Absolutely not.",
    "Only on Tuesdays.",
    "Sure, why not?",
    "No way!",
    "The answer is hidden.",
    "Yes, but only if...",
    "The universe says... maybe?",
    "Only if you eat broccoli."
];

function shake8Ball() {
    const question = document.getElementById('question').value;
    const responseDiv = document.getElementById('response');
    const answerDiv = document.getElementById('answer');
    
    if (question.trim() === "") {
        responseDiv.innerHTML = "Please ask a question!";
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];
    
    answerDiv.innerHTML = randomAnswer;
    responseDiv.innerHTML = "";
}




