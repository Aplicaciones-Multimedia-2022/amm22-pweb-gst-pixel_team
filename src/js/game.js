//Game Logic

/* *****************************************************************************
Nomenclatura usada:
-Colisiones:
    0-> No hay colisión
    1-> Colisión fatal, supone el final del juego
        Se da en colisiones horizontales y verticales con "spike"
        y en colisiones horizontales con bloque
    2-> Colisión permitida, suelo/tejado (para el player)
-Modos de player:
    0-> Modo bloque, se permite un salto simple
    1-> Modo spaceship, gravedad reducida, se permite salto múltiple
        tipo flappy bird
    2-> Modo araña, la gravedad se multiplica y se mueve de suelo al techo y 
        viceversa muy rápido
-Tipo de obstáculo
    0-> Bloque simple, colisión horizontal es fatal
    1-> Spike o picho, cualquier colisión es fatal
-Tipo de portal
    0-> Pasa a modo shpaceship
    1-> Pasa a modo araña
    2-> Pasa a modo bloque
********************************************************************************/   

//Global vars
const PLAYER_WIDTH = 40;
const PLAYER_HEIGHT = 40;
const PLAYER_SPRITE_HEIGHT = 502;
const PLAYER_SPRITE_WIDTH = 2510;
const PLAYER_FRAMES = 5;
const PORTAL_WIDTH = 100;
const PORTAL_HEIGHT = 250;
const SPRING_WIDTH = 50;
const SPRING_HEIGHT = 50;
const MAX_PARTICLES = 20;
const GAME_TAB = 1;

//Game objects
var player;
var entities = [];
var particles = [];
var texts = [];

//Game vars
var gravity = 0.8; // REPRESENTA EL EFECTO DE LA GRAVEDDAD (pero no lo es) 
var dY = 0;
var isJumping = 0;
const dX = 5;
var sp = 0;

//Control vars
var pause = 0;
var frame = 0;
var audio = 1; //1->ON, 0->OFF 
var start = 0;
var level = 1;
var skinSelector = 1;

//Paths
var skins = ["../../resources/imgs/skins/player1_block.png","../../resources/imgs/skins/player2_block.png",
            "../../resources/imgs/skins/player3_block.png"];

var backgrounds = ["../../resources/imgs/backgrounds/background3.png","../../resources/imgs/backgrounds/background1.png",
                    "../../resources/imgs/backgrounds/background1.png"];

var audios = ["../../resources/audio/jump.mp3","../../resources/audio/win.mp3","../../resources/audio/portal_to_block.mp3",
            "../../resources/audio/portal_to_spaceship.mp3","../../resources/audio/portal_to_spider.mp3",
            "../../resources/audio/backgroundmusic1.mp3","../../resources/audio/backgroundmusic2.mp3",
            "../../resources/audio/backgroundmusic3.mp3"];

window.onload = init;
function init(){
    enviroment.start();
    loadAudio();
    menu(0,0,0);
}

//Called in the menu() function
function startGame(){
    
    player = new Player(200, 20 ,skins[skinSelector]);   

    levels(level);

    background = new Image();
    background.src = backgrounds[level-1];
    BG = {
        x1: 0,
        x2: canvas.width,
        y: 0,
        width: canvas.width,
        height: canvas.height,
    }
    enviroment.startGame();
}

function loadAudio(){
    var aux = [];

    for(let i = 0; i < audios.length; i++ ){
        aux[i] = document.createElement("audio");
        aux[i].src = audios[i];
        $(".content")[GAME_TAB].append(aux[i]);
    }
    
    
    $(".levels")[0].addEventListener("click", function(){
        muteAll(1);
        if(audio) $('audio')[5].play();
    })

    $(".levels")[1].addEventListener("click", function(){
        muteAll(1);
        if(audio) $('audio')[6].play();
    })

    $(".levels")[2].addEventListener("click", function(){
        muteAll(1);
        if(audio) $('audio')[7].play();
    })

    for(var i = 0; i < $(".restart").length; i++){
        $(".restart")[i].addEventListener("click", function(){
            if(audio){
                switch(level){
                    case 1: 
                        $('audio')[5].play();
                    break;
                    case 2:
                        $('audio')[6].play(); 
                    break;
                    case 3: 
                        $('audio')[7].play();
                    break;
                }
            }
        })
    }
}

