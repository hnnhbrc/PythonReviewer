let originalQuestions = [...questions]
let currentQuestion = 0
let userAnswers = []

function loadQuestion(){

let q = questions[currentQuestion]

document.getElementById("questionNumber").innerHTML =
"Question " + (currentQuestion+1) + " of " + questions.length

document.getElementById("questionText").innerHTML = q.question || ""

document.getElementById("codeBlock").innerText = q.code || ""



/* IMAGE */

if(q.image){

document.getElementById("questionImage").innerHTML =
`<img src="${q.image}" class="question-img">`

}else{

document.getElementById("questionImage").innerHTML=""
}



let html = ""



/* MULTI DROPDOWN */

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



/* MULTIPLE CHOICE */

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



/* MULTI SELECT */

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



/* TRUE FALSE */

if(q.type === "truefalse-group"){

q.subquestions.forEach((sub,i)=>{

html += `<p>${sub.text}</p>`

html += `
<label><input type="radio" name="tf${i}" onchange="saveTF(${i},'True')"> True</label>
<label><input type="radio" name="tf${i}" onchange="saveTF(${i},'False')"> False</label>
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



/* PROGRESS BAR */

function updateProgress(){

let percent = ((currentQuestion+1)/questions.length)*100

document.getElementById("progressFill").style.width = percent + "%"

}



/* OPTIONAL SHUFFLE */

function shuffleQuestions(){

questions.sort(()=>Math.random()-0.5)

currentQuestion = 0

loadQuestion()

}



/* RESET ORDER */

function resetOrder(){

questions = [...originalQuestions]

currentQuestion = 0

loadQuestion()

}



/* DARK MODE */

const darkBtn = document.getElementById("darkToggle")

darkBtn.addEventListener("click", function(){

document.body.classList.toggle("dark-mode")

if(document.body.classList.contains("dark-mode")){
darkBtn.textContent = "Light Mode"
}else{
darkBtn.textContent = "Dark Mode"
}

})



/* START */

loadQuestion()