var imgs=[
];
var i=0;
function nextslide(){
  if(i==9)
  {   
  i=0;  
  } 
 document.getElementById("move").src=imgs[i];
 i++; 
}