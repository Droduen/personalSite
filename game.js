//Start Game
function start(){
    playMusic("mp3s/button.mp3", false);
    const audio = new Audio("mp3s/background.mp3");
    audio.volume = 0.009;
    audio.loop = true;
    audio.play()
    startTimer()
    gemCounter()
    document.getElementById("reset").style.display="block";
    hide("start");
    hide("fire");
    hide("title");
    hide("water")
    loadPlayers();
    loadGems();
    loadFloors();
    loadHazards();
    
    
    waterGravityInterval = setInterval(function(){
          gravity("waterLad");

      },50);
    fireGravityInterval = setInterval(function(){
        gravity("fireMadam");

    },50);
 

}

function won(){
    clearInterval(timer)
    let finalTime = document.getElementById("time").innerHTML
    deleteDiv("screen");
    document.getElementById("winScreen").style.display = "block"
    setText("won", "Your final time was " + finalTime + " seconds!")
    let grade;
    if(finalTime <= 60){
        grade = "A"
    } else if(finalTime <= 120){
        grade="B"
    }else if(finalTime <= 180){
        grade="C"
    }else if(finalTime <= 240){
        grade="D"
    }
    else if(finalTime > 240){
        grade="F"
    }
    setText("grade", "GRADE: " + grade)
}

let timer;
function startTimer(){
    let time = 0;
    setText("timerText", "Timer: ")
timer = setInterval(function(){
    time+=1
    setText("time", time);
},1000)

}

function gemCounter(){
    setText("gemCounter", "GEMS: ")
    setInterval(function(){
        setText("gems",hiddenGems())
        
    },50)
    
}

//Misc functions
function playMusic(mp3, tf){
    let music = new Audio(mp3);
    
    music.volume=0.005;
    music.play();
    music.loop = tf;
}
  

function hide(id){
    document.getElementById(id).style.display = "none"
}

function setStyle(id,styling,val){
    document.getElementById(id).style[styling] = val;
}

function setText(id, text){
    document.getElementById(id).innerHTML = text
}

function getStyle(id, styling){
    return parseInt(document.getElementById(id).style[styling])
}

function deleteDiv(id) {
    let div = document.getElementById(id);
    if (div) {
      div.parentNode.removeChild(div);
    }
  }
function hiddenGems(){
    let captured =0
    for(let gem in Gems){
        if(document.getElementById(gem).style.display == 'none'){
            captured++
            if(captured == 11){
                deleteDiv("floor22")
                if("floor22" in Floors){
                playMusic("mp3s/door.mp3",false)
                delete Floors["floor22"]
                }
            }
            if(captured==13){
                deleteDiv("floor28")
                if("floor28" in Floors){
                playMusic("mp3s/door.mp3",false)
                delete Floors["floor28"]
                }
            }
            
            if(captured == 27){
                won();
            }
        }

    
    }
    return captured
}
//Gems

