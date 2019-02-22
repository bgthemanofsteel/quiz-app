let questionNumber = 0;
let score = 0;

/* 
function firstThingISee(){
    clear the page
    render header
    render title
    render quizStart
}
*/

/* 
function startQuiz(){
    listen for go button click
    clear main section
    add questionAnswerForm

}
*/

/*
    function renderQuestionForm(){
        return questionString of `html`
    }
*/

/*
function currentNumber(num){
    return data in format I need
}
*/



function handleQuizStart(){
    console.log('handle quiz start');
    $('.quizStart').on('click', '.startButton', function(){
        console.log('start clicked');
        console.log(questionNumber);
        questionNumber++;
        // handleQuestionCount(); 
        // $('.quizStart').remove();
        // $('.questionNumber').text(1);
    }
    )};

handleQuizStart();


function handleQuestionCount(){
    questionNumber ++;
    $('.questionNumber').text(questionNumber+1);
};

// function handleScoreCount(){
//     $('.questionAnswerForm').on('click', '.')
// );

// function handleStart(){

// };

// function handleAnswers(){

// };

// function handleRightWrongMessage(){

// };

// function handleEndMessage(){

// };

// function handleScore(){

// };