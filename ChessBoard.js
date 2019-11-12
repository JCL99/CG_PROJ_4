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
		var mesh, geometry, material, texture;

		texture = new THREE.TextureLoader().load("/assets/ChessBoard.png");
		texture.wrapS = THREE.RepeatWrapping;
		texture.wrapT = THREE.RepeatWrapping;
		//texture.repeat.set(6, 6);

		geometry = new THREE.PlaneGeometry(this.width, this.height, this.segments);

		material = new THREE.MeshBasicMaterial({map : texture});

		mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(0,0,0);
		//mesh.rotateZ(Math.PI/2);
		//mesh.position.set(this.x, this.y, this.z);

		this.Object3D.add(mesh);
	}

	getObject3D(){
		return this.Object3D;
	}
}
