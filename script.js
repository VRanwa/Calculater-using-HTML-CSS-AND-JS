/*
+ = 1
- = 2
*=3
/=4
= =5
sroot=6

*/
//var root=false;
//"use strict";
var decimal=false;
var problem;
var val;
var negative=false;
var num=false;
var count=0;
var number=0;
var operator="+"; 
//var operator_length;
var answer=0;
var number;
var tb=document.getElementById("t");
function dot(){
decimal=true;
console.log("yes");
}
function plusmi(){
  number=number*(-1);
  tb.value=number;
  if(negative==false){
  negative=true;
  }else{
    negative=false;
  }
 
}

function operation(x){
  
  if(num==true){
    console.log("hi");
    
  count=0;
  negative=false;
  
   //tb.value="" 
  if(x==1){
    num=false;
     
   
   
    operate(operator.charAt(operator.length-1));
    operator+="+";
   // root=false;
    
    
  }else if(x==2){
   
    num=false;
    operate(operator.charAt(operator.length-1));
    operator+="-";
     //root=false;
  // tb.value="" ;

  }else if(x==3){
     num=false;
    operate(operator.charAt(operator.length-1));
    operator+="*";
    
    root=false;
   // tb.value="" ;

  }else if(x==4){
   num=false;
    operate(operator.charAt(operator.length-1));
    operator+="/";
    
     // root=false;
   // tb.value="" ;
   

  }else if(x==5){
     
    operate(operator.charAt(operator.length-1));
    operator+="=";
   operate(operator.charAt(operator.length-1));
   // root=false;
  // tb.value="" ;

  }else if(x==6){

    operator+="sroot";
    operate(operator.charAt(operator.length-1));
  }
  }

}

function print(para){
  if(tb.value.length>11){
    tb.style.fontSize= 40+"px";
  }
   if(tb.value.length<11){
    tb.style.fontSize= 70+"px";
  }
  if(negative==true&&decimal==false){
    
number=(number*10)+(para*(-1));
tb.value=number;
console.log(number);
num=true;
  }else if(negative==false&&decimal==false){
    number=(number*10)+(para);
tb.value=number;
console.log(number);
num=true;
  
 /* num=true;
  
  var result=1;
  count++;
  
  if(count==1){
tb.value=para;
number=para;
  }else{
    for(var i=0;i<(count-1);i++){
      result=result*10;
    }
    number=number+(para*result);
    tb.value=number;
    result=1;
  }*/
  }else if(decimal==true&&negative==false){
      num=true;
  
  var result=1;
  count++;
  console.log("decimal called!!");
  if(count==1){
tb.value=number+(para/10);
number=number+(para/10);
  }else{
    for(var i=0;i<count;i++){
      result=result*10;
    }
   problem=para/result;
    number=problem+number;
    console.log(number+'pa');
    tb.value=number;
    result=1;
  }
  }else if(decimal==true&&negative==false){
     var result=1;
  count++;
  console.log("decimal called!!");
  if(count==1){
tb.value=number-(para/10);
number=number-(para/10);
  }else{
    for(var i=0;i<count;i++){
      result=result*10;
    }
   problem=para/result;
    number=problem-number;
    console.log(number+'pa');
    tb.value=number;
    result=1;

  }
  }
}

function pi(){
 //var  pi=Math.PI;

  num=true;
 // number=pi.toPrecision(12);
 number=3.14159265359;
  tb.value=number;
}
function sr(){
   number=(tb.value)**(1/2);
  tb.value=number;
// count= tb.value.length;

 //root=true;
 
}
function operate(y){
  if(y=="+"){
    answer=answer+number;
    number=0;
    decimal=false;
    
  }else if(y=="-"){
    answer=answer-number;
number=0;
decimal=false;

  }else if(y=="/"){
    answer=answer/number;
    number=0;
    decimal=false;
  }else if(y=="*"){
    answer=answer*number;
    number=0;
    decimal=false;
  }else if(y=="="){
    if(answer<0){
      negative=true;

    }
    
decimal=false;
tb.value=answer;
number=answer;
answer=0;
operator="+";
  
  }

}
function reset(){
  location.reload();
}