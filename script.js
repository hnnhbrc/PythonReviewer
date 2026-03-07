let currentQuestion=0
let originalQuestions=[]

/* LOAD QUESTION */

function loadQuestion(){

let q=questions[currentQuestion]

let container=document.getElementById("questionContainer")

let html=`
<h2>Question ${currentQuestion+1} of ${questions.length}</h2>
<p>${q.question}</p>
`

if(q.description){
html+=`<div class="description">${q.description}</div>`
}

if(q.image){
html+=`<img src="${q.image}" style="max-width:100%;margin:15px 0">`
}

if(q.code){
html+=`<div class="codeBlock">${q.code}</div>`
}

/* SUBQUESTIONS (dropdown) */

if(q.subquestions){

q.subquestions.forEach((sq,i)=>{

html+=`
<p>${sq.text}</p>

<select id="dropdown${i}">
<option value="">Select answer</option>
${sq.choices.map(c=>`<option value="${c}">${c}</option>`).join("")}
</select>
`

})

}

/* MCQ */

if(q.type==="mcq"){

q.choices.forEach((choice,i)=>{

html+=`
<label class="choice">
<input type="radio" name="answer" value="${i}">
${choice}
</label>
`

})

}

/* MULTI SELECT */

if(q.type==="multi-select"){

q.choices.forEach((choice,i)=>{

html+=`
<label class="choice">
<input type="checkbox" name="answer" value="${i}">
${choice}
</label>
`

})

}

container.innerHTML=html

updateProgress()
updateNavHighlight()

}

/* NAVIGATION GRID */

function buildNavigation(){

let nav=document.getElementById("questionNav")

questions.forEach((q,i)=>{

let btn=document.createElement("button")

btn.innerText=i+1

btn.onclick=()=>{

currentQuestion=i
loadQuestion()

}

nav.appendChild(btn)

})

}

/* HIGHLIGHT CURRENT QUESTION */

function updateNavHighlight(){

let buttons=document.querySelectorAll("#questionNav button")

buttons.forEach(b=>b.classList.remove("active"))

buttons[currentQuestion].classList.add("active")

}

/* PROGRESS */

function updateProgress(){

let percent=((currentQuestion+1)/questions.length)*100

document.getElementById("progressBar").style.width=percent+"%"

}

/* NEXT / PREVIOUS */

function nextQuestion(){

if(currentQuestion<questions.length-1){
currentQuestion++
loadQuestion()
}

}

function previousQuestion(){

if(currentQuestion>0){
currentQuestion--
loadQuestion()
}

}

/* CHECK ANSWERS */

function checkAnswer(){

let q=questions[currentQuestion]

if(q.subquestions){

q.subquestions.forEach((sq,i)=>{

let select=document.getElementById(`dropdown${i}`)

if(select.value===sq.answer){
select.style.border="2px solid green"
}else{
select.style.border="2px solid red"
}

})

}

}

/* RESET */

function resetQuestion(){
loadQuestion()
}

/* DARK MODE */

function toggleDarkMode(){
document.body.classList.toggle("dark")
}

/* SHUFFLE */

function shuffleQuestions(){

originalQuestions=[...questions]

questions.sort(()=>Math.random()-0.5)

currentQuestion=0

loadQuestion()

}

/* RESTORE */

function restoreOrder(){

questions=[...originalQuestions]

currentQuestion=0

loadQuestion()

}

/* START */

buildNavigation()
loadQuestion()