let Gems ={
    gem1:{
        height:"20px",
        left:"290px",
        width:"20px",
        top:"5px",
        position:"absolute",
        "background-size":"cover",
        "backgroundImage":"url('images/gem.png')",
        display:"block"
    }, 
    gem2:{
        height:"20px",
        left:"290px",
        width:"20px",
        top:"55px",
        position:"absolute",
        "background-size":"cover",
        "backgroundImage":"url('images/gem.png')",
        display:"block"
    },
    gem3:{
        height:"20px",
        left:"440px",
        width:"20px",
        top:"5px",
        position:"absolute",
        "background-size":"cover",
        "backgroundImage":"url('images/gem.png')",
        display:"block"
    }, 
    gem4:{
        height:"20px",
        left:"440px",
        width:"20px",
        top:"55px",
        position:"absolute",

        "background-size":"cover",
        "backgroundImage":"url('images/gem.png')",
        display:"block"
    },
    gem5:{
        height:"10px",
        left:"475px",
        width:"10px",
        top:"150px",
        position:"absolute",

        "background-size":"cover",
        "backgroundImage":"url('images/gem.png')",
        display:"block"
    },
    gem6:{
        height:"10px",
        left:"415px",
        width:"10px",
        top:"140px",
        position:"absolute",

        "background-size":"cover",
        "backgroundImage":"url('images/gem.png')",
        display:"block"
    },
    gem7:{
        height:"10px",
        left:"355px",
        width:"10px",
        top:"150px",
        position:"absolute",
        "background-size":"cover",
        "backgroundImage":"url('images/gem.png')",
        display:"block"
    },
    gem8:{
        height:"20px",
        left:"140px",
        width:"20px",
        top:"210px",
        position:"absolute",
        "background-size":"cover",
        "backgroundImage":"url('images/gem.png')",
        display:"block"

    },
    gem9:{
        height:"20px",
        left:"350px",
        width:"20px",
        top:"210px",
        position:"absolute",
        "background-size":"cover",
        "backgroundImage":"url('images/gem.png')",
        display:"block"

    },
    gem10:{
        height:"20px",
        left:"320px",
        width:"20px",
        top:"290px",
        position:"absolute",
        "background-size":"cover",
        "backgroundImage":"url('images/gem.png')",
        display:"block"

    },
    gem11:{
        height:"20px",
        left:"260px",
        width:"20px",
        top:"290px",
        position:"absolute",
        "background-size":"cover",
        "backgroundImage":"url('images/gem.png')",
        display:"block"

    },
    gem12:{
        height:"20px",
        left:"40px",
        width:"20px",
        top:"570px",
        position:"absolute",
        "background-size":"cover",
        "backgroundImage":"url('images/gem.png')",
        display:"block"
    },    
    gem13:{
        height:"20px",
        left:"80px",
        width:"20px",
        top:"570px",
        position:"absolute",
        "background-size":"cover",
        "backgroundImage":"url('images/gem.png')",
        display:"block"
    }, 
    gem14:{
        height:"20px",
        left:"120px",
        width:"20px",
        top:"570px",
        position:"absolute",
        "background-size":"cover",
        "backgroundImage":"url('images/gem.png')",
        display:"block"
    },
    gem15:{
        height:"20px",
        left:"160px",
        width:"20px",
        top:"570px",
        position:"absolute",
        "background-size":"cover",
        "backgroundImage":"url('images/gem.png')",
        display:"block"
    },
    gem16:{
        height:"20px",
        left:"200px",
        width:"20px",
        top:"570px",
        position:"absolute",
        "background-size":"cover",
        "backgroundImage":"url('images/gem.png')",
        display:"block"
    },
    gem17:{
        height:"20px",
        left:"240px",
        width:"20px",
        top:"570px",
        position:"absolute",
        "background-size":"cover",
        "backgroundImage":"url('images/gem.png')",
        display:"block"
    },
    gem18:{
        height:"20px",
        left:"280px",
        width:"20px",
        top:"570px",
        position:"absolute",
        "background-size":"cover",
        "backgroundImage":"url('images/gem.png')",
        display:"block"
    },
    gem19:{
        height:"20px",
        left:"320px",
        width:"20px",
        top:"570px",
        position:"absolute",
        "background-size":"cover",
        "backgroundImage":"url('images/gem.png')",
        display:"block"
    },
    gem20:{
        height:"20px",
        left:"360px",
        width:"20px",
        top:"570px",
        position:"absolute",
        "background-size":"cover",
        "backgroundImage":"url('images/gem.png')",
        display:"block"
    },
    gem21:{
        height:"20px",
        left:"400px",
        width:"20px",
        top:"570px",
        position:"absolute",
        "background-size":"cover",
        "backgroundImage":"url('images/gem.png')",
        display:"block"
    },
    gem22:{
        height:"20px",
        left:"440px",
        width:"20px",
        top:"570px",
        position:"absolute",
        "background-size":"cover",
        "backgroundImage":"url('images/gem.png')",
        display:"block"
    },
    gem23:{
        height:"20px",
        left:"480px",
        width:"20px",
        top:"570px",
        position:"absolute",
        "background-size":"cover",
        "backgroundImage":"url('images/gem.png')",
        display:"block"
    },
    gem24:{
        height:"20px",
        left:"520px",
        width:"20px",
        top:"570px",
        position:"absolute",
        "background-size":"cover",
        "backgroundImage":"url('images/gem.png')",
        display:"block"
    },
    gem25:{
        height:"20px",
        left:"560px",
        width:"20px",
        top:"570px",
        position:"absolute",
        "background-size":"cover",
        "backgroundImage":"url('images/gem.png')",
        display:"block"
    },
    gem26:{
        height:"20px",
        left:"130px",
        width:"20px",
        top:"380px",
        position:"absolute",
        "background-size":"cover",
        "backgroundImage":"url('images/gem.png')",
        display:"block"
    },
    gem27:{
        height:"20px",
        left:"330px",
        width:"20px",
        top:"365px",
        position:"absolute",
        "background-size":"cover",
        "backgroundImage":"url('images/gem.png')",
        display:"block"
    }

    


}

