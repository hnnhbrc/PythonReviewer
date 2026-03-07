let currentQuestion = 0
let originalQuestions = []

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

/* MULTI DROPDOWN */

if(q.type === "multi-dropdown" || q.type === "truefalse-group"){

q.subquestions.forEach((sq,i)=>{

html += `
<div style="margin-top:20px">
<p>${sq.text}</p>

<select id="dropdown${i}">
<option value="">Select answer</option>
${sq.choices.map(c=>`<option value="${c}">${c}</option>`).join("")}
</select>

</div>
`

})

}

/* MCQ */

else if(q.type === "mcq"){

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

else if(q.type === "multi-select"){

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

else if(q.type === "matching"){

q.pairs.forEach((p,i)=>{

html += `
<div style="margin-top:15px">

<p>${p.left}</p>

<select id="match${i}">
<option value="">Select answer</option>

${q.pairs.map(x=>`<option value="${x.right}">${x.right}</option>`).join("")}

</select>

</div>
`

})

}

/* DOCSTRING */

else if(q.type === "docstring"){

q.answers.forEach((a,i)=>{

html += `
<div style="margin-top:20px">

<p>Answer ${i+1}</p>

<input type="text" id="doc${i}" placeholder="Enter answer">

</div>
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

/* CHECK ANSWERS */

function checkAnswer(){

let q = questions[currentQuestion]

/* DROPDOWN */

if(q.type === "multi-dropdown" || q.type === "truefalse-group"){

q.subquestions.forEach((sq,i)=>{

let select=document.getElementById(`dropdown${i}`)

if(select.value===sq.answer){
select.style.border="2px solid green"
}else{
select.style.border="2px solid red"
}

})

}

/* MCQ */

if(q.type==="mcq"){

let selected=document.querySelector("input[name='answer']:checked")

if(!selected)return

let correct=q.answer

document.querySelectorAll(".choice").forEach((c,i)=>{

if(i===correct){
c.classList.add("correct")
}

else if(i===parseInt(selected.value)){
c.classList.add("wrong")
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

function shuffleQuestions(){

originalQuestions=[...questions]
questions.sort(()=>Math.random()-0.5)

currentQuestion=0
loadQuestion()

}

function restoreOrder(){

questions=[...originalQuestions]
currentQuestion=0

loadQuestion()

}

loadQuestion()