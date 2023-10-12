let boton = document.querySelector ("#Tema");
let body = document.querySelector ("body");
let ModoOscuro = false;
boton.addEventListener("click",()=>{
    if(ModoOscuro == false){
        ModoOscuro = true
        body.style.backgroundImage = "url('LetrasNegativo.png'), url('FondoNegativo.png')";
        body.style.backgroundRepeat = "no-repeat, repeat";
        body.style.backgroundPosition = "top center, top center";
        PrimerLineaTexto.style.color = "white"
    }else{
        ModoOscuro = false;
        body.style.backgroundImage = "";
        body.style.backgroundRepeat = "";
        body.style.backgroundPosition = "";
        PrimerLineaTexto.style.color = "";
    }

})
