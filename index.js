function toAdd( firstNumber, secondNumber){
    sum= firstNumber+ secondNumber;
    alert('Your Answer is: '+ sum);
}
function toSubtract( firstNumber, secondNumber){
    difference= firstNumber- secondNumber;
    alert('Your Answer is: '+difference);
}
function tomultiply( firstNumber, secondNumber){
    product= firstNumber*secondNumber;
    alert('Your Answer is: '+product);
}
function toDivide( firstNumber, secondNumber){
    quocient= firstNumber/ secondNumber;
    alert('Your Answer is: '+quocient);
}

var input= window.prompt('CHOOSE A BASIC OPERATION \n 1. Addition \n 2.Subtraction \n 3. Multiplication \n 4. Division');
if (input==1) {
  var fNumber=  window.prompt(' ENTER FIRST NUMBER');
  var sNumber=  window.prompt(' ENTER SECOND NUMBER');
    toAdd( fNumber, sNumber);
}
 else if (input==2) {
    var fNumber=  window.prompt(' ENTER FIRST NUMBER');
    var sNumber=  window.prompt(' ENTER SECOND NUMBER');
    toSubtract( fNumber, sNumber); 
 } 
 else if (input==3) {
    var fNumber=  window.prompt(' ENTER FIRST NUMBER');
    var sNumber=  window.prompt(' ENTER SECOND NUMBER');
    tomultiply( fNumber, sNumber); 
 } 
 else if (input==4) {
    var fNumber=  window.prompt(' ENTER FIRST NUMBER');
    var sNumber=  window.prompt(' ENTER SECOND NUMBER');
    toDivide( fNumber, sNumber); 
 } 
 else {
     window.prompt(' You did not pick A correct option')
 }   


