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

if(q.type === "docstring"){

q.answers.forEach((ans,i)=>{

html += `
<p>Answer ${i+1}</p>
<input type="text" onchange="saveDoc(${i},this.value)">
<br><br>
`

})

}

if(q.type === "matching"){

q.pairs.forEach((pair,i)=>{

html += `<p>${pair.left}</p>`

html += `<select onchange="saveMatch(${i},this.value)">`

html += `<option value="">Select answer</option>`

q.pairs.forEach(p=>{
html += `<option value="${p.right}">${p.right}</option>`
})

html += `</select><br><br>`

})

}

if(q.type === "code-display"){
html += `<p><i>No answer required. Review the code above.</i></p>`
}

document.getElementById("answers").innerHTML = html

updateProgress()

}

function saveAnswer(ans){ userAnswers[currentQuestion] = ans }

function saveDropdown(i,v){
if(!userAnswers[currentQuestion]) userAnswers[currentQuestion]={}
userAnswers[currentQuestion][i]=v
}

function saveMulti(i,box){
if(!userAnswers[currentQuestion]) userAnswers[currentQuestion]=[]
if(box.checked) userAnswers[currentQuestion].push(i)
else userAnswers[currentQuestion]=userAnswers[currentQuestion].filter(v=>v!=i)
}

function saveTF(i,v){
if(!userAnswers[currentQuestion]) userAnswers[currentQuestion]={}
userAnswers[currentQuestion][i]=v
}

function saveDoc(i,v){
if(!userAnswers[currentQuestion]) userAnswers[currentQuestion]={}
userAnswers[currentQuestion][i]=v
}

function saveMatch(i,v){
if(!userAnswers[currentQuestion]) userAnswers[currentQuestion]={}
userAnswers[currentQuestion][i]=v
}

function checkAnswer(){

let q = questions[currentQuestion]
let container = document.getElementById("answers")

container.querySelectorAll(".correct,.wrong")
.forEach(el=>el.classList.remove("correct","wrong"))

if(q.type==="multi-dropdown"){

let selects=container.querySelectorAll("select")

selects.forEach((sel,i)=>{
if(sel.value===q.subquestions[i].answer)
sel.classList.add("correct")
else
sel.classList.add("wrong")
})

}

if(q.type==="mcq"){

let radios=container.querySelectorAll("input[type=radio]")

radios.forEach((r,i)=>{

let label=r.parentElement

if(i===q.answer) label.classList.add("correct")

if(r.checked && i!==q.answer)
label.classList.add("wrong")

})

}

if(q.type==="multi-select"){

let checks=container.querySelectorAll("input[type=checkbox]")

checks.forEach((c,i)=>{

let label=c.parentElement

if(q.answers.includes(i)) label.classList.add("correct")

if(c.checked && !q.answers.includes(i))
label.classList.add("wrong")

})

}

if(q.type==="truefalse-group"){

q.subquestions.forEach((sub,i)=>{

let radios=container.querySelectorAll(`input[name="tf${i}"]`)

radios.forEach(r=>{

let label=r.parentElement

if(r.value===sub.answer) label.classList.add("correct")

if(r.checked && r.value!==sub.answer)
label.classList.add("wrong")

})

})

}

}

function resetQuestion(){

let container=document.getElementById("answers")

container.querySelectorAll(".correct,.wrong")
.forEach(el=>el.classList.remove("correct","wrong"))

container.querySelectorAll("select").forEach(sel=>sel.selectedIndex=0)

container.querySelectorAll("input[type=radio]")
.forEach(r=>r.checked=false)

container.querySelectorAll("input[type=checkbox]")
.forEach(c=>c.checked=false)

userAnswers[currentQuestion]=null

}

document.getElementById("nextBtn").onclick=()=>{
if(currentQuestion<questions.length-1){
currentQuestion++
loadQuestion()
}
}

document.getElementById("prevBtn").onclick=()=>{
if(currentQuestion>0){
currentQuestion--
loadQuestion()
}
}

function updateProgress(){

let percent=((currentQuestion+1)/questions.length)*100
document.getElementById("progressFill").style.width=percent+"%"

}

function shuffleQuestions(){

questions.sort(()=>Math.random()-0.5)
currentQuestion=0
loadQuestion()

}

function resetOrder(){

questions=[...originalQuestions]
currentQuestion=0
loadQuestion()

}

const darkBtn=document.getElementById("darkToggle")

darkBtn.onclick=()=>{
document.body.classList.toggle("dark-mode")

darkBtn.textContent=
document.body.classList.contains("dark-mode")
? "Light Mode"
: "Dark Mode"
}

loadQuestion()