function muteAll(stop){
    for(var i = 0; i < $('audio').length; i++){
        $('audio')[i].pause();
        if(stop) $('audio')[i].currentTime = 0;
    }
}

window.onkeydown = function(){

    if(pauseTutorial){
        pauseTutorial = 0;
        enviroment.startGame();
    }else if(!isJumping){
        player.dY = 0;
        player.jump();
        if(audio) $('audio')[0].play();
    }
}

var enviroment = {
    canvas: document.createElement("canvas"),
    start: function(){
        this.canvas.width =  1000;
        this.canvas.height = 500;
        this.canvas.id = "canvas";
        this.context = this.canvas.getContext('2d');
        $(".content")[GAME_TAB].append(this.canvas); //Inserts the canvas element JQUERY
        
    },
    startGame: function(){
        this.interval = setInterval(updateEnviroment,10);
    },
    clear: function(){
        this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
    },
    pause: function(){
        pause = this.interval;
        clearInterval(this.interval);
        this.interval = pause;
    },
    stop: function(){
        clearInterval(this.interval);
        frame = 0;
    }
}

function drawBackground(){
    var dXbackground = dX/5;
    if(BG.x1 <= -BG.width + dXbackground) BG.x1 = BG.width;
    else BG.x1 -= dXbackground;
    if(BG.x2 <= -BG.width + dXbackground) BG.x2 = BG.width;
    else BG.x2 -= dXbackground;
    enviroment.context.drawImage(background, BG.x1, BG.y, BG.width, BG.height);
    enviroment.context.drawImage(background, BG.x2, BG.y, BG.width, BG.height);
}

class Entity {
    constructor(posX, posY, source) {
        this.posX = posX;
        this.posY = posY;
        this.height; //Especificado en las subclases ya que no cambia
        this.width;
        this.context = enviroment.context;
        this.source = source;

        this.image = new Image();
        this.image.src = source;
    }
    
    get posY(){
        return this._posY;
    }

    set posY(posY){
        this._posY = posY;
    }

    get posX(){
        return this._posX;
    }

    set posX(posX){
        this._posX = posX;
    }

    get height(){
        return this._height;
    }

    set height(height){
        this._height = height;
    }

    get width(){
        return this._width;
    }

    set width(width){
        this._width = width;
    }

    get image(){
        return this._image;
    }

    set image(image){
        this._image = image;
    }

    setPos(x, y){
        this.posX = x;
        this.posY = y;
    }

    draw(){
        this.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
}

class Player extends Entity{
    constructor(posX, posY, source) {
        super(posX, posY, source);

        //Todas las skins de player son iguales cuadradas
        this.height = PLAYER_HEIGHT;
        this.width = PLAYER_WIDTH;

        this.frame = 0;
        this.frameWidth = PLAYER_SPRITE_WIDTH/PLAYER_FRAMES;
        this.frameHeight = PLAYER_SPRITE_HEIGHT;
        
        this.gravity = gravity;
        this.dY = 0;
        this.mode = 0; //0 block, 1 spaceship, 2 spider

        this.block_source = this.source;
        this.spaceship_source = this.source.replace('block','spaceship');
        this.spider_down_source = this.source.replace('block','spider_down');
        this.spider_up_source = this.source.replace('block','spider_up');
    }

    get mode(){
        return this._mode;
    }

    set mode(mode){
        this._mode = mode;
    }

    get gravity(){
        return this._gravity;
    }

    set gravity(gravity){
        this._gravity = gravity;
    }

