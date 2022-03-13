
const startButton = document.getElementById('start-btn')
const nextButtton = document.getElementById('next-btn')


const questionContainerElement = document.getElementById('question-container')
const  questionElement = document.getElementById('question')
const answerButtonElent = document.getElementById('answer-buttons')


let shuffledQuestions, currectQuestionIndex;
let quizScore = 0;

startButton.addEventListener('click', starGame)
nextButtton.addEventListener('click', ()=>{
    currectQuestionIndex++
    setnextQuestion()
})


function starGame(){
    startButton.classList.add('hide')
    shuffledQuestions=question.sort(()=>Math.random()-0.5)
    currectQuestionIndex=0;
    questionContainerElement.classList.remove('hide')
    setnextQuestion()
    quizScore=0
}


function setnextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currectQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText=question.question;
    question.answer.forEach((answer)=>{
        const button = document.createElement('button')
        button.innerText=answer.text;
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonElent.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButtton.classList.add('hide')
    while(answerButtonElent.firstChild){
        answerButtonElent .removeChild(answerButtonElent.firstChild)
    }
}


function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct

    setStatusClass(document.body,correct)
    Array.from(answerButtonElent.children).forEach((button)=>{
        setStatusClass(button,button.dataset.correct)
    });
    if(shuffledQuestions.length>currectQuestionIndex+1){
        nextButtton.classList.remove("hide")
    }else{
        startButton.innerText ="restart"
        startButton.classList.remove("hide")
    }
    if(selectedButton.dataset =correct){
        quizScore++
    }
    document.getElementById('right-answers').innerHTML=quizScore
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    }else{
        element.classList.add("wrong") 
    }
       
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const question =[
    {
        question:'javaScript framework?',
        answer:[
            {text:'Python',correct:false},
            {text:'Django',correct:false},
            {text:'React',correct:true},
            {text:'Eclipse',correct:false},
        ],
    },
    {
        question:'who is the primer minister of India?',
        answers:[
            {text:'narendra Modi',correct:true},
            {text:'Rahul Gandhi',correct:false},
        ],
    },
    {
        question:'what is 4*37',
        answers:[
            {text:'6',correct:false},
            {text:'12',correct:true},
        ],
    },

]