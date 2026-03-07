let currentQuestion = 0
let userAnswers = {}

function loadQuestion(){

let q = questions[currentQuestion]

let container = document.getElementById("questionContainer")

let html = `
<h2>Question ${currentQuestion+1} of ${questions.length}</h2>
<p>${q.question}</p>
`

if(q.image){
html += `<img src="${q.image}" style="max-width:100%;margin:15px 0">`
}

if(q.code){
html += `<div class="codeBlock">${q.code}</div>`
}

if(q.type === "mcq"){

q.choices.forEach((choice,i)=>{

html += `
<label class="choice">
<input type="radio" name="answer" value="${i}">
${choice}
</label>
`

})

}

if(q.type === "dropdown"){

q.subquestions.forEach((sq,i)=>{

html += `
<p>${sq.text}</p>

<select id="dropdown${i}">
<option value="">Select answer</option>
${sq.choices.map(c=>`<option value="${c}">${c}</option>`).join("")}
</select>
`

})

}

container.innerHTML = html

updateProgress()

}

function updateProgress(){

let percent = ((currentQuestion+1)/questions.length)*100

document.getElementById("progressBar").style.width = percent + "%"

}

function nextQuestion(){

if(currentQuestion < questions.length-1){
currentQuestion++
loadQuestion()
}

}

function previousQuestion(){

if(currentQuestion > 0){
currentQuestion--
loadQuestion()
}

}

function checkAnswer(){

let q = questions[currentQuestion]

if(q.type === "mcq"){

let selected = document.querySelector("input[name='answer']:checked")

if(!selected)return

let correct = q.answer

document.querySelectorAll(".choice").forEach((c,i)=>{

if(i === correct){
c.classList.add("correct")
}
else if(i === parseInt(selected.value)){
c.classList.add("wrong")
}

})

}

if(q.type === "dropdown"){

q.subquestions.forEach((sq,i)=>{

let select = document.getElementById(`dropdown${i}`)

if(select.value === sq.answer){

select.style.border = "2px solid green"

}else{

select.style.border = "2px solid red"

}

})

}

}

function resetQuestion(){

loadQuestion()

}

function toggleDarkMode(){

document.body.classList.toggle("dark")

}

let originalQuestions = []

function shuffleQuestions(){

originalQuestions = [...questions]

questions.sort(()=>Math.random()-0.5)

currentQuestion = 0

loadQuestion()

}

function restoreOrder(){

questions = [...originalQuestions]

currentQuestion = 0

loadQuestion()

}

loadQuestion()