    get dY(){
        return this._dY;
    }

    set dY(dY){
        this._dY = dY;
    }

    update(){
        if( (this.posY +  this.height + this.dY <= canvas.height) && (this.posY + this.dY >= 0)){
            this.posY += this.dY;  
            switch(this.mode){
                case 0: 
                    this.dY += this.gravity;  
                break;
                case 1:
                    this.dY += this.gravity/5;  
                break;
                case 2:
                    this.dY += this.gravity*6;  
                break;
            }
        }else{
            this.dY = 0;
            if(this.mode != 0)
            isJumping = 0;
            // if(this.dY != 0) isJumping = 1;
        }

        //Alomejor se puede usar una variable más para sólo hacer con el cambio
        switch(this.mode){
            case 0:
                this.image.src = this.block_source;
            break;
            case 1:
                this.image.src = this.spaceship_source;
            break;
            case 2:
                if(this.gravity > 0)
                    this.image.src = this.spider_down_source;
                else
                    this.image.src = this.spider_up_source;
            break;
        }
        if(this.mode == 0 && this.dY > this.gravity*7 && !sp) isJumping = 1; //Susceptible de afinado (gravity*2)
    }

    jump(){
        if(this.mode == 0){
            if(!isJumping){
                this.dY -= 16;
                isJumping = 1;
            }
        }else if(this.mode == 1){
            //Mejor que -= 4 para la jugabilidad
            this.dY = -4;
        }else if(this.mode == 2){
            if(!isJumping){
                this.gravity = -this.gravity;
                isJumping = 1;
            }
        }
    }

    draw(){
        //Sprite animation 
        if(this.mode == 2 && this.dY != 0){
            this.context.drawImage(this.image, this.frame*this.frameWidth, 0, this.frameWidth, this.frameHeight, this.posX, this.posY, this.width, this.height);
            if(this.frame >= 5) this.frame = 0;
            else if(frame%10 === 0) this.frame++;
        }else{
            super.draw();
        }
    }

}

class Obstacle extends Entity{
    constructor(posX, posY, height, width, source, type) {
        super(posX, posY, source);

        this.height = height;
        this.width = width;

        this.type = type; //0 -> Block, 1 -> Spike
    }

    update(){
        this.setPos(this.posX - dX, this.posY);
    }

    collision(player){
        var aux = 0;
        // COLISIÓN LATERAL (izq a dcha)
        if( (player.posX + player.width > this.posX - dX) && (player.posX + player.width < this.posX + this.width/2) &&
            ( ( (player.posY + player.height > this.posY) && (player.posY + player.height < this.posY + this.height) ) || 
                ( (player.posY > this.posY) && (player.posY < this.posY + this.height) ) ) ){

            aux = 1;
        
        // COLISIÓN CON SUELO (arriba a abajo)
        }else if( (this.posX - dX <= player.posX + player.width) && (this.posX + this.width - dX >= player.posX) &&
                (this.posY <= player.posY + player.height + player.dY) && (this.posY >= player.posY + player.height) && !this.type){
            
            aux = 2;     

        }else if( (this.posX - dX <= player.posX + player.width) && (this.posX + this.width/3 - dX >= player.posX) &&
            (this.posY <= player.posY + player.height + player.dY) && (this.posY >= player.posY + player.height) && this.type){
                
            aux = 1;

        // COLISIÓN CON TECHO (abajo a arriba)
        }else if( (this.posX <= player.posX + player.width) && (this.posX + this.width >= player.posX) &&
                (player.posY + player.dY <= this.posY + this.height) && (this.posY + this.height <= player.posY) ){
        
            if(this.type){ 
                aux = 1;
            }else{
                aux = 2;
            }
        }
        
        switch(aux){
        case 1:
            enviroment.stop();
            muteAll(1);
            menu(4, 0, 0);
        break;
        case 2:
            player.dY = 0;
            sp = 0;
            if(player.posY <= this.posY + this.height || player.mode != 0 ){
                isJumping = 0;
            } 
        break;
        }
    }

}

class Portal extends Entity{
constructor(posX, posY, source, type) {
    super(posX, posY, source);

    this.height = PORTAL_HEIGHT;
    this.width = PORTAL_WIDTH;

    this.type = type; // block, 1->To Spaceship, 2->To Spider, 3->Win
    }

