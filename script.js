function exibircomeco(){
    document.querySelector('.titulo').innerHTML = "";
    document.querySelector('.titulo').style.border = "none";
    document.querySelector('body').innerHTML += 
    `<div class="comecepelocomeco">
        <p>Comece pelo começo</p>
        <div class="infocomeco">
            <input type="text" placholder=""></input>
        </div>  
    
    </div>`

}