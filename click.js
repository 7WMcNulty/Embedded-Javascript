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
  #0000ff
}
