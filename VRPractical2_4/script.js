let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let missiles = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  for(let i = 0; i < 25; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let missile = new Missile(x, 2 , z);


  missile.a = 0;
  missile.da = 0.05;
  missiles.push(missile);
  }

  for(let i = 0; i < 25; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let ufo = new UFO(x, 7 , z);
  }

  loop();
})

function loop(){
  for (let i = 0; i < missiles.length; i++) {
    let missile = missiles[i];
    missile.a += m.da;
    missile.obj.setAttribute("position", {x: missile.obj.getAttribute("position").x, y: missile.a, z: missile.obj.getAttribute("position").z});

    // reset when it goes too high
    if (missile.a > 25) {
      missile.a = 0;
    }
  }
  
  window.requestAnimationFrame( loop );
}
