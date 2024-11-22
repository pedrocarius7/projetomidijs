

function tocaSom (seletorAudio) {

const elemento = document.querySelector(seletorAudio);

    
    if(elemento != null && elemento.localName === "audio"){

            elemento.play();
        
    }

    else{
        console.log("ELEMENTO ou seletor NULO, NÃO ENCONTRADO!");
    }

    

}

let num1 = "2";
let num2 = 2;

console.log(num1 + num2);


const listaDeTeclas = document.querySelectorAll(".tecla");


for(let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`

    tecla.onclick = function(){
        tocaSom(idAudio);
    }


    tecla.onkeydown = function(event){

        if(event.code === "Enter" || event.code === "Space"){    
        tecla.classList.add("ativa");
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove("ativa");
    }

}