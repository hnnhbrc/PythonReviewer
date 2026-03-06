let currentQuestion = 0
let userAnswers = {}

const questionEl = document.getElementById("question")
const codeEl = document.getElementById("codeBlock")
const choicesEl = document.getElementById("choices")
const feedbackEl = document.getElementById("feedback")
const progressEl = document.getElementById("progress")
const navGrid = document.getElementById("questionNav")

function loadQuestion() {

const q = questions[currentQuestion]

questionEl.innerText = `Question ${q.id}: ${q.question}`

progressEl.innerText = `Question ${currentQuestion+1} of ${questions.length}`

codeEl.innerText = q.code ? q.code : ""

choicesEl.innerHTML = ""
feedbackEl.innerHTML = ""

if(q.type === "mcq"){

q.choices.forEach((choice,i)=>{

const btn = document.createElement("button")
btn.className="choiceBtn"
btn.innerText = choice

btn.onclick = ()=>{
userAnswers[q.id]=i
checkAnswer()
}

choicesEl.appendChild(btn)

})

}

else if(q.type === "multi-select"){

q.choices.forEach((choice,i)=>{

const label = document.createElement("label")
const box = document.createElement("input")

box.type="checkbox"

box.onchange=()=>{
if(!userAnswers[q.id]) userAnswers[q.id]=[]
if(box.checked) userAnswers[q.id].push(i)
else userAnswers[q.id]=userAnswers[q.id].filter(x=>x!==i)
}

label.appendChild(box)
label.append(choice)

choicesEl.appendChild(label)

})

}

else if(q.type==="truefalse-group" || q.type==="multi-dropdown"){

q.subquestions.forEach((sq,index)=>{

const div=document.createElement("div")
div.className="subq"

const label=document.createElement("p")
label.innerText=sq.text

const select=document.createElement("select")

sq.choices.forEach(c=>{
const opt=document.createElement("option")
opt.value=c
opt.innerText=c
select.appendChild(opt)
})

select.onchange=(e)=>{
if(!userAnswers[q.id]) userAnswers[q.id]={}
userAnswers[q.id][index]=e.target.value
checkAnswer()
}

div.appendChild(label)
div.appendChild(select)

choicesEl.appendChild(div)

})

}

updateNav()

}

function checkAnswer(){

const q = questions[currentQuestion]

if(q.type==="mcq"){

if(userAnswers[q.id]===q.answer){
feedbackEl.innerHTML="<span class='correct'>Correct</span>"
}else{
feedbackEl.innerHTML="<span class='wrong'>Incorrect</span>"
}

}

else if(q.type==="multi-select"){

let selected=userAnswers[q.id]||[]

let correct=q.answers

let same = selected.length===correct.length && selected.every(v=>correct.includes(v))

feedbackEl.innerHTML = same ?
"<span class='correct'>Correct</span>" :
"<span class='wrong'>Incorrect</span>"

}

else if(q.type==="truefalse-group" || q.type==="multi-dropdown"){

let answers=userAnswers[q.id]

if(!answers) return

let correct=true

q.subquestions.forEach((sq,i)=>{
if(answers[i]!==sq.answer) correct=false
})

feedbackEl.innerHTML = correct ?
"<span class='correct'>Correct</span>" :
"<span class='wrong'>Incorrect</span>"

}

updateNav()

}

function nextQuestion(){

if(currentQuestion < questions.length-1){
currentQuestion++
loadQuestion()
}

}

function prevQuestion(){

if(currentQuestion > 0){
currentQuestion--
loadQuestion()
}

}

function jumpQuestion(i){

currentQuestion=i
loadQuestion()

}

function buildNav(){

navGrid.innerHTML=""

questions.forEach((q,i)=>{

const btn=document.createElement("button")

btn.innerText=i+1

btn.onclick=()=>jumpQuestion(i)

navGrid.appendChild(btn)

})

}

function updateNav(){

const buttons = navGrid.children

for(let i=0;i<buttons.length;i++){

const qid = questions[i].id

if(userAnswers[qid]!==undefined){
buttons[i].style.background="#6be675"
}else{
buttons[i].style.background=""
}

if(i===currentQuestion){
buttons[i].style.border="3px solid #333"
}else{
buttons[i].style.border=""
}

}

}

buildNav()
loadQuestion()