function loadGems(){
    for(let gem in Gems){
        createDivWithId(gem)
        for(let styles in Gems[gem]){
            
            
            setStyle(gem,styles,Gems[gem][styles])
        }
    }
}

/*
    wHazards1:{
        height:"20px",
        left:"300px",
        width:"200px",
        top:"560px",
        position:"absolute",
        "background-color":"lightBlue",
        display:"block"

    } */

    /*
    lHazards1:{
        height:"20px",
        left:"300px",
        width:"200px",
        top:"560px",
        position:"absolute",
        "background-color":"lightBlue",
        display:"block"

    } */
//Hazards

let waterHazards ={
    wHazards1:{
        height:"10px",
        left:"250px",
        width:"100px",
        top:"80px",
        position:"absolute",
        "background-color":"blue",
        display:"block"

    },
    wHazards2:{
        height:"10px",
        left:"460px",
        width:"40px",
        top:"160px",
        position:"absolute",
        "background-color":"blue",
        display:"block"

    },
    wHazards3:{
        height:"10px",
        left:"400px",
        width:"40px",
        top:"160px",
        position:"absolute",
        "background-color":"green",
        display:"block"

    }, 
    wHazards4:{
        width:"150px",
        height:"10px",
        "background-color":"blue",
        top:"240px",
        left:"70px",
        position:"absolute"  
    },
    wHazards5:{
        width:"40px",
        height:"20px",
        "background-color":"blue",
        top:"330px",
        left:"560px",
        position:"absolute" 
    },
    wHazards6:{
        width:"22px",
        height:"20px",
        "background-color":"blue",
        top:"390px",
        left:"0px",
        position:"absolute" 
    }

    
}

let lavaHazards = {
    lHazards1:{
        height:"10px",
        left:"400px",
        width:"100px",
        top:"80px",
        position:"absolute",
        "background-color":"red",
        display:"block"

    },
    lHazards2:{
        height:"10px",
        left:"400px",
        width:"40px",
        top:"160px",
        position:"absolute",
        "background-color":"green",
        display:"block"

    },
    lHazards3:{
        height:"10px",
        left:"340px",
        width:"40px",
        top:"160px",
        position:"absolute",
        "background-color":"red",
        display:"block"

    }, lHazards4:{
        width:"140px",
        height:"10px",
        "background-color":"red",
        top:"240px",
        left:"240px",
        position:"absolute" 
    }, 
    lHazards5:{
        width:"20px",
        height:"40px",
        "background-color":"red",
        top:"210px",
        left:"320px",
        position:"absolute"  
    },
    lHazards6:{

        width:"40px",
        height:"20px",
        "background-color":"red",
        top:"330px",
        left:"0px",
        position:"absolute" 
    },  
      lHazards7:{
        width:"22px",
        height:"20px",
        "background-color":"red",
        top:"390px",
        left:"578px",
        position:"absolute" 
    }

}

