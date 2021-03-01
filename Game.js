class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
  
       
        }
    
      
  
     
    
  
    play(){
      
    
  
        var x=0;
  
          index=index+1;
  
          x=x+200;
  
          trex[index-1].x=x;
      
  
          if (index === player.index){
            camera.position.x=cars[index-1].x;
            camera.position.y=displayWidth/2;
          }
         
      
  
    
 
    
        }

