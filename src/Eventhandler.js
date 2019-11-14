class EventHandler{
	constructor(){ 'use strict';

	}

	onResize(){ 'use strict';
    	if(currentCamera != ortographicCamera){
	      this.renderer.setSize(window.innerWidth, window.innerHeight);

	      if (window.innerHeight > 0 && window.innerWidth > 0) {
	          this.currentCamera.aspect = window.innerWidth / window.innerHeight;
	          this.currentCamera.updateProjectionMatrix();
      }
    } else{

		var new_aspect = window.innerHeight/window.innerWidth;

		currentCamera.top = 0*new_aspect;
		currentCamera.bottom = 0*new_aspect;

		renderer.setSize( window.innerWidth,  window.innerHeight);
      	currentCamera.updateProjectionMatrix();
    }
  }

	onKeyDown(event){ 'use strict';
  	switch(event.keyCode){
  		case 83: //"S" stop animation
  			stopAnimation != stopAnimation;
  			break;

  		case 87:
        	scene.traverse(function (node) {
	            if (node instanceof THREE.Mesh) {
	              node.material.wireframe = !node.material.wireframe;
	            }});
        	break;	

        case 76:
        	isBasic = !isBasic;
        	console.log("hey bitch");
        	break;
		}


		
 	}

	onKeyUp(event){ 'use strict';
  	switch(event.keyCode){
  		case 66: //"B" activate/deactivate ball motion
  			moveBall != moveBall;
  			break;

  		case 83:
  			if(stopAnimation){
  				cancelAnimationFrame(frameId);
  				stopAnimation != stopAnimation;
  			} else {
  				requestAnimationFrame(animate);
  			}
  			break;
  		case 76:
  			if (isBasic){
  				scene.traverse(function(node) {
  					if (node instanceof THREE.Mesh){
  						node.material.dispose();
  						node.material = new THREE.MeshBasicMaterial({color: node.material.color});
  						console.log("aqui");
  					}
  				});
  			}
		}
	}

	handlePossibleEvents(deltaTime){

		if(moveBall){
			monaLisaBall.getObject3D().rotateY(0.5);
		}

	}
}
