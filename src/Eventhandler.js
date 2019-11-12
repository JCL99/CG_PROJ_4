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

		}
 	}

	onKeyUp(event){ 'use strict';
  	switch(event.keyCode){

		}
	}
}
