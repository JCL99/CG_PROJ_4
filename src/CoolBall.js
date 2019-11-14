class CoolBall{
  constructor(x, y, z, radius){
    this.Object3D = new THREE.Object3D();
    this.x = x, this.y = y, this.z = z;
    this.radius = radius;
    this.segments = 32;

    this.velocity = new THREE.Vector3(0,0,0);
    this.momentum = null;
    
    this.materials = new Array(3);
    this.mesh = null;


    this.askGodForBall();
  }

  askGodForBall(){
    console.log("The god of THREEJS will send a ball through an invisible socket using GTP(god transfer protocol......)");
		var  geometry, mapLoader, texture;

    mapLoader = new THREE.TextureLoader();
    texture = mapLoader.load('../assets/MonaLisa.jpg');

    geometry = new THREE.SphereGeometry(this.radius, this.segments, this.segments);
    geometry.computeVertexNormals();

    this.materials[0] = new THREE.MeshPhongMaterial({map:texture, shininess:30, specular:0x444444});

    this.materials[1] = new THREE.MeshBasicMaterial({color : Math.random() * 0xffffff, wireframe : false});
    this.materials[2] = new THREE.MeshBasicMaterial({color : Math.random() * 0xffffff, wireframe : true});



    this.mesh = new THREE.Mesh(geometry, this.materials[0]);

    this.Object3D.add(this.mesh);
    this.Object3D.position.set(this.x, this.y + this.radius, this.z);
    this.Object3D.rotateY(-Math.PI/2);
  }

  getObject3D(){
    return this.Object3D;
  }

  changeMaterial(){
      if(isBasic && !showWireframe){
          this.mesh.material = this.materials[1];
      } else if (showWireframe){
          this.mesh.material = this.materials[2];
      } else if (!isBasic && !showWireframe){
        this.mesh.material = this.materials[0];
      } 
  }

    

  update(deltaTime){

  }
}
