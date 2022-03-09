//Game Logic

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var width = canvas.width; //Incializo aquí para ahorrarme el cómputo cuando me hagan falta
var height = canvas.height;
var refreshTimer;


window.onload = init;
function init(){
    player = new player(300,300,10,10,"/resources/imgs/image.jpg");
    player.draw();
}

function Entity(posX, posY, height, width, source){
    this.posX = posX;
    this.posY = posY;
    this.height = height;
    this.width = width;
    this.source = source;

    this.image = new Image();
    this.image.src = source;

    this.setPos = function(x,y){
        this.posX = x;
        this.posY = y;
    }

    this.getPos = function(){
        return this.posX, this.posY;
    }

    this.draw = function(){
        context.drawImage(this.image, this.posX, this.posY, this.width, this.height);s
    }
}

function Player(posX, posY, height, width, source) {
    //Entity.call(this, nombrePila, apellido, edad, genero, intereses);
    
    this.jump = function(keycode){
        if(keycode == 32){//Spacebar

        } 
    }

}

function Obstacle(posX, posY, height, width, source) {
    //Herencia

    this.move = function(){
        this.setPos(this.posX - gameArea.getSpeed(),this.posY);
    }

    this.collision = function(x,y){
        if(x == this.posX)
        
    }

}

/*
function player(posX, posY, height, width, source){
    this.posX = posX;
    this.posY = posY;
    this.height = height;
    this.width = width;
    this.source = source;

    this.image = new Image();
    this.image.src = source;

    this.setSource = function(source){
        this.image.src = source;
    }

    this.setPos = function(x,y){
        this.posX = x;
        this.posY = y;
    }   

    this.getPos = function(){
        return posX, posY;
    }

    this.jump = function(){

    }

    this.draw = function(){
        context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }

}

function obstacle(posX, posX){
    this.posX = posX;
    this.posY = posY;

    setPos = function(x,y){
        this.posX = x;
        this.posY = y;
    }   

    getPos = function(){
        return posX, posY;
    }

    collision = function(x,y){
        
    }

}
*/
