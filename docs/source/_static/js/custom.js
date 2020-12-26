// Custom JS
// Simple JavaScript for setting footer anchors target attritube

window.addEventListener("load", function(){
var children = document.getElementsByTagName("FOOTER")[0].children; 

if(children.length > 0){
    for(let i=0; i < children.length; i++){
        if(children[i].nodeName == "A"){
            children[i].setAttribute("target","_blank");
        }
    }
}
    
});
