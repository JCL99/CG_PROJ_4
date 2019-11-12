class Dice{
  constructor(x, y, z, size){
    this.Object3D = new THREE.Object3D();
    this.x = x, this.y = y, this.z = z;
    this.size = size;
    this.segments = 32;

    this.massCenter = new THREE.Group();

    this.thisTimeJustCallTheStupidFunction();
  }

  thisTimeJustCallTheStupidFunction(){
    console.log("Ok :( I feel like u don't like me, javascript... :("); //Ya, isto n presta lmao
    var mesh, geometry, material, mapLoader, texture, bumpMap;

    mapLoader = new THREE.TextureLoader();

    var texture1 = mapLoader.load('../assets/DiceOne.png');
    var texture2 = mapLoader.load('../assets/DiceTwo.png');
    var texture3 = mapLoader.load('../assets/DiceThree.png');
    var texture4 = mapLoader.load('../assets/DiceFour.png');
    var texture5 = mapLoader.load('../assets/DiceFive.png');
    var texture6 = mapLoader.load('../assets/DiceSix.png');

    var materials = [
      new THREE.MeshPhongMaterial({map: texture1, bumpMap:texture1, bumpScale:1}),
      new THREE.MeshPhongMaterial({map: texture2, bumpMap:texture2, bumpScale:1}),
      new THREE.MeshPhongMaterial({map: texture3, bumpMap:texture3, bumpScale:1}),
      new THREE.MeshPhongMaterial({map: texture4, bumpMap:texture4, bumpScale:1}),
      new THREE.MeshPhongMaterial({map: texture5, bumpMap:texture5, bumpScale:1}),
      new THREE.MeshPhongMaterial({map: texture6, bumpMap:texture6, bumpScale:1})
    ];

    var faceMaterial = new THREE.MeshFaceMaterial(materials);

    geometry = new THREE.BoxGeometry(this.size, this.size, this.size, this.segments, this.segments, this.segments);
    geometry.computeVertexNormals();

    mesh = new THREE.Mesh(geometry, faceMaterial);
    mesh.rotateZ(Math.PI/4);
    //mesh.rotateX(Math.asin(this.size/(Math.sqrt(3*(this.size*this.size)))));
    mesh.rotateX(Math.atan(1/Math.sqrt(2)));
    this.Object3D.add(mesh);
    this.Object3D.add(new THREE.AxesHelper(15));
    this.Object3D.position.set(this.x, this.y + Math.sqrt(3 * (this.size * this.size))/2, this.z);
  }

  getObject3D(){
    return this.Object3D;
  }
}