function loadHazards(){
    for(let hazard in waterHazards){
        createDivWithId(hazard)
        for(let styles in waterHazards[hazard]){
            
            
            setStyle(hazard,styles,waterHazards[hazard][styles])
        }
    }
    for(let hazard in lavaHazards){
        createDivWithId(hazard)
        for(let styles in lavaHazards[hazard]){
            
            
            setStyle(hazard,styles,lavaHazards[hazard][styles])
        }
    }
}

//Players
let  Players  = {
    fireMadam:{
        width:"20px",
        height:"20px",
        left: "0px",
        top:"0px",
        position:"absolute",
        jump:1,
        "background-size":"cover",
        "background-position":"center",
        "backgroundImage":"url('images/fireMadam-idle.gif')"
        },
    waterLad:{
        width:"20px",
        height:"20px",
        left: "60px",
        top:"0px",
        position:"absolute",
        jump:1,
        "background-size":"cover",
        "background-position":"center",
        "backgroundImage":"url('images/waterLad-idle.gif')"
        },
}

//Load PLayers

function loadPlayers(){
    for(let player in Players){
        createDivWithId(player);
        for(let styles in Players[player]){
            
            setStyle(player,styles,Players[player][styles])
        }
    }
}

/*
    floor: {
        width:"0px",
        height:"0px",
        "backgroundImage":"url('images/wall.jpg')",
        top:"0px",
        left:"0px",
        position:"absolute"
    },

    */