    update(){
        this.setPos(this.posX - dX, this.posY);
    }

    collision(player){
        //Misma comprobación que la colisión horizontal
        if( (player.posX + player.width > this.posX) && (player.posX + player.width < this.posX + this.width) &&
        ( ( (player.posY + player.height > this.posY) && (player.posY + player.height < this.posY + this.height) ) || 
            ( (player.posY > this.posY) && (player.posY < this.posY + this.height) ) ) ){
            if(this.type == 3){
                if(audio) $('audio')[1].play(); //Win sound
                enviroment.stop();
                menu(8,0,0);
            }else{
                player.mode = this.type;
                if(audio) $('audio')[this.type + 2].play(); //Los audios de portal empiezan el DOM a partir del 2
            }
        }
    }

}

class Spring extends Entity{
    constructor(posX, posY, source) {
        super(posX, posY, source);

        this.frameWidth = 2008/4;
        this.frameHeight = 502;

        this.height = SPRING_HEIGHT;
        this.width = SPRING_WIDTH;
        this.frame = 0;
    }

    update(){
        this.setPos(this.posX - dX, this.posY);
    }
    
    collision(player){
        //Misma comprobación que la colisión vertical
        if( (this.posX <= player.posX + player.width) && (this.posX + this.width >= player.posX) &&
        (this.posY <= player.posY + player.height + player.dY) && (this.posY >= player.posY + player.height) ){
            sp = 1;
            isJumping = 0; 
        }
    }
        
    draw(){
        //Sprite animation 
        this.context.drawImage(this.image, this.frame*this.frameWidth, 0, this.frameWidth, this.frameHeight, this.posX, this.posY, this.width, this.height);
        if(this.frame >= 4) this.frame = 0;
        else if(frame % 10 === 0) this.frame++;
    }
}

class Text{ //Usado para el tutorial
    constructor(posX, posY, text){
        this.posX = posX;
        this.posY = posY;
        this.context = enviroment.context;
        this.text = text;
    }

    draw(){
        this.context.font = "30px Ethnocentric";
        this.context.fillStyle = "#ff005a";
        this.context.fillText(this.text, this.posX, this.posY);
    }
}

class Particle{ //Estela de partículas
    constructor(player){
        this.posX = player.posX;
        this.posY = player.posY + player.height - 2;    
        this.size = Math.random()*4+3;
        this.dY = Math.random() - 0.5;
        this.color = "#ff005a";
        this.context = enviroment.context;
    }

    update(){
        this.posX -= dX;
        this.posY += this.dY;  
    }
    
    draw(){
        if(player.mode == 2 && player.gravity < 0) this.posY = player.posY + 2*this.size + 2; //Limpiar esto
        this.context.fillStyle = this.color;
        this.context.fillRect(this.posX, this.posY - this.size, this.size, this.size);
    }
}

function drawParticles(){
    particles.unshift(new Particle(player,enviroment.context));
    for(var i = 0; i < particles.length; i++){
        particles[i].update();
        particles[i].draw();
    }
    
    if(particles.length > MAX_PARTICLES){
        for(let i = 0; i < 8; i++){
            particles.pop(particles[i]);
        }
    }
}

//Bucle de juego
function updateEnviroment(){
    enviroment.clear();

    drawBackground();
    
    player.update();
    player.draw();

    drawParticles();

    for(var i = 0; i < entities.length; i++){
        entities[i].collision(player);
        entities[i].update();
        entities[i].draw();
    }

    if(level == 1){
        textTutorial();
    }

    frame++;
}