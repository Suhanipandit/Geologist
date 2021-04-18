class Rubber {
    constructor(x, y) {
      var options = {
        'density':1,
        'friction': 5,
        'restitution':0.3
      };
      this.body = Bodies.circle(x, y, 20, options);
      this.radius = 20;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(4);
      stroke('black')
      fill('darkblue')
      ellipseMode(RADIUS)
      ellipse(0, 0, this.radius, this.radius);
      pop();
    };
  };
  