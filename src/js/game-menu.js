
function menu(x, y, z){ // x = menuSelector(0=menu-principal,1=menulevel,2=menuSkin,3=comenzar,4=gameOver,5=pause,6=continuar(despues de pausa));Y = level(tres niveles); Z = skinSelector(las skins que haya)
    
    start = x;
    if(y != 0){
        level = y;
    }
    if(z != 0){
        skinSelector = z - 1;
    }

    switch (x) {
        case 0:
            enviroment.stop();                          // Despliega el menu principal
            $(".menu").css({"display": "none"});  
            $("#menu-principal").css({"display": "grid"});
            muteAll(1);
        break;
        case 1:                                         // Despliega el menu de nivel  
            $(".menu").css({"display": "none"});
            $("#menu-level").css({"display": "grid"});                  
        break;
        case 2:                                         // Despliega el menu de skins
            $(".menu").css({"display": "none"}); 
            $("#menu-skin").css({"display": "grid"});
        break;
        case 3:
            enviroment.stop();                          // Comienza el juego de cero
            $(".menu").css({"display": "none"});
            $("#pause").css({"display": "grid"});  
            startGame();
        break;
        case 4:                                         // Despliega el menu de gameover
            $(".menu").css({"display": "none"});
            $("#menu-gameover").css({"display": "grid"});
        break;
        case 5:                                         // Despliega el menu de pausa
            $(".menu").css({"display": "none"});
            enviroment.pause();                 
            $("#menu-pause").css({"display": "grid"});
            muteAll(0);
        break;
        case 6:                                         // Continua el juego dnd estaba
            $(".menu").css({"display": "none"});
            $("#pause").css({"display": "grid"});
            enviroment.startGame();
        break;
        case 7:
            audio ^= 1;
            if(audio){
                $("#audio").attr("src", "../../resources/imgs/buttons/speaker_on.png");
                $("#audio").attr("onmouseout","this.src='../../resources/imgs/buttons/speaker_on.png'");
                $("#audio").attr("onmouseover","this.src='../../resources/imgs/buttons/speaker_on_hover.png'");
            }else{
                $("#audio").attr("src", "../../resources/imgs/buttons/speaker_off.png");
                $("#audio").attr("onmouseout","this.src='../../resources/imgs/buttons/speaker_off.png'");
                $("#audio").attr("onmouseover","this.src='../../resources/imgs/buttons/speaker_off_hover.png'");
                muteAll(1);
            }
        break;
        case 8:
            $(".menu").css({"display": "none"});
            $("#menu-win").css({"display": "grid"});
            muteAll(1);
        break;
        default:
            console.log("Sin parametro en menu");
        break;
    }
}
