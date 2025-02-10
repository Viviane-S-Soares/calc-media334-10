const btnInit = document.getElementById("start") 
const btnNext = document.getElementById("next")
const btnBack = document.getElementById("back")
const btns = document.querySelector(".btns")
const btnResult = document.getElementById("calc-result")
const question = document.querySelectorAll(".question")
const inputs = document.getElementsByTagName("input")
const btnsFinal = document.querySelector(".opt-final")
const btnNew = document.getElementById("novo-aluno")
const resultados = document.querySelector(".resultados")

let indexQuestion = 0;
let inputAtual =  inputs[indexQuestion];

console.log("Aviso, esse site para calcular notas utiliza o método de calculo do ensino médio, ou seja, 1º trimestre vezes 3 + 2º trimestre vezes 3 + 3º trimestre vezes 4, depois divide a soma por total de tudo por 10 para obter a média.")

function initQuestions() {
    btnInit.style.display = 'none';
    question[indexQuestion = 0].style.display = 'block';
    btns.style.display = 'flex';
}

function nextQuestion() {
     if(indexQuestion === 5){
        btns.style.display = 'none';
        btnResult.style.display = 'flex';
        question[indexQuestion].style.display = 'none';
        }
        else{
        question[indexQuestion].style.display = 'none';
        indexQuestion = (indexQuestion + 1) ;
        question[indexQuestion].style.display = 'block';
        inputAtual = inputs[indexQuestion]
         if(indexQuestion > 0){
        btnBack.style.opacity = '1';
      }
      }   
    }

function backQuestion() {
        question[indexQuestion].style.display = 'none';
        indexQuestion = (indexQuestion - 1) ;
        question[indexQuestion].style.display = 'block';
        if (indexQuestion === 0) {
            btnBack.style.opacity = '0';
        }
}

function result() {
    btnResult.style.display = 'none';

    let nome = document.getElementById('nome').value
    let turma = document.getElementById("turma").value
    let materia = document.getElementById("materia").value
    let nOne = document.getElementById("primeiraNota").value
    let nTwo = document.getElementById("segundaNota").value
    let nThree = document.getElementById("terceiraNota").value

    let media = [(nOne*3) + (nTwo*3) + (nThree*4)]/10;
    let mediaFormatada = media.toFixed(1);

    let situacao = ""
    if(mediaFormatada >= 6){
        situacao = "Aprovado(a)";
        document.body.style.background = 'green';
    }
    else {
        situacao = "Reprovado(a)";
        document.body.style.background = 'red';
    }

    resultados.innerHTML = `${nome} da turma ${turma} está ${situacao} em ${materia} com média de ${mediaFormatada} pontos`;
    resultados.style.backgroundColor = 'white';
    resultados.style.padding = '2em 1em';

    btnsFinal.style.display = 'flex';
}

btnInit.addEventListener("click", initQuestions);
btnNext.addEventListener("click", function () {
    if (inputAtual.value == "") {
        alert("Verifique sua resposta")
    }
    else{
        nextQuestion();
    }
});
btnBack.addEventListener("click", backQuestion);
btnResult.addEventListener("click", result);
btnNew.addEventListener("click", function () {
    location.reload()
})