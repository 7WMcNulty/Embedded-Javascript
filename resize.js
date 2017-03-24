/*//Declare tabletSize() here
function tabletSize(){
    const doc = document;
    let sections = doc.querySelectorAll("section");
    let width = "1440px";
    let height = "800px";
    width = "1060px";
    height = "600px";
    for(var i=0; i<sections.length; i++){
        sections[i].style.height = height;
        sections[i].style.width = width;
    }
}

//Declare phoneSize() here
function phoneSize(){
    const doc = document;
    let sections = doc.querySelectorAll("section");
    let width = "1440px";
    let height = "800px";
    width = "720px";
    height = "300px";
    for(var i=0; i<sections.length; i++){
        sections[i].style.height = height;
        sections[i].style.width = width;
    }
}*/

function tabletSize(){
  const doc = document;
  let sections = doc.querySelectorAll("section");
  for(var i=0; i<sections.length; i++){
    var height = window.getComputedStyle(sections[i],null).getPropertyValue("height");
    let pIndex = height.indexOf("p");
    let newHeight = "";
    for(var j=0; j<pIndex; j++){
      let temp = height.charAt(j);
      newHeight = newHeight + temp;
    }
    newHeight*=0.75;
    newHeight = newHeight+"px"
    newHeight.toString();
    sections[i].style.height = newHeight;
  }
  for(var i=0; i<sections.length; i++){
    var width = window.getComputedStyle(sections[i],null).getPropertyValue("width");
    let qIndex = width.indexOf("p");
    let newWidth = "";
    for(var j=0; j<qIndex; j++){
      let temp = width.charAt(j);
      newWidth = newWidth + temp;
    }
    newWidth*=0.75;
    newWidth = newWidth+"px"
    newWidth.toString();
    sections[i].style.width = newWidth;
  }
}
