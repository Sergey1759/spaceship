var canvas = document.getElementById("game");
var context = canvas.getContext('2d');

var fon = new Image();
fon.src = "fon.png";

var asteroid = new Image();
asteroid.src ="asteroid.png";

var kora = new Image();
kora.src ="kora.png";

var aster_poz = [];


//aster_poz.push({x:0,y:0,dx:5,dy: 4});

var ship = {x:1820/2-50,y:850/2-50};
var rand_aster = 0;

canvas.addEventListener("mousemove", function (event) {
    ship.x = event.offsetX +130;
    ship.y = event.offsetY +130;

})

fon.onload = function () {
    game();
};


function game() {
    update();
    render();
    requestAnimationFrame(game); // read about that
}
function update() {
rand_aster++;
    if(rand_aster % 10 == 0) {
       // aster_poz.push({x:0,y:8,dx:3,dy: 4});
        aster_poz.push({x: Math.random()*1710, y: -10, dx: Math.random()*2-1, dy: Math.random()*2+1});

    }

for( var i in aster_poz ) {
    aster_poz[i].x += aster_poz[i].dx;
    aster_poz[i].y += aster_poz[i].dy;

     if (aster_poz[i].x >= 1820 || aster_poz[i].x <= -100) aster_poz.splice(i,1);
     if (aster_poz[i].y >= 850) aster_poz.splice(i,1);
   // console.log("aster_poz.x = " + aster_poz[i].x + "  " + "aster_poz.y = " + aster_poz[i].y);
                }


}

function render() {
    context.drawImage(fon,0,0,1920,1080);
    context.drawImage(kora,ship.x,ship.y,100,100);
    for (var i in aster_poz){
    context.drawImage(asteroid,aster_poz[i].x,aster_poz[i].y,100,100);
    }
}









