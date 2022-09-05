let array = [];
contadorcerto = 0;
contadorerrado = 0;
let arrayspan = [];
let contadorspan = 0;
let arrayquestions = [];
let arraylevelstext = [];
let arraylevelsimage = [];
let arraylevelstitle = [];
let arraylevelsvalue = [];



function listarQuizzes(){
    const promessa= axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
    promessa.then(dadosChegaram);
    promessa.catch(quandoErro);
}
function dadosChegaram(response){
    renderizarListaQuizzes(response.data);
    console.log(response.data);
}
function quandoErro(err){
    console.log(err);
}
function renderizarListaQuizzes(quizzes){
    document.querySelector('.todasasquizzes').innerHTML += `<p>Todas as quizzes</p>`
    for(let i = 0; i < quizzes.length; i++){
        document.querySelector('.todasasquizzes').innerHTML += 
        `   
            <div class="listadequizzes" onclick="listarQuizz(this)">
                <p>${quizzes[i].title}</p>
                <img src=${quizzes[i].image} />
                <p class="desaparecer">${quizzes[i].id}</p>
            </div>
        `
    } 
}
// localStorage.setItem("lastname", "Smith");
// // Retrieve
// document.getElementById("demo").innerHTML = localStorage.getItem("lastname");
// localStorage.setItem("id",quizzes[i].id);


listarQuizzes();

