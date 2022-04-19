var i = 0;
var pauseTutorial = 0;

function levels(level){
    switch(level){
        case 1: 
            tutorial();
        break;
        case 2:
            level2();
        break;
        case 3:
            level3();
        break;
    }
}

function tutorial(){  // Tutorial
    cleanLevel();
    i = 0;

    entities[i] = new Obstacle(200,400,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    entities[i+=1] = new Obstacle(600,400,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    entities[i+=1] = new Obstacle(1000,400,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    entities[i+=1] = new Obstacle(1400,400,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    entities[i+=1] = new Obstacle(1800,400,40,400,"../../resources/imgs/entities/10blocks2.png",0);

    spike(1600,350,1,"../../resources/imgs/entities/spike2.png");
    spike(2000,350,3,"../../resources/imgs/entities/spike2.png");

    texts[0] = new Text(50, 100, "Bienvenido al tutorial de Pixel Jump");
    texts[1] = new Text(50, 150, "(Presiona cualquier tecla)");

    texts[2] = new Text(50, 100, "El juego consiste en ir saltando");
    texts[3] = new Text(50, 150, "obstaculos, como estos:");
    
    entities[i] = new Obstacle(2200,400,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    entities[i+=1] = new Obstacle(2600,400,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    entities[i+=1] = new Obstacle(3000,400,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    spike(3400,450,8,"../../resources/imgs/entities/spike2.png");
    entities[i+=1] = new Spring(3550,300,"../../resources/imgs/entities/spring.png");
    entities[i+=1] = new Obstacle(3800,400,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    
    texts[4] = new Text(50, 100, "Existen otros elementos como");
    texts[5] = new Text(50, 150, "la bola de impulso, la cual ");
    texts[6] = new Text(50, 200, "te dara salto, pero no te ");
    texts[7] = new Text(50, 250, "puedes chocar con ella");

    entities[i+=1] = new Obstacle(4200,400,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    entities[i+=1] = new Obstacle(4600,400,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    entities[i+=1] = new Obstacle(5000,400,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    entities[i+=1] = new Portal(5410,canvas.height/4,"../../resources/imgs/entities/portal1.png", 1);
    
    texts[8] = new Text(50, 100, "Bien hecho, ahora vienen los");
    texts[9] = new Text(50, 150, "portales, estos cambiaran el");
    texts[10] = new Text(50, 200, "modo de juego.");
    
    texts[11] = new Text(50, 100, "Este primero hara que vueles");
    texts[12] = new Text(50, 150, "por lo tanto el salto cambia");
    
    spike(5420,450,60,"../../resources/imgs/entities/spike2.png");
    spike(5420,0,60,"../../resources/imgs/entities/downwards_spike2.png");

    column(8420,3,"../../resources/imgs/entities/block2.png");
    columnR(8420,3,"../../resources/imgs/entities/block2.png");

    entities[i+=1] = new Portal(8500,canvas.height/4,"../../resources/imgs/entities/portal1.png", 0);

    texts[13] = new Text(50, 100, "Este otro te pasa a modo ");
    texts[14] = new Text(50, 150, "araña, por lo tanto solo ");
    texts[15] = new Text(50, 200, "puedes estar en el suelo o ");
    texts[16] = new Text(50, 250, "en el techo");

    entities[i+=1] = new Obstacle(8460,380,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    entities[i+=1] = new Obstacle(8860,380,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    entities[i+=1] = new Obstacle(9260,380,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    entities[i+=1] = new Obstacle(9660,380,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    entities[i+=1] = new Obstacle(10060,380,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    entities[i+=1] = new Obstacle(10460,380,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    entities[i+=1] = new Obstacle(10860,380,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    entities[i+=1] = new Obstacle(11260,380,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    entities[i+=1] = new Obstacle(11660,380,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    entities[i+=1] = new Obstacle(12060,380,40,400,"../../resources/imgs/entities/10blocks2.png",0);

    
    entities[i+=1] = new Obstacle(9260,120,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    entities[i+=1] = new Obstacle(9660,120,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    entities[i+=1] = new Obstacle(10060,120,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    entities[i+=1] = new Obstacle(10460,120,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    entities[i+=1] = new Obstacle(10860,120,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    entities[i+=1] = new Obstacle(11260,120,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    entities[i+=1] = new Obstacle(11660,120,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    entities[i+=1] = new Obstacle(12060,120,40,400,"../../resources/imgs/entities/10blocks2.png",0);
    
    entities[i+=1] = new Portal(9260,canvas.height/4,"../../resources/imgs/entities/portal1.png", 2);

    spike(10260,330,1,"../../resources/imgs/entities/spike2.png");
    spike(10650,160,1,"../../resources/imgs/entities/downwards_spike2.png");
    spike(10850,330,1,"../../resources/imgs/entities/spike2.png");
    spike(11070,160,1,"../../resources/imgs/entities/downwards_spike2.png");

    entities[i+=1] = new Portal(12460,canvas.height/4,"../../resources/imgs/entities/portal1.png", 3);
}

function level2(){
    cleanLevel();
    i = 0;

    entities[i] = new Obstacle(200,400,40,400,"../../resources/imgs/entities/10blocks.png",0);
    entities[i+=1] = new Obstacle(600,400,40,400,"../../resources/imgs/entities/10blocks.png",0);

    entities[i+=1] = new Obstacle(1000,360,40,400,"../../resources/imgs/entities/10blocks.png",0);

    spike(1450,450,7,"../../resources/imgs/entities/spike1.png");

    //Escalones
    entities[i+=1] = new Obstacle(1450,300,20,40,"../../resources/imgs/entities/block1.png",0);
    entities[i+=1] = new Obstacle(1700,250,20,40,"../../resources/imgs/entities/block1.png",0);
    entities[i+=1] = new Obstacle(1950,250,20,40,"../../resources/imgs/entities/block1.png",0);

    spike(1800,450,7,"../../resources/imgs/entities/spike1.png");

    entities[i+=1] = new Obstacle(2200,400,40,400,"../../resources/imgs/entities/10blocks.png",0);
    entities[i+=1] = new Obstacle(2400,350,50,50,"../../resources/imgs/entities/spike1.png",1);

    entities[i+=1] = new Obstacle(2800,350,20,40,"../../resources/imgs/entities/block1.png",0);
    entities[i+=1] = new Obstacle(3000,250,20,40,"../../resources/imgs/entities/block1.png",0);
    entities[i+=1] = new Obstacle(3200,150,20,40,"../../resources/imgs/entities/block1.png",0);

    entities[i+=1] = new Obstacle(3300,190,20,40,"../../resources/imgs/entities/block1.png",0);
    entities[i+=1] = new Obstacle(3400,230,20,40,"../../resources/imgs/entities/block1.png",0);
    entities[i+=1] = new Obstacle(3500,270,20,40,"../../resources/imgs/entities/block1.png",0);
    entities[i+=1] = new Obstacle(3600,310,20,40,"../../resources/imgs/entities/block1.png",0);
    entities[i+=1] = new Obstacle(3700,350,20,40,"../../resources/imgs/entities/block1.png",0);

    spike(2800,450,9,"../../resources/imgs/entities/spike1.png");

    entities[i+=1] = new Obstacle(3750,350,40,400,"../../resources/imgs/entities/10blocks.png",0);
    entities[i+=1] = new Obstacle(3750,250,40,400,"../../resources/imgs/entities/10blocks.png",0);

    spike(3750,200,5,"../../resources/imgs/entities/spike1.png");

    //Portal a nave
    entities[i+=1] = new Portal(4175,canvas.height/4,"../../resources/imgs/entities/portal1.png", 1);

    spike(4200,450,123,"../../resources/imgs/entities/spike1.png");

    spike(4200,0,123,"../../resources/imgs/entities/downwards_spike1.png");

    volar(4600,6,"../../resources/imgs/entities/block1.png");

    column(10350,4,"../../resources/imgs/entities/block1.png");
    columnR(10350,4,"../../resources/imgs/entities/block1.png");

    entities[i+=1] = new Obstacle(10390,340,40,400,"../../resources/imgs/entities/10blocks.png",0);
    entities[i+=1] = new Obstacle(10390,120,40,400,"../../resources/imgs/entities/10blocks.png",0);

    //Portal a salto
    
    entities[i+=1] = new Portal(10800,canvas.height/4, "../../resources/imgs/entities/portal1.png", 0);

    entities[i+=1] = new Obstacle(10800,400,40,400,"../../resources/imgs/entities/10blocks.png",0);
    entities[i+=1] = new Spring(11350,300,"../../resources/imgs/entities/spring.png");
    spike(11200,450,8,"../../resources/imgs/entities/spike1.png");
    entities[i+=1] = new Obstacle(11600,400,40,400,"../../resources/imgs/entities/10blocks.png",0);

    entities[i+=1] = new Portal(12000,canvas.height/4, "../../resources/imgs/entities/portal1.png", 3);
}

function level3(){
    cleanLevel();
    i = 0;

    entities[i] = new Obstacle(200,200,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(600,200,40,400,"../../resources/imgs/entities/10blocks3.png",0);

    spike(800,150,1,"../../resources/imgs/entities/spike3.png");

    entities[i+=1] = new Obstacle(1150,400,40,400,"../../resources/imgs/entities/10blocks3.png",0);

    column(1750,3,"../../resources/imgs/entities/block3.png");
    column(1950,4,"../../resources/imgs/entities/block3.png");
    column(2150,5,"../../resources/imgs/entities/block3.png");
    column(2350,6,"../../resources/imgs/entities/block3.png");
    column(2550,7,"../../resources/imgs/entities/block3.png");
    column(2750,8,"../../resources/imgs/entities/block3.png");

    entities[i+=1] = new Obstacle(2750,340,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Spring(3350,300,"../../resources/imgs/entities/spring.png");
    spike(2790,450,15,"../../resources/imgs/entities/spike3.png");


    entities[i+=1] = new Portal(3520,canvas.height/4,"../../resources/imgs/entities/portal3.png", 2);

    entities[i+=1] = new Obstacle(3550,460,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(3950,460,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(4750,460,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(5150,460,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(5950,460,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(6350,460,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(7150,460,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(7550,460,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(8350,460,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(8750,460,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(9150,460,40,400,"../../resources/imgs/entities/10blocks3.png",0);

    entities[i+=1] = new Obstacle(3550,0,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(3950,0,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(4750,0,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(5150,0,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(5950,0,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(6350,0,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(7150,0,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(7550,0,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(8350,0,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(8750,0,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(9150,0,40,400,"../../resources/imgs/entities/10blocks3.png",0);

    entities[i+=1] = new Obstacle(3850,230,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(4250,230,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(4650,230,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(5450,230,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(5850,230,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(6250,230,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(6650,230,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(7050,230,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(7450,230,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(7850,230,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(8650,230,40,400,"../../resources/imgs/entities/10blocks3.png",0);
    
    //Rellenos de spikes 
    spike(4350,450,8,"../../resources/imgs/entities/spike3.png");
    spike(4350,0,8,"../../resources/imgs/entities/downwards_spike3.png");
    spike(5550,450,8,"../../resources/imgs/entities/spike3.png");
    spike(5550,0,8,"../../resources/imgs/entities/downwards_spike3.png");
    spike(6750,450,8,"../../resources/imgs/entities/spike3.png");
    spike(6750,0,8,"../../resources/imgs/entities/downwards_spike3.png");
    spike(7950,450,8,"../../resources/imgs/entities/spike3.png");
    spike(7950,0,8,"../../resources/imgs/entities/downwards_spike3.png");

    // Spikes de lo de antes
    spike(3850,180,6,"../../resources/imgs/entities/spike3.png");
    spike(3850,270,6,"../../resources/imgs/entities/downwards_spike3.png");
    spike(4850,180,4,"../../resources/imgs/entities/spike3.png");
    spike(4850,270,4,"../../resources/imgs/entities/downwards_spike3.png");
    spike(6050,180,4,"../../resources/imgs/entities/spike3.png");
    spike(6350,40,4,"../../resources/imgs/entities/downwards_spike3.png");
    spike(7250,180,4,"../../resources/imgs/entities/spike3.png");
    spike(7250,270,4,"../../resources/imgs/entities/downwards_spike3.png");

    // ZigZag de spikes
    spike(6000,270,1,"../../resources/imgs/entities/downwards_spike3.png");
    spike(6200,410,1,"../../resources/imgs/entities/spike3.png");
    spike(6400,270,1,"../../resources/imgs/entities/downwards_spike3.png");
    spike(6600,410,1,"../../resources/imgs/entities/spike3.png");

    //Escalones 
    entities[i+=1] = new Obstacle(8300,80,20,60,"../../resources/imgs/entities/block3.png",0);
    entities[i+=1] = new Obstacle(8300,420,20,60,"../../resources/imgs/entities/block3.png",0);

    spike(8650,270,8,"../../resources/imgs/entities/downwards_spike3.png");
    spike(9150,40,8,"../../resources/imgs/entities/downwards_spike3.png");

    //Portal a modo nave
    entities[i+=1] = new Portal(9560,(canvas.height/4)+100,"../../resources/imgs/entities/portal3.png", 1);

    //Parte tipo flappy bird (caben 12,5 bloque en el canvas)
    
    column(10150,5,"../../resources/imgs/entities/block3.png");
    columnR(10150,4,"../../resources/imgs/entities/block3.png");
    column(10450,4,"../../resources/imgs/entities/block3.png");
    columnR(10450,5,"../../resources/imgs/entities/block3.png");
    column(10750,3,"../../resources/imgs/entities/block3.png");
    columnR(10750,6,"../../resources/imgs/entities/block3.png");
    column(11050,2,"../../resources/imgs/entities/block3.png");
    columnR(11050,7,"../../resources/imgs/entities/block3.png");
    column(11350,1,"../../resources/imgs/entities/block3.png");
    columnR(11350,8,"../../resources/imgs/entities/block3.png");
    column(11650,2,"../../resources/imgs/entities/block3.png");
    columnR(11650,7,"../../resources/imgs/entities/block3.png");
    column(11950,3,"../../resources/imgs/entities/block3.png");
    columnR(11950,6,"../../resources/imgs/entities/block3.png");
    column(12250,4,"../../resources/imgs/entities/block3.png");
    columnR(12250,5,"../../resources/imgs/entities/block3.png");
    column(12550,5,"../../resources/imgs/entities/block3.png");
    columnR(12550,4,"../../resources/imgs/entities/block3.png");
    column(12850,6,"../../resources/imgs/entities/block3.png");
    columnR(12850,3,"../../resources/imgs/entities/block3.png");
    column(13150,7,"../../resources/imgs/entities/block3.png");
    columnR(13150,2,"../../resources/imgs/entities/block3.png");

    //Portal a salto normal
    entities[i+=1] = new Portal(13170,50,"../../resources/imgs/entities/portal3.png", 0);

    entities[i+=1] = new Obstacle(13190,450,50,500,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(13590,450,50,500,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(13990,450,50,500,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(14390,450,50,500,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(14790,450,50,500,"../../resources/imgs/entities/10blocks3.png",0);
    entities[i+=1] = new Obstacle(15190,450,50,500,"../../resources/imgs/entities/10blocks3.png",0);
    
    entities[i+=1] = new Spring(13650,300,"../../resources/imgs/entities/spring.png");
    entities[i+=1] = new Spring(13850,300,"../../resources/imgs/entities/spring.png");
    entities[i+=1] = new Spring(14050,300,"../../resources/imgs/entities/spring.png");
    entities[i+=1] = new Spring(14250,300,"../../resources/imgs/entities/spring.png");
    entities[i+=1] = new Spring(14450,300,"../../resources/imgs/entities/spring.png");
    entities[i+=1] = new Spring(14750,300,"../../resources/imgs/entities/spring.png");
    spike(13590,400,16,"../../resources/imgs/entities/spike3.png");
    spike(14690,400,4,"../../resources/imgs/entities/spike3.png");

    spike(14550,150,1,"../../resources/imgs/entities/downwards_spike3.png");
    entities[i+=1] = new Obstacle(14550,100,50,50,"../../resources/imgs/entities/block3.png",0);

    entities[i+=1] = new Portal(15590,200,"../../resources/imgs/entities/portal3.png", 3);
}

function cleanLevel(){
    entities.splice(0, entities.length);            // Splice es una funcion predefinida que la uso para resetear el array   
}

function spike(x, y, num, res){
    for(var counter = 0;counter<num;counter++){
        entities[i+=1] = new Obstacle(x+50*counter,y,50,50, res,1);
    }
}

function volar(x, num, res){
    for(var counter = 0 ; counter<num ; counter++){
        entities[i+=1] = new Obstacle(x+1000*counter,140,40,40,res,0);
        entities[i+=1] = new Obstacle(x+200+1000*counter,220,40,40,res,0);
        entities[i+=1] = new Obstacle(x+400+1000*counter,400,40,40,res,0);
        entities[i+=1] = new Obstacle(x+600+1000*counter,130,40,40,res,0);
        entities[i+=1] = new Obstacle(x+700+1000*counter,300,40,40,res,0);
    }
}

function column(x, h, res){
    for(var counter = 0;counter<h;counter++){
        entities[i+=1] = new Obstacle(x,460-40*counter,40,40,res,0);
    }
}

function columnR(x, h, res){
    for(var counter = 0;counter<h;counter++){
        entities[i+=1] = new Obstacle(x,0+40*counter,40,40,res,0);
    }
}

function textTutorial(){

    if(frame == 100){
        enviroment.pause();
        pauseTutorial = 1;
        texts[0].draw();
        texts[1].draw();
    }else if(frame == 200){
        enviroment.pause();
        pauseTutorial = 1;
        texts[2].draw();
        texts[3].draw();
    }else if(frame == 500){
        enviroment.pause();
        pauseTutorial = 1;
        texts[4].draw();
        texts[5].draw();
        texts[6].draw();
        texts[7].draw();
    }else if(frame == 800){
        enviroment.pause();
        pauseTutorial = 1;
        texts[8].draw();
        texts[9].draw();
        texts[10].draw();
    }else if(frame == 900){
        enviroment.pause();
        pauseTutorial = 1;
        texts[11].draw();
        texts[12].draw();
    }else if(frame == 1700){
        enviroment.pause();
        pauseTutorial = 1;
        texts[13].draw();
        texts[14].draw();
        texts[15].draw();
        texts[16].draw();
    }
}