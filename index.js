let questionNumber = 0;
let score = 0;


function startScreen(){
    //when page loads show quizStart
    $('.quizStart').show();
    $('.rightAnswer').hide();
    $('.wrongAnswer').hide();
    $('.winner').hide();
    $('.loser').hide();
}



function renderQuestionAnswerForm(){
    //console.log('render question form works');
    //return questionString of `html`
    if(questionNumber < STORE.length){
        return `<div class="question-${questionNumber}">
        <legend><h2>${STORE[questionNumber].question}</h2></legend>
        <fieldset>
            <form>
            <div class = "questionChoices">
                <label class="answerOption">
                <input type="radio" value="${STORE[questionNumber].choices[0]}" name="answer" required>
                <span>${STORE[questionNumber].choices[0]}</span>
                </label>

                <label class="answerOption">
                <input type="radio" value="${STORE[questionNumber].choices[1]}" name="answer" required>
                <span>${STORE[questionNumber].choices[1]}</span>
                </label>

                <label class="answerOption">
                <input type="radio" value="${STORE[questionNumber].choices[2]}" name="answer" required>
                <span>${STORE[questionNumber].choices[2]}</span>
                </label>

                <label class="answerOption">
                <input type="radio" value="${STORE[questionNumber].choices[3]}" name="answer" required>
                <span>${STORE[questionNumber].choices[3]}</span>
                </label>
                <div class="submit">
                    <button type="submit">Submit</button>
                </div>
            </div>
            
            </form>
            
        </fieldset>
        </div>`;
    // } else {
    //     renderResults();
    //     restartQuiz();
    //     $('.questionNumber').text(10)
    }
    
}


function handleQuizStart(){
    // console.log('handle quiz start');
    $('.quizStart').on('click', '.startButton', function(){
        // console.log('start clicked');
        // console.log(questionNumber);
        //questionNumber++;
        handleQuestionCount(); 
        $('.quizStart').remove();
        $('.questionAnswerForm').html(renderQuestionAnswerForm());
        $('.questionNumber').text(1);
    }
    )};


function handleQuestionCount(){
    $('.questionNumber').text(questionNumber+1);
};

function handleScoreCount(){
    $('.score').text(score);
};

function changeScore(){
    score++;
    handleScoreCount();
};

function handleUserSelection(){
    $('.questionAnswerForm').on('click', '.submit', function(event){
        event.preventDefault();
        let selected = $('input:checked');
        let answer = selected.val();
        let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
        if(answer === correctAnswer){
            selected.parent().addClass('correct');
            correct();
            } else {
            selected.parent().addClass('wrong');
            wrong();
            }
        }
    )
}


function correct(){
    changeScore();
    // console.log(score);
    $('.questionAnswerForm').hide();
    // $('.quizStart').hide();
    $('.rightAnswer').html(
        `<p>YOU GOT IT!</p>
        <img src="${STORE[questionNumber].image}" alt="${STORE[questionNumber].alt}">
        <div class="next">
            <button type="next">Next</button>
        </div>`).toggle();
    };

function wrong(){
    $('.questionAnswerForm').toggle();
    // $('.quizStart').hide();
    $('.wrongAnswer').html(
        `<p><b>NOT QUITE.</b><br>The correct answer is <span>${STORE[questionNumber].correctAnswer}</span></p>
        <img src="${STORE[questionNumber].image}" alt="${STORE[questionNumber].alt}">
        <div class="next">
            <button type="next">Next</button>
        </div>`).toggle();
}

function renderQuestion () {
    $('.questionAnswerForm').html(renderQuestionAnswerForm());
  }


function renderNextQuestion(){
    $('.rightAnswer').on('click', '.next', function(){
        $('.rightAnswer').toggle();
        $('.questionAnswerForm').toggle();
        questionNumber ++;
        handleQuestionCount();
        renderQuestion();
        
    })
    $('.wrongAnswer').on('click', '.next', function(){
        $('.wrongAnswer').toggle();
        $('.questionAnswerForm').toggle();
        questionNumber ++;
        handleQuestionCount();
        renderQuestion();
        
    })

}


function handleEndMessage(){
    if(questionNumber === STORE.length){
        if(score > 7){
            $('.winner').html(
                ` <p>GREAT JOB!</p>
                <img src="https://images.esellerpro.com/2486/I/145/4/u_20260840_Half%20Moon%20Bay_Homewares_Coasters_coaster-superman-logo.JPG">
                <div class="restart">
                    <button type="restart">Restart Quiz</button>
                </div>`
            ).show();
        }
    } else {
        $('.loser').html(
            ` <p>Try again!</p>
            <img src="https://images.esellerpro.com/2486/I/145/4/u_20260840_Half%20Moon%20Bay_Homewares_Coasters_coaster-superman-logo.JPG">
            <div class="restart">
                <button type="restart">Restart Quiz</button>
            </div>`
        ).show();
    }
};

function beginQuiz(){
    startScreen();
    renderQuestionAnswerForm();
    handleQuizStart();
    handleUserSelection();
    renderNextQuestion();
    handleEndMessage();
}

$(beginQuiz);