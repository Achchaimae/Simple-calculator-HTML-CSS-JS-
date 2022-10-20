
function equal() {
    var x;
  //  document.getElementsByClassName("equal").value;
   x= document.calculatrice.txt.value =eval(calculatrice.txt.value);

    if(x == "Infinity"){
        document.calculatrice.txt.value ="Division by 0 is impossible";
       // document.getElementsByClassName("value").innerHTML="Division by 0 is impossible";

    }
}

