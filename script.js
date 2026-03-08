let currentQuestion = 0

/* BUILD NAVIGATION */

function buildNavigation(){

let nav = document.getElementById("questionNav")

questions.forEach((q,i)=>{

let btn = document.createElement("button")

btn.innerText = i+1

btn.onclick = ()=>{
currentQuestion = i
loadQuestion()
}

nav.appendChild(btn)

})

}

/* LOAD QUESTION */

function loadQuestion(){

let q = questions[currentQuestion]

let container = document.getElementById("questionContainer")

let html = `
<h2>Question ${currentQuestion+1} of ${questions.length}</h2>
<p>${q.question}</p>
`

if(q.description){
html += `<div class="description">${q.description}</div>`
}

if(q.image){
html += `<img src="${q.image}" style="max-width:100%;margin:15px 0">`
}

if(q.code){
html += `<div class="codeBlock">${q.code}</div>`
}

/* MULTI DROPDOWN / TRUE FALSE */

if(q.subquestions){

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

/* MCQ */

if(q.type==="mcq"){

q.choices.forEach((choice,i)=>{

html += `
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

html += `
<label class="choice">
<input type="checkbox" name="answer" value="${i}">
${choice}
</label>
`

})

}

/* MATCHING */

if(q.type==="matching"){

q.pairs.forEach((p,i)=>{

html += `
<p>${p.left}</p>

<select id="match${i}">
<option value="">Select answer</option>
${q.pairs.map(x=>`<option value="${x.right}">${x.right}</option>`).join("")}
</select>
`

})

}

/* DOCSTRING */

if(q.type==="docstring"){

q.answers.forEach((a,i)=>{

html += `
<p>Answer ${i+1}</p>
<input type="text" id="doc${i}">
`

})

}

container.innerHTML = html

updateProgress()
highlightCurrent()

}

/* CHECK ANSWER */

function checkAnswer(){

let q = questions[currentQuestion]

let navButtons = document.querySelectorAll("#questionNav button")

let correct = true

/* DROPDOWN */

if(q.subquestions){

q.subquestions.forEach((sq,i)=>{

let select = document.getElementById(`dropdown${i}`)

if(select){

if(select.value === sq.answer){

select.style.border="2px solid green"

}else{

select.style.border="2px solid red"
correct = false

}

}

})

}

/* MCQ */

if(q.type==="mcq"){

let selected=document.querySelector("input[name='answer']:checked")

if(!selected)return

let answer=parseInt(selected.value)

document.querySelectorAll(".choice").forEach((c,i)=>{

if(i===q.answer){
c.classList.add("correct")
}
else if(i===answer){
c.classList.add("wrong")
correct=false
}

})

}

/* MULTI SELECT */

if(q.type==="multi-select"){

let selected=[...document.querySelectorAll("input[name='answer']:checked")].map(x=>parseInt(x.value))

document.querySelectorAll(".choice").forEach((c,i)=>{

if(q.answers.includes(i)){
c.classList.add("correct")
}

if(selected.includes(i) && !q.answers.includes(i)){
c.classList.add("wrong")
correct=false
}

})

}

/* MATCHING */

if(q.type==="matching"){

q.pairs.forEach((p,i)=>{

let select=document.getElementById(`match${i}`)

if(select.value===p.right){
select.style.border="2px solid green"
}else{
select.style.border="2px solid red"
correct=false
}

})

}

/* DOCSTRING */

if(q.type==="docstring"){

q.answers.forEach((a,i)=>{

let input=document.getElementById(`doc${i}`)

if(input.value.trim()===a){
input.style.border="2px solid green"
}else{
input.style.border="2px solid red"
correct=false
}

})

}

/* NAV COLOR */

if(correct){
navButtons[currentQuestion].style.background="green"
navButtons[currentQuestion].style.color="white"
}else{
navButtons[currentQuestion].style.background="red"
navButtons[currentQuestion].style.color="white"
}

}

/* RESET */

function resetQuestion(){
loadQuestion()
}

/* NAVIGATION */

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

/* PROGRESS */

function updateProgress(){

let percent=((currentQuestion+1)/questions.length)*100

document.getElementById("progressBar").style.width=percent+"%"

}

/* HIGHLIGHT CURRENT */

function highlightCurrent(){

let buttons=document.querySelectorAll("#questionNav button")

buttons.forEach(b=>b.classList.remove("active"))

buttons[currentQuestion].classList.add("active")

}

/* DARK MODE */

function toggleDarkMode(){
document.body.classList.toggle("dark")
}

/* START */

buildNavigation()
loadQuestion()