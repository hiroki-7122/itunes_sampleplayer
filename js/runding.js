function canvas(){
   var count=0;
   var select=0;
   var boxclick_z=0;
   var imgURL_0;
   var radius=Math.PI/2;
   var y=0;
   var scene = new THREE.Scene();
   var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
   var renderer = new THREE.WebGLRenderer();
   renderer.setSize( window.innerWidth, window.innerHeight );
   // レンダラの背景色を白に、透明度を100%に設定
   renderer.setClearColor( 0xffffff, 1 );
   document.body.appendChild( renderer.domElement );

   var geometry = new THREE.CubeGeometry(1,1,1);
   var material = new THREE.MeshLambertMaterial( { color: 0x800300} );
   var cube = new THREE.Mesh( geometry, material );
   cube.position.set( 0, 0, 5 );
   scene.add( cube );

   var light = new THREE.SpotLight(0xffffff,2);
   light.position.set( 0, 500, 500 );
   light.target.position.set( 0, 0, 0 );
   scene.add( light );
   if(count==0 && imgURL[0] && imgURL[0]!=="0"){
       count=1;
       imgURL_0=imgURL[0];
       for(k=0;k<10;k++){
         if(!imgURL[k]){imgURL[k]=imgURL[0];
         }
           var texture = THREE.ImageUtils.loadTexture( imgURL[k] );
            texture.anisotropy = renderer.getMaxAnisotropy();
            var geometry = new THREE.CubeGeometry( 3, 3, 3 );
            var materialbox = new THREE.MeshBasicMaterial( { map: texture} );
            var boxZ = new THREE.Mesh( geometry, materialbox );
            boxZ.position.set(-(Math.random() * 50)+25,-(Math.random() * 24)+12,-(Math.random() * 36)-10);
            boxZ.rotation.set(Math.random()*100,Math.random()*100,Math.random()*100);
            scene.add( boxZ );
      }
      imgURL[0]="0";
  }
  if(count==1){
   var geometry = new THREE.CubeGeometry( 3, 3, 3 );
   var texture = THREE.ImageUtils.loadTexture( imgURL_0 );
    texture.anisotropy = renderer.getMaxAnisotropy();
   var materialbox = new THREE.MeshBasicMaterial( { map: texture} );
   var boxA = new THREE.Mesh( geometry, materialbox );
   boxA.position.set(-15,8,0);
   scene.add( boxA );

   var texture = THREE.ImageUtils.loadTexture( imgURL[1] );
    texture.anisotropy = renderer.getMaxAnisotropy();
   var materialbox = new THREE.MeshBasicMaterial( { map: texture} );
   var boxB = new THREE.Mesh( geometry, materialbox );
   boxB.position.set(-20,-8,0);
   scene.add( boxB );

   var texture = THREE.ImageUtils.loadTexture( imgURL[2] );
    texture.anisotropy = renderer.getMaxAnisotropy();
   var materialbox = new THREE.MeshBasicMaterial( { map: texture} );
   var boxC = new THREE.Mesh( geometry, materialbox );
   boxC.position.set(10,10,0);
   scene.add( boxC );

   var texture = THREE.ImageUtils.loadTexture( imgURL[3] );
    texture.anisotropy = renderer.getMaxAnisotropy();
   var materialbox = new THREE.MeshBasicMaterial( { map: texture} );
   var boxD = new THREE.Mesh( geometry, materialbox );
   boxD.position.set(25,-10,0);
   scene.add( boxD );

/*
   var texture = THREE.ImageUtils.loadTexture( imgURL[4] );
    texture.anisotropy = renderer.getMaxAnisotropy();
   var materialbox = new THREE.MeshBasicMaterial( { map: texture} );
   var boxE = new THREE.Mesh( geometry, materialbox );
   boxE.position.set(25,-10,0);
   scene.add( boxE );

   var texture = THREE.ImageUtils.loadTexture( imgURL[5] );
    texture.anisotropy = renderer.getMaxAnisotropy();
   var materialbox = new THREE.MeshBasicMaterial( { map: texture} );
   var boxF = new THREE.Mesh( geometry, materialbox );
   boxF.position.set(25,-10,0);
   scene.add( boxF );

   var texture = THREE.ImageUtils.loadTexture( imgURL[6] );
    texture.anisotropy = renderer.getMaxAnisotropy();
   var materialbox = new THREE.MeshBasicMaterial( { map: texture} );
   var boxG = new THREE.Mesh( geometry, materialbox );
   boxG.position.set(25,-10,0);
   scene.add( boxG );

   var texture = THREE.ImageUtils.loadTexture( imgURL[7] );
    texture.anisotropy = renderer.getMaxAnisotropy();
   var materialbox = new THREE.MeshBasicMaterial( { map: texture} );
   var boxH = new THREE.Mesh( geometry, materialbox );
   boxH.position.set(25,-10,0);
   scene.add( boxH );

   var texture = THREE.ImageUtils.loadTexture( imgURL[8] );
    texture.anisotropy = renderer.getMaxAnisotropy();
   var materialbox = new THREE.MeshBasicMaterial( { map: texture} );
   var boxI = new THREE.Mesh( geometry, materialbox );
   boxI.position.set(25,-10,0);
   scene.add( boxI );

   var texture = THREE.ImageUtils.loadTexture( imgURL[9] );
    texture.anisotropy = renderer.getMaxAnisotropy();
   var materialbox = new THREE.MeshBasicMaterial( { map: texture} );
   var boxJ = new THREE.Mesh( geometry, materialbox );
   boxJ.position.set(25,-10,0);
   scene.add( boxJ );*/
 }

   for(i=0;i<=20;i++){
   var geometry = new THREE.CubeGeometry( 5, 20, 1 );
   var materialbox = new THREE.MeshLambertMaterial( { color: 0x9f9f9f,transparent: true,  opacity: 0.5} );
   var  build= new THREE.Mesh( geometry, materialbox );
   build.position.set(10, -5, -i*10);
   scene.add( build );
   var geometry = new THREE.CubeGeometry( 5, 20, 1 );
   var materialbox = new THREE.MeshLambertMaterial( { color: 0x9f9f9f,transparent: true,  opacity: 0.5} );
   var  build= new THREE.Mesh( geometry, materialbox );
   build.position.set(-10, -5, -i*10);
   scene.add( build );
 }

   function render() {
       requestAnimationFrame(render);
       cube.rotation.x += 0.1;
       cube.rotation.y += 0.1;
       if(count==0 && imgURL[0] && imgURL[0]!=="0"){
         canvas();
       }


if(count==1){
  //console.log(select);
  if(select==1 && boxclick_z>camera.position.z-15){
    select=0;
  }
       if(cube.position.z>=-30){
       cube.position.z -=0.1;
       boxA.position.z=cube.position.z+5;
       boxB.position.z=cube.position.z+8;
       boxC.position.z=cube.position.z+6;
       boxD.position.z=cube.position.z;
     }else{
       camera.position.z-=0.01;
       boxA.position.z-=0.01;
       boxB.position.z-=0.01;
       boxC.position.z-=0.01;
       boxD.position.z-=0.01;
       var mouse_x,mouse_y;
       renderer.domElement.addEventListener('mousemove', function(e){
         prevPosition = {x: e.pageX, y: e.pageY};
         mouse_x=prevPosition.x/(window.innerWidth/2)-1;
         mouse_y=prevPosition.y/(window.innerHeight/2)-1;
       if(mouse_x<=-0.35 && mouse_x>=-0.6 &&mouse_y<=-0.25 && mouse_y>=-0.5){
           boxA.scale.x=2;
           boxA.scale.y=2;
           boxA.scale.z=2;
           boxA.rotation.x +=0.0001;
           boxA.rotation.y +=0.0001;
          }
          else{
            boxA.scale.x=1;
            boxA.scale.y=1;
            boxA.scale.z=1;
          }
        if(mouse_x<=-0.55 && mouse_x>=-0.8 &&mouse_y<=0.7 && mouse_y>=0.3){
            boxB.scale.x=2;
            boxB.scale.y=2;
            boxB.scale.z=2;
            boxB.rotation.x +=0.0001;
            boxB.rotation.y +=0.0001;
           }
           else{
            boxB.scale.x=1;
            boxB.scale.y=1;
            boxB.scale.z=1;
             }
        if(mouse_x<=0.5 && mouse_x>=0.2 &&mouse_y<=-0.28 && mouse_y>=-0.6){
            boxC.scale.x=2;
            boxC.scale.y=2;
            boxC.scale.z=2;
            boxC.rotation.x -=0.0001;
            boxC.rotation.y -=0.0001;
            }
        else{
            boxC.scale.x=1;
            boxC.scale.y=1;
            boxC.scale.z=1;
            }
        if(mouse_x<=0.8 && mouse_x>=0.5 &&mouse_y<=0.7 && mouse_y>=0.3){
            boxD.scale.x=2;
            boxD.scale.y=2;
            boxD.scale.z=2;
            boxD.rotation.x -=0.0001;
            boxD.rotation.y -=0.0001;
            }
        else{
            boxD.scale.x=1;
            boxD.scale.y=1;
            boxD.scale.z=1;
            }
        },false);
        renderer.domElement.addEventListener('mousedown', function(e){
          prevPosition = {x: e.pageX, y: e.pageY};
          mouse_x=prevPosition.x/(window.innerWidth/2)-1;
          mouse_y=prevPosition.y/(window.innerHeight/2)-1;
        if(mouse_x<=-0.35 && mouse_x>=-0.6 &&mouse_y<=-0.25 && mouse_y>=-0.5 && select==0){
          var texture = THREE.ImageUtils.loadTexture( imgURL_0 );
           texture.anisotropy = renderer.getMaxAnisotropy();
          var geometry = new THREE.CubeGeometry( 3, 3, 0.1 );
          var materialbox = new THREE.MeshBasicMaterial( { map: texture} );
          var boxclick = new THREE.Mesh( geometry, materialbox );
          boxclick_z=boxA.position.z+10;
          boxclick.position.set(5,0,boxclick_z);
          scene.add( boxclick );
          select=1;
           }
         if(mouse_x<=-0.55 && mouse_x>=-0.8 &&mouse_y<=0.7 && mouse_y>=0.3 && select==0){
           var texture = THREE.ImageUtils.loadTexture( imgURL[1] );
            texture.anisotropy = renderer.getMaxAnisotropy();
           var geometry = new THREE.CubeGeometry( 3, 3, 0.1 );
           var materialbox = new THREE.MeshBasicMaterial( { map: texture} );
           var boxclick = new THREE.Mesh( geometry, materialbox );
           boxclick_z=boxA.position.z+10;
           boxclick.position.set(-5,0,boxclick_z);
           scene.add( boxclick );
           select=1;
            }
         if(mouse_x<=0.5 && mouse_x>=0.2 &&mouse_y<=-0.28 && mouse_y>=-0.6 && select==0){
           var texture = THREE.ImageUtils.loadTexture( imgURL[2] );
            texture.anisotropy = renderer.getMaxAnisotropy();
           var geometry = new THREE.CubeGeometry( 3, 3, 0.1 );
           var materialbox = new THREE.MeshBasicMaterial( { map: texture} );
           var boxclick = new THREE.Mesh( geometry, materialbox );
           boxclick_z=boxA.position.z+10;
           boxclick.position.set(5,0,boxclick_z);
           scene.add( boxclick );
           select=1;
             }
         if(mouse_x<=0.8 && mouse_x>=0.5 &&mouse_y<=0.7 && mouse_y>=0.3 && select==0){
           var texture = THREE.ImageUtils.loadTexture( imgURL[3] );
            texture.anisotropy = renderer.getMaxAnisotropy();
           var geometry = new THREE.CubeGeometry( 3, 3, 0.1 );
           var materialbox = new THREE.MeshBasicMaterial( { map: texture} );
           var boxclick = new THREE.Mesh( geometry, materialbox );
           boxclick_z=boxA.position.z+10;
           boxclick.position.set(-5,0,boxclick_z);
           scene.add( boxclick );
           select=1;
             }
         },false);
     }
   }
       renderer.render(scene, camera);
   }
   render();
 };
