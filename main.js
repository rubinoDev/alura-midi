function tocaSom(idElemento){
    const elemento = document.querySelector(idElemento);


    if(elemento && elemento.localName === 'audio'){//elemento existe - != nulo
        elemento.play();
    }
    else{
        console.log("Element not found or invalid selector");
    }
}

listaDeTeclas = document.querySelectorAll('.tecla');
listaDeSom = document.querySelectorAll('audio');

for(let i = 0;   i<listaDeTeclas.length; i++){
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){
        if(evento.code === "Enter" || evento.code === "Space"){ //esse code vimos através da devtools
            tecla.classList.add('ativa')

        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
}
