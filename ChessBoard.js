class ChessBoard{
	constructor(x, y, z, size){
		this.Object3D = new THREE.Object3D();
		this.x = x, this.y = y, this.z = z;
		this.width = size;
		this.height = size;
		this.segments = 32;

		this.magicallyCreateChessBoard();
	}

	magicallyCreateChessBoard(){
		console.log("Magic stuff gonna happen. Behold the power of javascript(ZERO -.-)!");
		var mesh, geometry, material, mapLoader, texture, woodBumpMap;

		mapLoader = new THREE.TextureLoader();
		texture = mapLoader.load('assets/ChessBoard.jpg');
		woodBumpMap = mapLoader.load('assets/WoodBumpMap.jpg');

		material = new THREE.MeshPhongMaterial({side:THREE.DoubleSide, map:texture, bumpMap:woodBumpMap, bumpScale:1});

		geometry = new THREE.PlaneGeometry(this.width, this.height, this.segments);
		geometry.computeVertexNormals();

		mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(this.x, this.y, this.z);

		this.Object3D.add(mesh);
		this.Object3D.add(new THREE.AxesHelper(20));
		this.Object3D.rotateX(Math.PI/2);
	}

	getObject3D(){
		return this.Object3D;
	}
}
