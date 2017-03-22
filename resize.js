//Declare tabletSize() here
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
}
