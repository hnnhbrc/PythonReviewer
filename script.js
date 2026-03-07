let originalQuestions = [...questions]
let currentQuestion = 0
let userAnswers = []

function loadQuestion(){

let q = questions[currentQuestion]

document.getElementById("questionNumber").innerHTML =
"Question " + (currentQuestion+1) + " of " + questions.length

document.getElementById("questionText").innerHTML = q.question || ""
document.getElementById("codeBlock").innerText = q.code || ""

if(q.image){
document.getElementById("questionImage").innerHTML =
`<img src="${q.image}" class="question-img">`
}else{
document.getElementById("questionImage").innerHTML=""
}

let html = ""

if(q.type === "multi-dropdown"){

q.subquestions.forEach((sub,i)=>{

html += `<p>${sub.text}</p>`

html += `<select onchange="saveDropdown(${i},this.value)">`
html += `<option value="">Select answer</option>`

sub.choices.forEach(choice=>{
html += `<option value="${choice}">${choice}</option>`
})

html += `</select><br><br>`

})

}

if(q.type === "mcq"){

q.choices.forEach((choice,i)=>{

html += `
<label>
<input type="radio" name="answer" onchange="saveAnswer(${i})">
${choice}
</label><br>
`

})

}

if(q.type === "multi-select"){

q.choices.forEach((choice,i)=>{

html += `
<label>
<input type="checkbox" onchange="saveMulti(${i},this)">
${choice}
</label><br>
`

})

}

if(q.type === "truefalse-group"){

q.subquestions.forEach((sub,i)=>{

html += `<p>${sub.text}</p>`

html += `
<label><input type="radio" name="tf${i}" value="True" onchange="saveTF(${i},'True')"> True</label>
<label><input type="radio" name="tf${i}" value="False" onchange="saveTF(${i},'False')"> False</label>
<br><br>
`

})

}

document.getElementById("answers").innerHTML = html

updateProgress()

}

function saveAnswer(ans){
userAnswers[currentQuestion] = ans
}

function saveDropdown(index,value){

if(!userAnswers[currentQuestion])
userAnswers[currentQuestion] = {}

userAnswers[currentQuestion][index] = value

}

function saveMulti(index,box){

if(!userAnswers[currentQuestion])
userAnswers[currentQuestion] = []

if(box.checked)
userAnswers[currentQuestion].push(index)
else
userAnswers[currentQuestion] =
userAnswers[currentQuestion].filter(v=>v!=index)

}

function saveTF(index,value){

if(!userAnswers[currentQuestion])
userAnswers[currentQuestion] = {}

userAnswers[currentQuestion][index] = value

}

/* CHECK ANSWERS */

function checkAnswer(){

let q = questions[currentQuestion]
let container = document.getElementById("answers")

container.querySelectorAll(".correct,.wrong").forEach(el=>{
el.classList.remove("correct","wrong")
})

if(q.type === "multi-dropdown"){

let selects = container.querySelectorAll("select")

selects.forEach((sel,i)=>{

if(sel.value === q.subquestions[i].answer)
sel.classList.add("correct")
else
sel.classList.add("wrong")

})

}

if(q.type === "mcq"){

let radios = container.querySelectorAll("input[type=radio]")

radios.forEach((r,i)=>{

let label = r.parentElement

if(i === q.answer)
label.classList.add("correct")

if(r.checked && i !== q.answer)
label.classList.add("wrong")

})

}

if(q.type === "multi-select"){

let checks = container.querySelectorAll("input[type=checkbox]")

checks.forEach((c,i)=>{

let label = c.parentElement

if(q.answers.includes(i))
label.classList.add("correct")

if(c.checked && !q.answers.includes(i))
label.classList.add("wrong")

})

}

if(q.type === "truefalse-group"){

q.subquestions.forEach((sub,i)=>{

let radios = container.querySelectorAll(`input[name="tf${i}"]`)

radios.forEach(r=>{

let label = r.parentElement

if(r.value === sub.answer)
label.classList.add("correct")

if(r.checked && r.value !== sub.answer)
label.classList.add("wrong")

})

})

}

}

/* TRY AGAIN */

function resetQuestion(){

let container = document.getElementById("answers")

container.querySelectorAll(".correct,.wrong").forEach(el=>{
el.classList.remove("correct","wrong")
})

container.querySelectorAll("select").forEach(sel=>{
sel.selectedIndex = 0
})

container.querySelectorAll("input[type=radio]").forEach(r=>{
r.checked = false
})

container.querySelectorAll("input[type=checkbox]").forEach(c=>{
c.checked = false
})

userAnswers[currentQuestion] = null

}

/* NAVIGATION */

document.getElementById("nextBtn").onclick = () => {

if(currentQuestion < questions.length-1){
currentQuestion++
loadQuestion()
}

}

document.getElementById("prevBtn").onclick = () => {

if(currentQuestion > 0){
currentQuestion--
loadQuestion()
}

}

/* PROGRESS */

function updateProgress(){

let percent = ((currentQuestion+1)/questions.length)*100
document.getElementById("progressFill").style.width = percent + "%"

}

/* SHUFFLE */

function shuffleQuestions(){

questions.sort(()=>Math.random()-0.5)

currentQuestion = 0
loadQuestion()

}

function resetOrder(){

questions = [...originalQuestions]

currentQuestion = 0
loadQuestion()

}

/* DARK MODE */

const darkBtn = document.getElementById("darkToggle")

darkBtn.addEventListener("click", function(){

document.body.classList.toggle("dark-mode")

if(document.body.classList.contains("dark-mode"))
darkBtn.textContent = "Light Mode"
else
darkBtn.textContent = "Dark Mode"

})

loadQuestion()