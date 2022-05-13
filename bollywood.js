const questions = [
    {
        question: "Which is the super hit movie among following?",
        optionA: "KGF 2",
        optionB: "Runway 32",
        optionC: "Heropanti 2",
        optionD: "Jersey",
        correctOption: "optionA"
    },

    {
        question: "Movie in which kajol and shahrukh worked together as  a lead roll? ",
        optionA: "Kuch kuch hota hey ",
        optionB: "Dangal",
        optionC: "Kal ho naa ho ",
        optionD: "Raees",
        correctOption: "optionA"
    },

    {
        question: "What is the real name of Akshay Kumar?",
        optionA: "Rakesh Bhatt",
        optionB: "Inderjeet Singh",
        optionC: "Rajendra Kumar",
        optionD: "Rajiv Hari Om Bhatia",
        correctOption: "optionD"
    },

    {
        question: "Which of these films was Aishwarya Rai Bachchan’s first Bollywood debut?",
        optionA: "Aa ab Laut Chale",
        optionB: "Hum kisise kum nahin",
        optionC: "Aur Pyaar Ho Gaya",
        optionD: "Taal",
        correctOption: "optionC"
    },

    {
        question: "Which Bollywood movie had the maximum number of British actors ever?",
        optionA: "Namastey London",
        optionB: "My name is Khan",
        optionC: "Mangal pandey",
        optionD: "Lagaan",
        correctOption: "optionD"
    },

    {
        question: "Which film draws inspiration from the life and struggles of Helen Keller?",
        optionA: "Baabul",
        optionB: "Blackr",
        optionC: "Who Killed Jessica",
        optionD: "Laga Chunri Mein Daag",
        correctOption: "optionB"
    },

    {
        question: "The movie 'Dangal' is based on the real-life story of which wrestler?",
        optionA: "Mahavir Singh Phogat",
        optionB: "Aamir Khan",
        optionC: "Dara Singh ",
        optionD: "Geeta Kumari Phogat",
        correctOption: "optionA"
    },

    {
        question: "As of 2020, which is the only Bollywood movie to win 13 Filmfare Awards?",
        optionA: "Uri: The Surgical Strike",
        optionB: "Article 15",
        optionC: "Saand Ki Aankh",
        optionD: "Gully Boy",
        correctOption: "optionD"
    },

    {
        question: "Who was called as nightingale of india",
        optionA: "Lata Mangeshkar",
        optionB: "Sarojini Naidu",
        optionC: "Asha Bhosale",
        optionD: "Shreya Ghoshal.",
        correctOption: "optionB"
    },
    
    {
        question: "Who was the lead singer of the song 'Dil to pagal hai, dil dewana'",
        optionA: "Sonu Nigam",
        optionB: "Kishor Kumar",
        optionC: "Anand Bakshi",
        optionD: "Kumar sanu",
        correctOption: "optionC"
    },


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