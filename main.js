let outputScreen = document.getElementById("output-screen");
let isInvalidSyntax = true  ;

function display(num){
     
     if (isInvalidSyntax === true){
         outputScreen.value = num ;
         isInvalidSyntax = false;
     }
      else {
        outputScreen.value += num ;
      }
}
function calculate(){
try{
outputScreen.value = eval(outputScreen.value) ;
}
catch(err){
    outputScreen.value = " invalid sytax";
    isInvalidSyntax = true;
}
}
function clears(){
    outputScreen.value = "";
}
 
function del(){
outputScreen.value = outputScreen.value.slice(0,-1);
}
