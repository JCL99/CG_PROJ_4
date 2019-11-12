class CoolBall{
  constructor(x, y, z, radius){
    this.Object3D = new THREE.Object3D();
    this.x = x, this.y = y, this.z = z;
    this.radius = radius;
    this.segments = 32;

    this.askGodForBall();
  }

  askGodForBall(){
    console.log("The god of THREEJS will send a ball through an invisible socket using GTP(god transfer protocol......)");
		var mesh, geometry, material, mapLoader, texture;

    mapLoader = new THREE.TextureLoader();
    texture = mapLoader.load('assets/MonaLisa.jpg');

    geometry = new THREE.SphereGeometry(this.radius, this.segments, this.segments);
    geometry.computeVertexNormals();

    material = new THREE.MeshPhongMaterial({map:texture});

    mesh = new THREE.Mesh(geometry, material);
    this.Object3D.add(mesh);
    this.Object3D.position.set(0, this.radius, 0);
    this.Object3D.rotateY(-Math.PI/2);
  }

  getObject3D(){
    return this.Object3D;
  }
}