//obstactles
 const Floors = {
     floor1: {
        width:"640px",
        height:"20px",
        "backgroundImage":"url('images/wall.jpg')",
        top:"600px",
        left:"-20px",
        position:"absolute"

    },

    floor2:{
        width:"20px",
        height:"600px",
        left:"-20px",
        top:"0px",
        position:"absolute",
        "backgroundImage":"url('images/wall.jpg')"

    },
    floor3:{
        width:"20px",
        height:"600px",
        left:"600px",
        top:"0px",
        position:"absolute",
        "backgroundImage":"url('images/wall.jpg')"

    },
    floor4: {
        width:"640px",
        height:"20px",
        "backgroundImage":"url('images/wall.jpg')",
        top:"-20px",
        left:"-20px",
        position:"absolute"

    },
    floor5: {
        width:"250px",
        height:"20px",
        "backgroundImage":"url('images/wall.jpg')",
        top:"80px",
        left:"0px",
        position:"absolute"
    },
    floor6: {
        width:"100px",
        height:"20px",
        "backgroundImage":"url('images/wall.jpg')",
        top:"30px",
        left:"250px",
        position:"absolute"
    },
    floor7: {
        width:"100px",
        height:"10px",
        "backgroundImage":"url('images/wall.jpg')",
        top:"90px",
        left:"250px",
        position:"absolute"
    },
    floor8: {
        width:"50px",
        height:"20px",
        "backgroundImage":"url('images/wall.jpg')",
        top:"80px",
        left:"350px",
        position:"absolute"
    },
    floor9: {
        width:"100px",
        height:"10px",
        "backgroundImage":"url('images/wall.jpg')",
        top:"90px",
        left:"400px",
        position:"absolute"
    },    
    floor10: {
        width:"100px",
        height:"20px",
        "backgroundImage":"url('images/wall.jpg')",
        top:"30px",
        left:"400px",
        position:"absolute"
    },
    floor11: {
        width:"100px",
        height:"20px",
        "backgroundImage":"url('images/wall.jpg')",
        top:"160px",
        left:"500px",
        position:"absolute"
    },
    floor12:{
        width:"40px",
        height:"10px",
        left:"460px",
        "backgroundImage":"url('images/wall.jpg')",
        top:"170px",
        position:"absolute"

    }, floor13:{
        width:"20px",
        height:"20px",
        "backgroundImage":"url('images/wall.jpg')",
        top:"160px",
        left:"440px",
        position:"absolute"
    },
    floor14:{
        width:"40px",
        height:"10px",
        "backgroundImage":"url('images/wall.jpg')",
        top:"170px",
        left:"400px",
        position:"absolute"
    },
    floor15:{
        height:"10px",
        width:"40px",
        "backgroundImage":"url('images/wall.jpg')",
        top:"170px",
        left:"340px",
        position:"absolute" 
    },
    floor16:{
        width:"20px",
        height:"20px",
        "backgroundImage":"url('images/wall.jpg')",
        top:"160px",
        left:"380px",
        position:"absolute"  
    },
    floor17:{
        width:"20px",
        height:"50px",
        "backgroundImage":"url('images/wall.jpg')",
        top:"160px",
        left:"320px",
        position:"absolute"  
    },
    floor18:{
        width:"140px",
        height:"10px",
        "backgroundImage":"url('images/wall.jpg')",
        top:"250px",
        left:"240px",
        position:"absolute"  
    },
    floor19:{
        width:"20px",
        height:"20px",
        "backgroundImage":"url('images/wall.jpg')",
        top:"240px",
        left:"220px",
        position:"absolute"  
    },
    floor20:{
        width:"150px",
        height:"10px",
        "backgroundImage":"url('images/wall.jpg')",
        top:"250px",
        left:"70px",
        position:"absolute"  
    },
    floor21:{
        width:"520px",
        height:"20px",
        "backgroundImage":"url('images/wall.jpg')",
        top:"330px",
        left:"40px",
        position:"absolute" 
    },
    floor22:{
        width:"20px",
        height:"70px",
        "backgroundImage":"url('images/wall.jpg')",
        top:"260px",
        left:"290px",
        position:"absolute" 
    }
    ,
    floor23:{
        width:"100px",
        height:"20px",
        "backgroundImage":"url('images/wall.jpg')",
        top:"390px",
        left:"22px",
        position:"absolute" 
    },    floor24:{
        width:"30px",
        height:"5px",
        "backgroundImage":"url('images/wall.jpg')",
        top:"405px",
        left:"122px",
        position:"absolute" 
    },floor25:{
        width:"10px",
        height:"20px",
        "backgroundImage":"url('images/wall.jpg')",
        top:"390px",
        left:"155px",
        position:"absolute" 
    },floor26:{
        width:"40px",
        height:"5px",
        "backgroundImage":"url('images/wall.jpg')",
        top:"405px",
        left:"175px",
        position:"absolute" 
    },
    floor27:{
        width:"363px",
        height:"20px",
        "backgroundImage":"url('images/wall.jpg')",
        top:"390px",
        left:"215px",
        position:"absolute" 
    },
    floor28:{
        width:"20px",
        height:"40px",
        "backgroundImage":"url('images/wall.jpg')",
        top:"350px",
        left:"215px",
        position:"absolute" 
    },

    
    

    

}
function createDivWithId(name) {
    let div = document.createElement("div");
    div.id = name;
    let screen = document.getElementById("screen");
    screen.appendChild(div);
    return div;
  }
  
function loadFloors(){
    for(let floor in Floors){
        createDivWithId(floor)
        for(let styles in Floors[floor]){
            
            
            setStyle(floor,styles,Floors[floor][styles])
        }
    }

}

//physics

