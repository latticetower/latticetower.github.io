var atomInfo = {};

Vector = function(px, py) {
  this.x = px;
  this.y = py;
  this.rad2_ = px*px + py*py;

  this.subVectors = function(a, b) {
    return new Vector(a.x - b.x, a.y - b.y);
  }
  this.get_x = function() { return x; }
  this.get_y = function() { return y; }

  this.equals = function(v) {
    //console.log(v);
    return this.x == v.x && this.y == v.y;
  }

  this.copy = function(a) {
    x = a.x;
    y = a.y;
    this.rad_ = a.rad_;
    return this;
  }

  this.sub = function(a) {
    ////console.log("sub called " + this.x + " " + a.x);
    return new Vector(this.x - a.x, this.y - a.y);
  }
  this.ortho = function() {
    return new Vector(this.y, - this.x);
  }
  this.distance_to = function(point) {
    return this.sub(point).length();
  }

  this.multiplyScalar = function(k) {
    return new Vector(this.x * k, this.y * k);
  }

  this.rad2 = function() {
    return this.rad2_;
    //return this.x * this.x + this.y * this.y;
  }

  this.add = function(a) {
    return new Vector(this.x + a.x, this.y + a.y);
  }

  this.dot = function(v) {
    return (this.x * v.x + this.y * v.y);
  }
  this.length = function() {
    return Math.sqrt(this.rad2_);
  }

  this.asVector3 = function() {
    return new THREE.Vector3(this.x, this.y, 0);
  }

  this.toString = function() {
    return "Vertex { x: " + this.x + ", y: " + this.y + "}";
  }
}

function handleLoad(e) {
  //console.log("load event occured");
    init();
    animate();
}

window.addEventListener('load', handleLoad, false);
