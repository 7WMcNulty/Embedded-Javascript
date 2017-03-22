//declare samecolor() here
function samecolor(){
  const doc = document;
  let divs = doc.querySelectorAll("#samecolor > div");
  for(var i=0; i<divs.length; i++){
    divs[i].style.backgroundColor = "#ff0000";
    let temp = Math.random();
    divs[i].style.opacity = temp;
  }
}
//declare diffcolor() here
function diffcolor(){
  const doc = document;
  let divs = doc.querySelectorAll("#diffcolor > div");
  for(var i=0; i<divs.length; i++){
      if(i%2 == 0){
          divs[i].style.backgroundColor = "#0000ff";
      }
      else{
          divs[i].style.backgroundColor = "#ffff00";
      }
  }
}
