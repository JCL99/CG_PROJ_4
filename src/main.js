// Classic setup coppied from Maria's work :)
var camera, scene, renderer, eventHandler, frameId;
var perspectiveCamera, ortographicCamera, currentCamera;
var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;
var aspect = SCREEN_HEIGHT/SCREEN_WIDTH;

// Scene Object3D's
var chessBoard, monaLisaBall, dice;

function createScene(){ 'use strict';
	scene = new THREE.Scene();

	// Chess board :)
	chessBoard = new ChessBoard(0, 0, 0, 50);
	scene.add(chessBoard.getObject3D());

	// Mona Lisa ball :)
	monaLisaBall = new CoolBall(-10, 0, -10, 7);
	scene.add(monaLisaBall.getObject3D());

	// Dice :)
	dice = new Dice(10, 0, 10, 7);
	scene.add(dice.getObject3D());

	// Lights, axis, ..... :)
	scene.add(new THREE.AmbientLight(0x444444));
	//var chessBoardSpotlight = new THREE.SpotLight({intensity:1.3, target:chessBoard.getObject3D()});
	var chessBoardSpotlight = new THREE.PointLight(0x444444, 1.3, 75);
  chessBoardSpotlight.position.set(0, 30, 20);
	//chessBoardSpotlight.position.set(0, 100, 0);
  scene.add(chessBoardSpotlight);
	scene.add(new THREE.AxesHelper(25));
}

function createCameras(){ 'use strict';
	perspectiveCamera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
  perspectiveCamera.position.set(0, 20, 50);
	//perspectiveCamera.position.set(0, 50, 0);

  ortographicCamera = new THREE.OrthographicCamera(1999/2, 0, 1999/4 + 10*aspect , 1999/4 - 10*aspect, 1, 1000);
  ortographicCamera.position.set(new THREE.Vector3(60, 0, 0));

  currentCamera = perspectiveCamera;
  currentCamera.lookAt(0,0,0);
	//currentCamera.lookAt(dice.getObject3D().position);
}

function render(){ 'use strict';
	renderer.render(scene, currentCamera);
}

function update(){ 'use strict';
	// Pretend something cool is happening pls
	//chessBoard.getObject3D().rotateZ(0.001);
	monaLisaBall.getObject3D().rotateY(-0.01);
	dice.getObject3D().rotateY(0.07);
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
	frameId = requestAnimationFrame(animate);

	update();
	render();
}