// const novoid = localStorage.getItem("id");
function listarQuizz(el){
    let element = el.children[2].innerHTML;
    const promise = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${element}`);
    promise.then(dadoChegou);

}
function dadoChegou(resposta){
    renderizarQuizz(resposta.data);
    console.log(resposta.data);
    arraylevelsvalue.push(resposta.data.levels[0].minValue);
    arraylevelsvalue.push(resposta.data.levels[1].minValue);
    arraylevelstext.push(resposta.data.levels[0].text);
    arraylevelstext.push(resposta.data.levels[1].text);
    arraylevelsimage.push(resposta.data.levels[0].image);
    arraylevelsimage.push(resposta.data.levels[1].image);
    arraylevelstitle.push(resposta.data.levels[0].title);
    arraylevelstitle.push(resposta.data.levels[1].title);
}

function renderizarQuizz(quizz){
    document.querySelector('.titulo').style.display = 'none';
    document.querySelector('.todasasquizzes').style.display = 'none';
    document.querySelector('.titulodoquizz').innerHTML += `
        <img src ="${quizz.image}" />
        <p>${quizz.title}</p>
    `
    for(let j = 0; j < quizz.questions.length; j++){
        document.querySelector('.quizzescolhido').innerHTML += `
            <span class="ok" style="background:${quizz.questions[j].color}">${quizz.questions[j].title}</span>
        `
        
        for(let k = 0; k < quizz.questions[j].answers.length; k++){
            document.querySelector('.quizzescolhido').innerHTML += `
                 <div class="onequizz" onclick="mostrarResposta(this)">
                    <img src="${quizz.questions[j].answers[k].image}" />
                    <p class="sim">${quizz.questions[j].answers[k].text}</p>
                    <p class="desaparecer">${quizz.questions[j].answers[k].isCorrectAnswer}</p>
                </div>
            `
            
            arrayquestions.push(quizz.questions.length);
            console.log(quizz.levels);


        }
    }
    document.querySelector('.quizzfinal').innerHTML += `
    <p class="reiniciarquizz" onclick="reiniciarQuizz(this)">Reiniciar Quizz</p>
    `
    document.querySelector('.quizzfinal').innerHTML += `
     <p class="voltarparahome" onclick="voltarparahome()">Voltar Para home</p>
      
    ` 
    
}
function reiniciarQuizz(){
    
    let yes = document.querySelectorAll('.onequizz .sim');
    for(let a = 0; a < yes.length; a++){
        yes[a].classList.remove('respostacerta');
        yes[a].classList.remove('respostaerrada')};
        document.querySelector('.resultadoquizz').remove();
        document.querySelector('.resultquizz').remove();
        contadorcerto = 0;
        contadorerrado = 0;
       

}
function voltarparahome(){
    console.log('ok');

}



let titulodoquizz = document.querySelector('.infocomeco input:nth-child(1)');
let urlimagemquizz = document.querySelector('.infocomeco input:nth-child(2)');
let perguntasquizz = document.querySelector('.infocomeco input:nth-child(3)');
let quantidadequizz = document.querySelector('.infocomeco input:nth-child(4)');

let textoprimeirapergunta = document.querySelector('.primeirapergunta input:nth-child(2)');
let corprimeirapergunta =  document.querySelector('.primeirapergunta input:nth-child(3)');

let textoprimeiraresposta = document.querySelector('.primeiraresposta input:nth-child(2)');
let urlprimeiraresposta = document.querySelector('.primeiraresposta input:nth-child(3)');

let textoprimeirarespostaincorreta1 = document.querySelector('.primeirarespostaincorreta1 input:nth-child(1)');
let urlprimeirarespostaincorreta1 = document.querySelector('.primeirarespostaincorreta1 input:nth-child(2)');

let textoprimeirarespostaincorreta2 = document.querySelector('.primeirarespostaincorreta2 input:nth-child(1)');
let urlprimeirarespostaincorreta2 = document.querySelector('.primeirarespostaincorreta2 input:nth-child(2)');


let textoprimeirarespostaincorreta3 = document.querySelector('.primeirarespostaincorreta3 input:nth-child(1)');
let urlprimeirarespostaincorreta3 = document.querySelector('.primeirarespostaincorreta3 input:nth-child(2)');





let textosegundapergunta = document.querySelector('.segundapergunta input:nth-child(1)');
let corsegundapergunta = document.querySelector('.segundapergunta input:nth-child(2)');

let textosegundaresposta = document.querySelector('.segundaresposta input:nth-child(2)');
let urlsegundaresposta = document.querySelector('.segundaresposta input:nth-child(3)');

let textosegundarespostaincorreta1 = document.querySelector('.segundarespostaincorreta1 input:nth-child(1)');
let urlsegundarespostaincorreta1 = document.querySelector('.segundarespostaincorreta1 input:nth-child(2)');

let textosegundarespostaincorreta2 = document.querySelector('.segundarespostaincorreta2 input:nth-child(1)');
let urlsegundarespostaincorreta2 = document.querySelector('.segundarespostaincorreta2 input:nth-child(2)');


let textosegundarespostaincorreta3 = document.querySelector('.segundarespostaincorreta3 input:nth-child(1)');
let urlsegundarespostaincorreta3 = document.querySelector('.segundarespostaincorreta3 input:nth-child(2)');






let textoterceirapergunta = document.querySelector('.terceirapergunta input:nth-child(1)');
let corterceirapergunta = document.querySelector('.terceirapergunta input:nth-child(2)');

let textoterceiraresposta = document.querySelector('.terceiraresposta input:nth-child(2)');
let urlterceiraresposta = document.querySelector('.terceiraresposta input:nth-child(3)');

let textoterceirarespostaincorreta1 = document.querySelector('.terceirarespostaincorreta1 input:nth-child(1)');
let urlterceirarespostaincorreta1 = document.querySelector('.terceirarespostaincorreta1 input:nth-child(2)');

let textoterceirarespostaincorreta2 = document.querySelector('.terceirarespostaincorreta2 input:nth-child(1)');
let urlterceirarespostaincorreta2 = document.querySelector('.terceirarespostaincorreta2 input:nth-child(2)');


let textoterceirarespostaincorreta3 = document.querySelector('.terceirarespostaincorreta3 input:nth-child(1)');
let urlterceirarespostaincorreta3 = document.querySelector('.terceirarespostaincorreta3 input:nth-child(2)');



let primeironiveltitulo = document.querySelector('.primeironivel input:nth-child(1)');
let primeironivelcerto = document.querySelector('.primeironivel input:nth-child(2)');
let primeironivelimagem = document.querySelector('.primeironivel input:nth-child(3)');
let primeironiveldescricao =  document.querySelector('.primeironivel input:nth-child(4)');


let segundoniveltitulo = document.querySelector('.segundonivel input:nth-child(1)');
let segundonivelcerto = document.querySelector('.segundonivel input:nth-child(2)');
let segundonivelimagem = document.querySelector('.segundonivel input:nth-child(3)');
let segundoniveldescricao =  document.querySelector('.segundonivel input:nth-child(4)');













function mostrarResposta(res){
    
   
    if(res.children[2].innerHTML === 'true'){
        res.children[1].classList.add('respostacerta');
        contadorcerto++
    } else{
        res.children[1].classList.add('respostaerrada');
        contadorerrado++
    }
  
    if((contadorcerto + contadorerrado) === arrayquestions[0]){
        let result = (contadorcerto/arrayquestions[0]);
        let result1 = result * 100;
        let result2 = Math.round(result1);

        
        if(arraylevelsvalue[0] < arraylevelsvalue[1]){
            if((arraylevelsvalue[0] <= result2)&&(result2 < arraylevelsvalue[1])){
                document.querySelector('.quizzescolhido').innerHTML += `
                <p class="resultadoquizz">${result2}% de acerto:${arraylevelstitle[0]}</p>
                <div class="resultquizz">
                    <img src="${arraylevelsimage[0]}" />
                    <p>${arraylevelstext[0]}</p>
                </div>
                `
            } else if(result2 >= arraylevelsvalue[1]){
                document.querySelector('.quizzescolhido').innerHTML += `
                <p class="resultadoquizz">${result2}% de acerto:${arraylevelstitle[1]}</p>
                <div class="resultquizz">
                    <img src="${arraylevelsimage[1]}"/>
                    <p>${arraylevelstext[1]}</p>
                </div>

                `
            } 
        } else if(arraylevelsvalue[0] > arraylevelsvalue[1]){
            if(result2 >= arraylevelsvalue[0]){
                document.querySelector('.quizzescolhido').innerHTML += `
                <p class="resultadoquizz">${result2}% de acerto:${arraylevelstitle[0]}</p>
                <div class="resultquizz">
                    <img src="${arraylevelsimage[0]}"/>
                    <p>${arraylevelstext[0]}</p>
                </div>

                `
            } else if((arraylevelsvalue[1] <= result2)&&(result2 < arraylevelsvalue[0])){
                document.querySelector('.quizzescolhido').innerHTML += `
                <p class="resultadoquizz">${result2}% de acerto:${arraylevelstitle[1]}</p>
                <div class="resultquizz">
                    <img src="${arraylevelsimage[1]}"/>
                    <p>${arraylevelstext[1]}</p>
                </div>
                `
            }
        }    
    } 
}



function exibircomeco(){
    document.querySelector('.titulo').style.display = 'none';
    document.querySelector('.titulo').style.border = "none";
    document.querySelector('.todasasquizzes').style.display = "none";
    document.querySelector('body').innerHTML += 
    `<div class="comecepelocomeco">
        <p>Comece pelo começo</p>
        <div class="infocomeco">
            <input type="text" placeholder="Titulo do seu quizz"></input>
            <input type="text" placeholder="URL da imagem do seu quizz"></input>
            <input type="text" placeholder="Quantidade de perguntas do seu quizz"></input>
            <input type="text" placeholder="Quantidade de níveis do quizz"></input>
        </div>  
        <div class="prosseguir" onclick="criacaoPerguntas()">Prosseguir para criar perguntas</div>
    </div>`

}
function criacaoPerguntas(){
    document.querySelector('.titulo').style.display = 'none';
    document.querySelector('.comecepelocomeco').style.display = 'none';
    document.querySelector('body').innerHTML += `
        <div class="crieperguntas">
            <p>Crie suas perguntas</p>
            <div class="pergunta1">
                <div class="primeirapergunta">
                    <p>Pergunta 1</p>
                    <input type="text" placeholder="Texto da pergunta"></input>
                    <input type="text" placeholder="Cor de fundo da pergunta"></input>
                </div>
                <div class="primeiraresposta">
                    <p>Resposta Correta</p>
                    <input type="text" placeholder="Resposta Correta"></input>
                    <input type="text" placeholder="URL da imagem"></input>
                </div>
                <div class="respostasincorretas1">
                    <p>Respostas incorretas</p>
                    <div class="primeirarespostaincorreta1">
                        <input type="text" placeholder="Resposta incorreta 1"></input>
                        <input type="text" placeholder="URL da imagem 1"></input>
                    </div>
                    <div class="primeirarespostaincorreta2">
                        <input type="text" placeholder="Resposta incorreta 2"></input>
                        <input type="text" placeholder="URL da imagem 2"></input>
                    </div>
                    <div class="primeirarespostaincorreta3">
                        <input type="text" placeholder="Resposta incorreta 3"></input>
                        <input type="text" placeholder="URL da imagem 3"></input>
                    </div>
                </div>
            </div>
           <div class="pergunta2">
                <div class="opcoespergunta2">
                    <p>Pergunta 2</p>
                    <img src="setinha.jpg" onclick="removerpergunta2(this)">
                </div>
                <div class="novo2 desaparecer">
                    <div class="segundapergunta">
                        <input type="text" placeholder="Texto da pergunta"></input>
                        <input type="text" placeholder="Cor de fundo da pergunta"></input>
                    </div>
                    <div class="segundaresposta">
                        <p>Resposta Correta</p>
                        <input type="text" placeholder="Resposta Correta"></input>
                        <input type="text" placeholder="URL da imagem"></input>
                    </div>
                    <div class="respostasincorretas2">
                        <p>Respostas incorretas</p>
                        <div class="segundarespostaincorreta1">
                            <input type="text" placeholder="Resposta incorreta 1"></input>
                            <input type="text" placeholder="URL da imagem 1"></input>
                        </div>
                        <div class="segundarespostaincorreta2">
                            <input type="text" placeholder="Resposta incorreta 2"></input>
                            <input type="text" placeholder="URL da imagem 2"></input>
                        </div>
                        <div class="segundarespostaincorreta3">
                            <input type="text" placeholder="Resposta incorreta 3"></input>
                            <input type="text" placeholder="URL da imagem 3"></input>
                        </div>
                    </div>
                </div> 
            </div>
            <div class="pergunta3">
                <div class="opcoespergunta2">
                    <p>Pergunta 3</p>
                    <img src="setinha.jpg" onclick="removerpergunta3(this)">
                </div>
                <div class="novo3 desaparecer">
                    <div class="terceirapergunta">
                        <input type="text" placeholder="Texto da pergunta"></input>
                        <input type="text" placeholder="Cor de fundo da pergunta"></input>
                    </div>
                    <div class="terceiraresposta">
                        <p>Resposta Correta</p>
                        <input type="text" placeholder="Resposta Correta"></input>
                        <input type="text" placeholder="URL da imagem"></input>
                    </div>
                    <div class="respostasincorretas3">
                        <p>Respostas incorretas</p>
                        <div class="terceirarespostaincorreta1">
                            <input type="text" placeholder="Resposta incorreta 1"></input>
                            <input type="text" placeholder="URL da imagem 1"></input>
                        </div>
                        <div class="terceirarespostaincorreta2">
                            <input type="text" placeholder="Resposta incorreta 2"></input>
                            <input type="text" placeholder="URL da imagem 2"></input>
                        </div>
                        <div class="terceirarespostaincorreta3">
                            <input type="text" placeholder="Resposta incorreta 3"></input>
                            <input type="text" placeholder="URL da imagem 3"></input>
                        </div>
                    </div>
                </div> 
            </div>
            <div class="prosseguirniveis" onclick="decidirNiveis()">Prosseguir para criar níveis</div>        
        </div>   
    `
}
function decidirNiveis(){
    document.querySelector('.crieperguntas').style.display = 'none';
    document.querySelector('body').innerHTML += `
    <div class="crieniveis">
        <p>Agora decida os niveis</p>
        <div class="nivel1">
            <div class="opcoesnivel1">
                <p>Nivel 1</p>
                <img src="setinha.jpg" onclick="removernivel1(this)" />
            </div>
            <div class="novonivel1 desaparecer">
                <div class="primeironivel">
                    <input type="text" placeholder="Título do nível 1"></input>
                    <input type="text" placeholder="% de acerto mínima"></input>
                    <input type="text" placeholder="URL da imagem do nível"></input>
                    <input type="text" placeholder="Descrição do nível"></input>
                </div>
            </div>
        </div>
        <div class="nivel2">
            <div class="opcoesnivel2">
                <p>Nivel 2</p>
            <img src="setinha.jpg" onclick="removernivel2(this)" />
            </div>
            <div class="novonivel2 desaparecer">
                <div class="segundonivel">
                    <input type="text" placeholder="Título do nível 2"></input>
                    <input type="text" placeholder="% de acerto mínima"></input>
                    <input type="text" placeholder="URL da imagem do nível"></input>
                    <input type="text" placeholder="Descrição do nível"></input>
                </div>
            </div>
        </div>
        <div class="nivel3">
            <div class="opcoesnivel3">
                <p>Nivel 3</p>
                <img src="setinha.jpg" onclick="removernivel3(this)" />
            </div>
            <div class="novonivel3 desaparecer">
                <div class="terceironivel">
                    <input type="text" placeholder="Título do nível 2"></input>
                    <input type="text" placeholder="% de acerto mínima"></input>
                    <input type="text" placeholder="URL da imagem do nível"></input>
                    <input type="text" placeholder="Descrição do nível"></input>
                </div>
            </div>
        </div>
        <div class="finalizarquizz" onclick="enviarDados()">Finalizar Quizz</div>
    </div>
    
      

    
    
    `
}
function removerpergunta2(){
    let display2 = document.querySelector('.novo2').classList.contains('desaparecer');
    if(display2 === true){
        document.querySelector('.novo2').classList.remove('desaparecer');
    } else{
        document.querySelector('.novo2').classList.add('desaparecer');

    }
    
}
function removerpergunta3(){
    let display3 = document.querySelector('.novo3').classList.contains('desaparecer');
    if(display3 === true){
        document.querySelector('.novo3').classList.remove('desaparecer');
    } else{
        document.querySelector('.novo3').classList.add('desaparecer');

    }
    
}
function removernivel1(){
    let displaynivel1 = document.querySelector('.novonivel1').classList.contains('desaparecer');
    if(displaynivel1 === true){
        document.querySelector('.novonivel1').classList.remove('desaparecer');
    } else{
        document.querySelector('.novonivel1').classList.add('desaparecer');

    }
}
function removernivel2(){
    let displaynivel2 = document.querySelector('.novonivel2').classList.contains('desaparecer');
    if(displaynivel2 === true){
        document.querySelector('.novonivel2').classList.remove('desaparecer');
    } else{
        document.querySelector('.novonivel2').classList.add('desaparecer');

    }
}
function removernivel3(){
    let displaynivel3 = document.querySelector('.novonivel3').classList.contains('desaparecer');
    if(displaynivel3 === true){
        document.querySelector('.novonivel3').classList.remove('desaparecer');
    } else{
        document.querySelector('.novonivel3').classList.add('desaparecer');

    }
}




function enviarDados(){
    const promessa1 = axios.post("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes",{
        title: titulodoquizz.value,
        image: urlimagemquizz.value,
        questions: [
            {
                title: textoprimeirapergunta.value,
                color: corprimeirapergunta.value,
                answers: [
                    {
                        text: textoprimeiraresposta.value,
                        image: urlprimeiraresposta.value,
                        isCorrectAnswer: true
                    },
                    {
                        text: textoprimeirarespostaincorreta1.value,
                        image: urlprimeirarespostaincorreta1.value,
                        isCorrectAnswer: false
                    }
                ]
            },
            {
                title: textosegundapergunta.value,
                color: corsegundapergunta.value,
                answers: [
                    {
                        text: textosegundaresposta.value,
                        image: urlsegundaresposta.value,
                        isCorrectAnswer: true
                    },
                    {
                        text: textosegundarespostaincorreta1.value,
                        image: urlsegundarespostaincorreta1.value,
                        isCorrectAnswer: false
                    }
                ]
            },
            {
                title: textoterceirapergunta.value,
                color: corterceirapergunta,
                answers: [
                    {
                        text: textoterceiraresposta.value,
                        image: urlterceiraresposta.value,
                        isCorrectAnswer: true
                    },
                    {
                        text: textoterceirarespostaincorreta1.value,
                        image: urlterceirarespostaincorreta1.value,
                        isCorrectAnswer: false
                    }
                ]
            }
        ],
        levels: [
            {
                title: primeironiveltitulo.value,
                image: primeironivelimagem.value,
                text: primeironiveldescricao.value,
                minValue: primeironivelcerto.value
            },
            {
                title: segundoniveltitulo.value,
                image: segundonivelimagem.value,
                text: segundoniveldescricao.value,
                minValue: segundonivelcerto.value
            }
        ]
    });
    promessa1.then(quandoSucesso);
    promessa1.catch(quandoErro);
}
function quandoSucesso(response){
    console.log(response);
}
function quandoErro(err){
    console.log(err);
}