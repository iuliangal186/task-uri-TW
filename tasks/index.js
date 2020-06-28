
function myfunc(){
    var k1=0, k2=0,k3=0,k4=0;
    var nrque=5;

    var q1 = document.forms['quiz']['q1'].value;
    var q2 = document.forms['quiz']['q2'].value;
    var q3 = document.forms['quiz']['q3'].value;
    var q4 = document.forms['quiz']['q4'].value;
    var q5 = document.forms['quiz']['q5'].value;

    for (var i=1; i<= nrque; i++){
         if(eval('q' + i) == ''){
             alert("Ai ratat intrebarea " + i);
         }
         if(eval('q' + i) == 'a')
         {
             k1++;
         }
         if(eval('q' + i) == 'b')
         {
             k2++;
         }
         if(eval('q' + i) == 'c')
         {
             k3++;
         }
         if(eval('q' + i) == 'd')
         {
             k4++;
         }


    }
    var k=Math.max(k1,k2,k3,k4);
    
    if (k1 == k){
        alert("Toyota Supra");
        k=null;
        window.open("putere.html")
       
    }
    if(k2==k){
        alert("BMW 7 SERIES");
        k=null;
        window.open("comfort.html")
    }
    if(k3==k){
        alert("Rolls Royce");
        k=null;
        window.open("opulenta.html")
    }
    if(k4==k){
        alert("Ti se potriveste si o bicicleta");
        k=null;
        window.open("https://www.emag.ro/biciclete/c")
    }


};

