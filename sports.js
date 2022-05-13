const questions = [
    {
        question: "What is the motto of Olympics?",
        optionA: "Equality, Liberty, Fraternity",
        optionB: "Meek, Humble, Gentle",
        optionC: "Faster, Stronger, Higher",
        optionD: "Purity, Duty, Chastity",
        correctOption: "optionC"
    },

    {
        question: "How many players are allowed on a soccer pitch ?",
        optionA: "10 players",
        optionB: "11 players",
        optionC: "9 players",
        optionD: "12 players",
        correctOption: "optionB"
    },

    {
        question: "What are the colours of Olympic rings?",
        optionA: "Violet, indigo, orange, purple and scarlet",
        optionB: "Blue, yellow, black, green, and red",
        optionC: "Sky blue and navy blue",
        optionD: "Gold, white and crimson",
        correctOption: "optionB"
    },

    {
        question: "On what basis were the colours of Olympic rings chosen?",
        optionA: "Primary colours",
        optionB: "Secondary colours",
        optionC: "Colours of  sponsors",
        optionD: "those that appears in the national flag of every country.",
        correctOption: "optionD"
    },

    {
        question: "Which sport is not the part of Olympics?",
        optionA: "Cricket",
        optionB: "Football",
        optionC: "Archery",
        optionD: "Gymnastic",
        correctOption: "optionA"
    },

    {
        question: "How many penalties are usually taken in a penalty shoot-out?",
        optionA: "1",
        optionB: "5",
        optionC: "3",
        optionD: "12",
        correctOption: "optionB"
    },

    {
        question: "What color cards do the referees carry in a football match?",
        optionA: "Red and yellow",
        optionB: "Black and White",
        optionC: "Red and Green",
        optionD: "Yellow and Orange",
        correctOption: "optionA"
    },

    {
        question: "FC Copenhagen plays football in which country?",
        optionA: "Belgium",
        optionB: "Sweden",
        optionC: "Denmark",
        optionD: "France",
        correctOption: "optionC"
    },

    {
        question: "How long did the longest cricket match in history go on for?",
        optionA: "Ten Days",
        optionB: "Twelve Days",
        optionC: "Eight Days",
        optionD: "Twenty Days",
        correctOption: "optionB"
    },

      {
        question: "In Cricket what does LBW stand for? ",
        optionA: "Leg By Wicket",
        optionB: "Leg Behind Wicket",
        optionC: "Leg Before Wicket",
        optionD: "Leg Below Wicket",
        correctOption: "optionC"
    },

    {
        question: "Who has played most consecutive international matches",
        optionA: "Sachin tendulkar",
        optionB: "Inzamam ul haq",
        optionC: "Wasim akram",
        optionD: "Kapil dev",
        correctOption: "optionA"
    },


    {
        question: "What is the frequency of Olympics?",
        optionA: "Once in 4 years",
        optionB: "Once in 3 years",
        optionC: "Once in 6 years",
        optionD: "Once in 8 years",
        correctOption: "optionA"
    },

    {
        question: "Which national team won the football World cup in 2018 ?",
        optionA: "England",
        optionB: "Brazil",
        optionC: "Germany",
        optionD: "France",
        correctOption: "optionD"
    },

    {
        question: "2019 Cricket world cup will be held in ______?",
        optionA: "India",
        optionB: "England",
        optionC: "Srilanka",
        optionD: "South Africa",
        correctOption: "optionB"
    },

    {
        question: "Who holds the record of taking most wickets in a single test game by a Pakistani Bowler?",
        optionA: "Imran khan",
        optionB: "Yasir shah",
        optionC: "Muhammad Abbas",
        optionD: "Imran khan and Yasir shah",
        correctOption: "optionD"
    },

    {
        question: "How many players in the ground in cricket at 1 time",
        optionA: "11",
        optionB: "10",
        optionC: "13",
        optionD: "12",
        correctOption: "optionC"
    },

    {
        question: "Which player has won the most number of IPL orange caps, which are awarded to the season’s highest run-scorer?",
        optionA: "Shane Watson",
        optionB: "Chris Gayle",
        optionC: "David Warner",
        optionD: "Sachin Tendulkar",
        correctOption: "optionC"
    },

    {
        question: "Which team won the IPL in 2017?",
        optionA: "Chennai Super Kings",
        optionB: "Royal Challengers Bangalore",
        optionC: "Mumbai Indians",
        optionD: "Rajasthan Royals",
        correctOption: "optionC"
    },

    {
        question: "Which Bowler has taken most number of wickets?",
        optionA: "Lasith Malinga",
        optionB: "Harbhajan Singh",
        optionC: "Zaheer Khan",
        optionD: "Ravichandran Ashwin",
        correctOption: "optionA"
    },

    {
        question: "In which Indian state did kabaddi originate?",
        optionA: "Kerala",
        optionB: "Haryana",
        optionC: "Tamil Nadu",
        optionD: "Punjab",
        correctOption: "optionC"
    },

      {
        question: "Kabaddi is National Sport of which Country",
        optionA: "India",
        optionB: "Bangladesh",
        optionC: "France",
        optionD: "Iran",
        correctOption: "optionB"
    },

    {
        question: "Who was the Top Raider of 2016 Kabaddi World cup",
        optionA: "Anup Kumar",
        optionB: "Shaber Bapu",
        optionC: "Ajay Thakur",
        optionD: "Pardeep Narwal",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}