function gravity(player) {
    if(player=="waterLad"){
        waterJump=1;
      } 
      if(player=="fireMadam"){
        fireJump=1;
      }

    let intervalId = setInterval(function() {
      let currentTop = parseInt(document.getElementById(player).style.top);
      let currentLeft = parseInt(document.getElementById(player).style.left);
      let playerWidth = parseInt(document.getElementById(player).style.width);
      let playerHeight = parseInt(document.getElementById(player).style.height);
  
      for (const floor in Floors) {
        let floorTop = parseInt(document.getElementById(floor).style.top);
        let floorLeft = parseInt(document.getElementById(floor).style.left) || 0;
        let floorWidth = parseInt(document.getElementById(floor).style.width);
        let floorHeight = parseInt(document.getElementById(floor).style.height);
  
        if (currentTop + playerHeight == floorTop  && currentLeft + playerWidth >= floorLeft && currentLeft <= floorLeft + floorWidth) {
          clearInterval(intervalId);
          if(player=="waterLad"){
            waterJump=0;
          } 
          if(player=="fireMadam"){
            fireJump=0;
          }

          return;
        }
      }
     setStyle(player,"top", currentTop+1+"px")
    
      
      
    }, 50);
  }

  function stopWalk(player){
    let arr = []
        for(let floor in Floors){
            if ( (getStyle(player, "left") == getStyle(floor, "left") + getStyle(floor, "width")) &&  ((getStyle(player,"top") <= getStyle(floor, "top") +getStyle(floor,"height")) && (getStyle(player,"top") +getStyle(player, "height") >= getStyle(floor,"top")))) {

             arr.push("leftStop")
            }
            if ( (getStyle(player, "left") + getStyle(player, "width")== getStyle(floor, "left")) &&  ((getStyle(player,"top") <= getStyle(floor, "top") +getStyle(floor,"height")) && (getStyle(player,"top") +getStyle(player, "height") >= getStyle(floor,"top")))) {

                arr.push("rightStop")
             }

            if( (getStyle(player, "top") == getStyle(floor, "top") +getStyle(floor, "height")) &&  ((getStyle(player,"left") <= getStyle(floor, "width") + getStyle(floor,"left")) && (getStyle(player,"left") +getStyle(player, "width") >= getStyle(floor,"left"))))

            arr.push("topStop")
            
        }
        return arr

  }
  
  function gemCapt(player){
        for(let floor in Gems){
            
            if ( (getStyle(player, "left") <= getStyle(floor, "left") + getStyle(floor, "width") && getStyle(player, "left") + getStyle(player, "width")>= getStyle(floor, "left")) &&  ((getStyle(player,"top") <= getStyle(floor, "top") +getStyle(floor,"height")) && (getStyle(player,"top") +getStyle(player, "height") >= getStyle(floor,"top")))) {

                hide(floor)
             }

            if( (getStyle(player, "top") <= getStyle(floor, "top") +getStyle(floor, "height") && getStyle(player, "top") +getStyle(player,"height") >= getStyle(floor, "top")) &&  ((getStyle(player,"left") <= getStyle(floor, "width") + getStyle(floor,"left")) && (getStyle(player,"left") +getStyle(player, "width") >= getStyle(floor,"left"))))

            hide(floor)
            
        }
        
        

  }

    
  function hazardCheck(player){
    if(player=="fireMadam"){
    for(let floor in waterHazards){
        
        if ( (getStyle(player, "left") < getStyle(floor, "left") + getStyle(floor, "width") && getStyle(player, "left") + getStyle(player, "width")> getStyle(floor, "left")) &&  ((getStyle(player,"top") < getStyle(floor, "top") +getStyle(floor,"height")) && (getStyle(player,"top") +getStyle(player, "height") > getStyle(floor,"top")))) {
            
           return "oof"
            
         }

        if( (getStyle(player, "top") < getStyle(floor, "top") +getStyle(floor, "height") && getStyle(player, "top") +getStyle(player,"height") > getStyle(floor, "top")) &&  ((getStyle(player,"left") < getStyle(floor, "width") + getStyle(floor,"left")) && (getStyle(player,"left") +getStyle(player, "width") > getStyle(floor,"left"))))
        {
        
            return "oof"
        }
    }
}    if(player=="waterLad"){
    for(let floor in lavaHazards){
        
        if ( (getStyle(player, "left") < getStyle(floor, "left") + getStyle(floor, "width") && getStyle(player, "left") + getStyle(player, "width")> getStyle(floor, "left")) &&  ((getStyle(player,"top") < getStyle(floor, "top") +getStyle(floor,"height")) && (getStyle(player,"top") +getStyle(player, "height") > getStyle(floor,"top")))) {
            
            return "oof"
            
         }

        if( (getStyle(player, "top") < getStyle(floor, "top") +getStyle(floor, "height") && getStyle(player, "top") +getStyle(player,"height") > getStyle(floor, "top")) &&  ((getStyle(player,"left") < getStyle(floor, "width") + getStyle(floor,"left")) && (getStyle(player,"left") +getStyle(player, "width") > getStyle(floor,"left"))))
        {
        
            return "oof"
        }
    }
    if(player=="waterLad"){
        let floor="fireMadam"
    
        if ( (getStyle(player, "left") < getStyle(floor, "left") + getStyle(floor, "width") && getStyle(player, "left") + getStyle(player, "width")> getStyle(floor, "left")) &&  ((getStyle(player,"top") < getStyle(floor, "top") +getStyle(floor,"height")) && (getStyle(player,"top") +getStyle(player, "height") > getStyle(floor,"top")))) {
        
            return "oof"
            
         }

        if( (getStyle(player, "top") < getStyle(floor, "top") +getStyle(floor, "height") && getStyle(player, "top") +getStyle(player,"height") > getStyle(floor, "top")) &&  ((getStyle(player,"left") < getStyle(floor, "width") + getStyle(floor,"left")) && (getStyle(player,"left") +getStyle(player, "width") > getStyle(floor,"left"))))
        {
        
            return "oof"
        }

    }
    if(player=="fireMadam"){
        let floor ="waterLad"
        if ( (getStyle(player, "left") < getStyle(floor, "left") + getStyle(floor, "width") && getStyle(player, "left") + getStyle(player, "width")> getStyle(floor, "left")) &&  ((getStyle(player,"top") < getStyle(floor, "top") +getStyle(floor,"height")) && (getStyle(player,"top") +getStyle(player, "height") > getStyle(floor,"top")))) {
        
            return "oof"
            
         }

        if( (getStyle(player, "top") < getStyle(floor, "top") +getStyle(floor, "height") && getStyle(player, "top") +getStyle(player,"height") > getStyle(floor, "top")) &&  ((getStyle(player,"left") < getStyle(floor, "width") + getStyle(floor,"left")) && (getStyle(player,"left") +getStyle(player, "width") > getStyle(floor,"left"))))
        {
        
            return "oof"
        }

}
}
    
}

  

