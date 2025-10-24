class House{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let wall1 = document.createElement("a-box");
    wall1.setAttribute("color","white");
    wall1.setAttribute("position","-2 1.5 0");
    wall1.setAttribute("height","3");
    wall1.setAttribute("width","4");
    this.obj.append( wall1 );

    let roof = document.createElement("a-cone");
    roof.setAttribute("color","brown");
    roof.setAttribute("position","-2 4 0");
    roof.setAttribute("height","2");
    roof.setAttribute("radius-bottom","3");
    this.obj.append( roof ); 
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}