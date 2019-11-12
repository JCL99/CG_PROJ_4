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

		texture = new THREE.TextureLoader().load('assets/ChessBoard.png');
		texture.wrapS = THREE.RepeatWrapping;
		texture.wrapT = THREE.RepeatWrapping;
		texture.repeat.set(1, 1);

		geometry = new THREE.PlaneGeometry(this.width, this.height, this.segments);

		material = new THREE.MeshLambertMaterial({map : texture});
		material.side = THREE.DoubleSide;

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
