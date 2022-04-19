# Aplicaciones Multimedia: proyecto
## Descripción del juego:
El monigote salta con el objetivo de evitar chocar con unos obstáculos: bloques y pinchos.
Al saltar rota sobre sí mismo.
## Análisis sobre la codificación del juego:
Se tienen tres elementos: fondo=plantilla=imagen estática, monigote y obstáculos. Los obstáculos pueden ser bloques o pinchos (susceptible de ser modificado).
Sobre los bloques: su tamaño se mide en unidad de bloque.
El monigote se desplaza de arriba a abajo. Los obstáculos, hacia la izquierda.
Existen tres niveles: fácil, medio y difícil. Todos ellos suponen una progresión cíclica de obstáculos.
El juego permite guardar partidas así como la puntuación obtenida en cada una de ellas.
### Tareas a programar dentro de javascript:
1. Dibujar monigote
2. Permitir acciones (saltar)
3. Detectar colisiones. Sobre las colisiones: en los obstáculos de tipo bloque, el choque ocurre cuando el monigote choca contra alguna parte de su límite izquierdo. En los obstáculos de tipo pincho, igual e incluyendo el choque sobre el pincho. 
4. Permitir la rotación del monigote sobre sí mismo e incorporar gravedad (siendo, esta última, una funcionalidad avanzada)
5. Se ha comentado la posibilidad de saltar más veces si se sigue pulsando la tecla una vez estando el monigote en el aire
## Descripción archivos a implementar:
*Javascript*
Dos ficheros: lógica del juego (que incluye las funciones del mismo) y lógica de la página. 
*CSS*
Dos ficheros: lógica del juego (que incluye las funciones del mismo) y lógica de la página.
*HTML5*

## Nomenclatura usada:
1. Colisiones:
    * 0-> No hay colisión
    * 1-> Colisión fatal, supone el final del juego
        Se da en colisiones horizontales y verticales con "spike"
        y en colisiones horizontales con bloque
    * 2-> Colisión permitida, suelo/tejado (para el player)
2. Modos de player:
    * 0-> Modo bloque, se permite un salto simple
    * 1-> Modo spaceship, gravedad reducida, se permite salto múltiple
        tipo flappy bird
    * 2-> Modo araña, la gravedad se multiplica y se mueve de suelo al techo y 
        viceversa muy rápido
3. Tipo de obstáculo
    * 0-> Bloque simple, colisión horizontal es fatal
    * 1-> Spike o picho, cualquier colisión es fatal
4. Tipo de portal
    * 0-> Pasa a modo shpaceship
    * 1-> Pasa a modo araña
    * 2-> Pasa a modo bloque
