var slider={
    jeden:function(){           
      document.getElementById("image").src="1.jpg";
        
    },
    dwa:function(){       
        document.getElementById("image").src="2.jpg";

    },
    trzy:function(){
       document.getElementById("image").src="3.jpg";
    },
    cztery:function(){
        document.getElementById("image").src="4.jpg";
     },
     pięć:function(){
        document.getElementById("image").src="5.jpg";
     },
     sześć:function(){
        document.getElementById("image").src="6.jpg";
     },
     siedem:function(){
        document.getElementById("image").src="7.jpg";
     },
     osiem:function(){
        document.getElementById("image").src="8.jpg";
     },
     dziewięć:function(){
        document.getElementById("image").src="9.jpg";
     },
     dziesięć:function(){
        document.getElementById("image").src="10.jpg";
     },
    losowo:function(){
        x=Math.floor(Math.random() * 10) + 1;
        document.getElementById("image").src=x+".jpg";
    },
}


