//code for click events - mouse
/*
var totalDrumbuttons=document.querySelectorAll(".drum").length;

for(var i=0;i<totalDrumbuttons;i++){
   document.querySelectorAll("button")[i].addEventListener("click",function(){

    var userClick=this.innerHTML;
    //console.log(userClick);
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();


    switch(userClick){
      case "w":
         var tom1=new Audio("sounds/tom-1.mp3");
         tom1.play();
         break;

         case "a":
         var tom2=new Audio("sounds/tom-2.mp3");
         tom2.play();
         break;

         case "s":
         var tom3=new Audio("sounds/tom-3.mp3");
         tom3.play();
         break;


         case "d":
         var tom4=new Audio("sounds/tom-4.mp3");
         tom4.play();
         break;

         case "j":
         var snare=new Audio("sounds/snare.mp3");
         snare.play();
         break;

         case "k":
         var crash=new Audio("sounds/crash.mp3");
         crash.play();
         break;

         case "l":
         var kickbass=new Audio("sounds/kick-bass.mp3");
         kickbass.play();
         break;

         default: console.log(userClick);

    }
     
   })};*/


var numberofDrumbuttons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberofDrumbuttons;i++){
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
         var buttonInnerHTML=this.innerHTML;
         makeSound(buttonInnerHTML);
   });
}

document.addEventListener("keypress",function(event){
         makeSound(event.key);
});


function makeSound(key){
   switch(key){
      case "w":
         var tom1=new Audio("sounds/tom-1.mp3");
         tom1.play();
         break;

         case "a":
         var tom2=new Audio("sounds/tom-2.mp3");
         tom2.play();
         break;

         case "s":
         var tom3=new Audio("sounds/tom-3.mp3");
         tom3.play();
         break;


         case "d":
         var tom4=new Audio("sounds/tom-4.mp3");
         tom4.play();
         break;

         case "j":
         var snare=new Audio("sounds/snare.mp3");
         snare.play();
         break;

         case "k":
         var crash=new Audio("sounds/crash.mp3");
         crash.play();
         break;

         case "l":
         var kickbass=new Audio("sounds/kick-bass.mp3");
         kickbass.play();
         break;

         default: console.log("end");
   }
}