document.addEventListener("keydown", function(event){
    if(event.key==="d"){
        if(pressD==false){
        clearInterval(waterLadInterval);
        move("waterLad","right")
    
        }
    
    }
    if(event.key==="a"){
        if(pressA==false){
        clearInterval(waterLadInterval);
        move("waterLad","left")
        }
    
    }
    if(event.key=="w"){
        if(waterJump ==0){
        move("waterLad", "up")
        }
    }

    if(event.key=="ArrowUp"){
        event.preventDefault();
        if(fireJump ==0){
        move("fireMadam", "up")
        }
    }
    if(event.key=="ArrowDown"){
        event.preventDefault();
    }
    if(event.key==="ArrowLeft"){
        event.preventDefault();
        if(pressL==false){
        clearInterval(fireMadamInterval);
        move("fireMadam","left")
        }
    
    }
    if(event.key==="ArrowRight"){
        event.preventDefault();
        if(pressR==false){
        clearInterval(fireMadamInterval);
        move("fireMadam","right")
        }
    
    }
});

document.addEventListener("keyup",function(event){
    if(event.key=="d"){
        clearInterval(waterLadInterval);
        pressD = false;
        if(pressD == false && pressA ==false){
            setStyle("waterLad", "backgroundImage","url('images/waterLad-idle.gif")
        }
    }
    if(event.key=="a"){
        clearInterval(waterLadInterval);
        pressA = false;
        if(pressD == false && pressA ==false){
            setStyle("waterLad", "backgroundImage","url('images/waterLad-idle.gif")
        }
    }
    if(event.key=="ArrowLeft"){
        clearInterval(fireMadamInterval);
        pressL = false;
        if(pressL == false && pressR ==false){
            setStyle("fireMadam", "backgroundImage","url('images/fireMadam-idle.gif")
        }
    }
    if(event.key=="ArrowRight"){
        clearInterval(fireMadamInterval);
        pressR = false;
        if(pressL == false && pressR ==false){
            setStyle("fireMadam", "backgroundImage","url('images/fireMadam-idle.gif")
        }
    }
 
})

