class UFO {
  constructor(x, y, z) {
    this.obj = document.createElement("a-entity");

    // top of UFO
    let dome = document.createElement("a-sphere");
    dome.setAttribute("color", "silver");
    dome.setAttribute("radius", "1");
    dome.setAttribute("position", "0 0.5 0");
    dome.setAttribute("scale", "1 0.5 1");
    this.obj.append(dome);

    // saucer
    let disk = document.createElement("a-cylinder");
    disk.setAttribute("color", "gray");
    disk.setAttribute("radius", "2");
    disk.setAttribute("height", "0.3");
    disk.setAttribute("position", "0 0 0");
    this.obj.append(disk);

    // glow beam
    let glow = document.createElement("a-cone");
    glow.setAttribute("color", "aqua");
    glow.setAttribute("opacity", "0.3");
    glow.setAttribute("radius-bottom", "2");
    glow.setAttribute("radius-top", "0");
    glow.setAttribute("height", "3");
    glow.setAttribute("rotation", "180 0 0");
    glow.setAttribute("position", "0 -1.6 0");
    this.obj.append(glow);

    // Set initial position
    this.obj.setAttribute("position", { x: x, y: y, z: z });
    
    // Add to scene (assuming `scene` is defined)
    scene.append(this.obj);
  }
}