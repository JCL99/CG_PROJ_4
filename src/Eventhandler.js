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
  			stopAnimation = !stopAnimation;
  			break;

  		case 87: //"W"  wireframe
  			showWireframe = !showWireframe;
        	break;

        case 76: //"L" desliga o calculo da luz
        	isBasic = !isBasic;
        	break;

        case 66: //"B" activate/deactivate ball motion
  			moveBall = !moveBall;
				monaLisaBall.velocity = 0.3;
				monaLisaBall.step = 0.01;
  			break;


		case 68: //"D" desliga luz direcional
			directionalLightON = !directionalLightON;
			break;

		case 80: //"P" desliga a luz pontual
			pointLightON = !pointLightON;
			break;

		}

 	}

	onKeyUp(event){ 'use strict';
  	switch(event.keyCode){
  		case 66: //"B" activate/deactivate ball motion

  			break;

  		case 83:
  			if(stopAnimation){
  				// cancelAnimationFrame(frameId);
  				// stopAnimation != stopAnimation;
  			} else {
  				//requestAnimationFrame(animate);
  			}
  			break;

  		case 87: //"W"  wireframe
  			monaLisaBall.changeMaterial();
  			dice.changeMaterial();
  			chessBoard.changeMaterial();
        	break;


  		case 76:
  			monaLisaBall.changeMaterial();
  			dice.changeMaterial();
  			chessBoard.changeMaterial();
  			break;

  		case 68: //"D" desliga luz direcional
  			if(!directionalLightON){
  				boardDirectionalLight.intensity = 0;
  			} else if(directionalLightON){
  				boardDirectionalLight.intensity = 2;
  			}
			break;

		case 80: //"P" desliga a luz pontual

			if(!pointLightON){
  				boardPointlight.intensity = 0;
  			} else if(pointLightON){
  				boardPointlight.intensity = 3;
  			}
			break;

		}
}


	handlePossibleEvents(deltaTime){

		if(moveBall){
			monaLisaBall.getObject3D().update(deltaTime);
		}

	}

}