let waterLadInterval, fireMadamInterval,fireJumpInterval, waterJumpInterval, waterGravityInterval, fireGravityInterval;
let pressA=false,pressD=false,pressL=false,pressR = false;
let waterJump,fireJump = 1;
function move(id,where){
    if(where=="right"){
        if(id=="fireMadam"){
            setStyle("fireMadam", "backgroundImage","url('images/fireMadam-right.gif")
            fireMadamInterval = setInterval(function(){
                if(stopWalk(id).includes("rightStop")){
                    clearInterval(fireMadamInterval)
                    addToPx(id,"left",-1)
                }
            pressR = true;
            addToPx(id,"left",1)
        },10)}else{
        setStyle("waterLad", "backgroundImage","url('images/waterLad-right.gif")
        waterLadInterval = setInterval(function(){
            if(stopWalk(id).includes("rightStop")){
                clearInterval(waterLadInterval)
                addToPx(id,"left",-1)
            }
            addToPx(id,"left",1)
            pressD=true;
        },10)
        }
    }
    else if(where=="left"){
        if(id=="fireMadam"){
            setStyle("fireMadam", "backgroundImage","url('images/fireMadam-left.gif")
            fireMadamInterval = setInterval(function(){
                if(stopWalk(id).includes("leftStop")){
                    clearInterval(fireMadamInterval)
                    addToPx(id,"left",1)
                }
            pressL = true;
            addToPx(id,"left",-1)
        },10)
        } else{
            setStyle("waterLad", "backgroundImage","url('images/waterLad-left.gif")
        waterLadInterval = setInterval(function(){
            if(stopWalk(id).includes("leftStop")){
                clearInterval(waterLadInterval)
                addToPx(id,"left",1)
            }
            addToPx(id,"left",-1)
            pressA=true;
        },10)
    } 
} else if(where == "up"){
    if(id == "waterLad"){
    waterJump+=1;
     clearInterval(waterGravityInterval)
     let distance = 0
     waterJumpInterval = setInterval(function(){
         distance++
         addToPx(id, "top",  -1)
         if(distance == 60 || stopWalk(id).includes("topStop")){
            addToPx(id, "top", 1)
            clearInterval(waterJumpInterval)
             waterGravityInterval = setInterval(function(){
                 gravity("waterLad");
       
             },50);
         }
     },1)
    }
    if(id == "fireMadam"){
        fireJump+=1;
         clearInterval(fireGravityInterval)
         let distance = 0
         fireJumpInterval = setInterval(function(){
             distance++
             addToPx(id, "top",  -1)
             if(distance == 60 || stopWalk(id).includes("topStop")){
                addToPx(id, "top", 1)
                clearInterval(fireJumpInterval)
                 fireGravityInterval = setInterval(function(){
                     gravity("fireMadam");
           
                 },50);
             }
         },1)
        }
     
 } 
}

function addToPx(id,whichStyle,howMuch){
    let curStyle = parseInt(document.getElementById(id).style[whichStyle])
    let newStyle = curStyle + howMuch + "px"
    setStyle(id,whichStyle,newStyle);

}



let checking = setInterval(function(){
    for(let player in Players){
        gemCapt(player)
        if(hazardCheck(player) =="oof"){
            clearInterval(checking)

            setTimeout(function() {
                document.getElementById("deathScreen").style.display = "block"
                playMusic("mp3s/thatsmyfavorite.mp3", false);
                setTimeout(reset, 3000); // 2 seconds
                }, 0);
        };
    }
},50)

function reset(){
   location.reload()
}
let checker = 1;
setInterval(function(){
  
    if(document.getElementById("gems").innerHTML ==checker){
        checker++
        playMusic("mp3s/gem.mp3",false)
        

    }
},50);

function tryAgain(){
    setTimeout(function() {
        hide("tryAgain")
        playMusic("mp3s/button.mp3", false);
        setTimeout(reset, 1000); // 2 seconds
        }, 0);
}


