class Cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
  // puff one
  let puff = document.createElement("a-sphere");
  puff.setAttribute("color", "white");
  puff.setAttribute("radius", "3");
  puff.setAttribute("position", "0 10 0");
  this.obj.append(puff);

  // puff 2
  let puff2 = document.createElement("a-sphere");
  puff2.setAttribute("color", "white");
  puff2.setAttribute("radius", "2");
  puff2.setAttribute("position", "0.5 10 0");

  this.obj.append(puff2);

  // puff 3
  let puff3 = document.createElement("a-sphere");
  puff3.setAttribute("color", "white");
  puff3.setAttribute("radius", "2");
  puff3.setAttribute("position", "-0.5 10 0");

  this.obj.append(puff3);
  
  
  this.obj.setAttribute("position", {x:x , y:y , z:z});

  scene.append(this.obj);
  }
}