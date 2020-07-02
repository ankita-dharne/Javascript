var questions = [{
    question:"What is the baby of a moth known as?",
    choices:["baby" , "infant", "kit", "larva"],
    correctAnswer: 3
},{
    question:"What is the adult of a kid called?",
    choices:["calf" , "doe", "goat", "chick"],
    correctAnswer: 2
},{
    question:"What is the young buffalo called?",
    choices:["baby" , "kitten", "pup", "cow"],
    correctAnswer: 0
},{
    question:"What is the baby Aligator called?",
    choices:["baby" , "gator", "hatchling", "calf"],
    correctAnswer: 2
},{
    question:"What is the baby goose called?",
    choices:["gooser" , "goosling", "gup", "pup"],
    correctAnswer: 1
},{
    question:"What is the baby Hamster called?",
    choices:["pup" , "chick", "infant", "larva"],
    correctAnswer: 0
},{
    question:"What is the baby Hawk called?",
    choices:["hawklett" , "pup", "eyas", "larva"],
    correctAnswer: 4
},{
    question:"What is the baby grasshopper called?",
    choices:["hopper" , "nymph", "stick", "pup"],
    correctAnswer: 1
},{
    question:"What is the baby Kangaroo?",
    choices:["kinga" , "joey", "calf", "baby"],
    correctAnswer: 1
},{
    question:"What is the baby Whale called?",
    choices:["whala" , "cub", "grub", "infant"],
    correctAnswer: 1
},{
    question:"What is the baby Monkey called?",
    choices:["baby" , "infant", "calf", "pup"],
    correctAnswer: 0
},{
    question:"What is the baby Bear called?",
    choices:["cub" , "baby balu", "young bear", "bearlet"],
    correctAnswer: 0
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;


$(document).ready(function(){
    displayCurrentQuestions();
    $(this).find(".quizMessage").hide();
    $(this).find(".nextButton").on("click", function(){
        if(!quizOver){
            value = $("input[type='radio']:checked").val();
            if(value == undefined){
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                $(document).find(".quizMessage").hide();
                if(value == questions[currentQuestion].correctAnswer){
                    correctAnswers++;
                }
                currentQuestion++;
                if(currentQuestion < questions.length){
                    displayCurrentQuestions();
                } else {
                    displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz;
            displayCurrentQuestions();
            hideScore();
        }
    });

});

function displayCurrentQuestions(){
    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;
    
    //Set the questionClass text to the current question
    $(questionClass).text(question);

    //Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();
    
    var choice;
    for(i=0;  i<numChoices; i++){
        choice = questions[currentQuestion].choices[i];
        $('<li> <input type="radio" value' + i + 'name = "dynradio" />' + choice + '<li>').appendTo(choiceList);
    }
}
    function resetQuiz(){
        currentQuestion = 0;
        correctAnswers = 0;
        hideScore();
    }

    function  displayScore(){
        $(document).find(".quizContainer  > .result").text("You scored: " + correctAnswers + " out of: " +questions.length);
        $(document).find(".quizContainer > .result").show();
    }

    function hideScore(){
        $(document).find(".result").hide();
    }

