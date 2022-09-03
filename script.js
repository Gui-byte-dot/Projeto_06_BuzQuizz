let array = [];

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
            <span>${quizz.questions[j].title}</span>
        `
        
        for(let k = 0; k < quizz.questions[j].answers.length; k++){
            document.querySelector('.quizzescolhido').innerHTML += ` 
                <div class="onequizz">
                    <img src="${quizz.questions[j].answers[k].image}" />
                    <p>${quizz.questions[j].answers[k].text}</p>
                </div>
                `

        }
    }    


}


// document.querySelector('.quizzescolhido').innerHTML += `
//         <div class="titlequizz">
//             <p>${quizz.questions[j].title}"</p>
//         </div>
//         `












function exibircomeco(){
    document.querySelector('.titulo').style.display = 'none';
    document.querySelector('.titulo').style.border = "none";
    document.querySelector('.todasasquizzes').style.display = "none";
    document.querySelector('body').innerHTML += 
    `<div class="comecepelocomeco">
        <p>Comece pelo começo</p>
        <div class="infocomeco">
            <input type="text" placeholder="Titulo do seu quizz"></input>
            <input type="text" placeholder="Titulo do seu quizz"></input>
            <input type="text" placeholder="Titulo do seu quizz"></input>
            <input type="text" placeholder="Titulo do seu quizz"></input>
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
                    <div class="segundapergunta">
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
        <div class="finalizarquizz">Finalizar Quizz</div>
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




