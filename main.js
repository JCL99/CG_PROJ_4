var camera, scene, renderer, eventHandler;
var perspectiveCamera, ortographicCamera, currentCamera;
var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;
var aspect = SCREEN_HEIGHT/SCREEN_WIDTH;

var chessBoard;

function createScene(){ 'use strict';
	scene = new THREE.Scene();

	var light = new THREE.AmbientLight( 0x404040 ); // soft white light
 	scene.add( light );

	chessBoard = new ChessBoard(0, 0, 0, 50);
	scene.add(chessBoard.getObject3D());
}

function createCameras(){ 'use strict';
	perspectiveCamera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
  perspectiveCamera.position.set(50, 50, 50);

  ortographicCamera = new THREE.OrthographicCamera(1999/2, 0, 1999/4 + 10*aspect , 1999/4 - 10*aspect, 1, 1000);
  ortographicCamera.position.set(new THREE.Vector3(60, 0, 0));

  currentCamera = perspectiveCamera;
  currentCamera.lookAt(scene.position);
}

function render(){ 'use strict';
	renderer.render(scene, currentCamera);
}

function update(){ 'use strict';
	// Pretend something cool is happening pls
}

function init(){ 'use strict';
	renderer = new THREE.WebGLRenderer({antialias: true, fullscreen: true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  eventHandler = new EventHandler();
	window.addEventListener("keydown", eventHandler.onKeyDown);
  window.addEventListener("keyup", eventHandler.onKeyUp);
  window.addEventListener("resize", eventHandler.onResize);

  createScene();
  createCameras();
  render();
}

function animate(){'use strict';
	requestAnimationFrame(animate);

	update();
	render();
}
