function numeutilizator()
{
    var titluvechi = document.title;
    var titlunou = prompt("Introdu numele: ", "Popescu Ion");
    if (titlunou == null)
    {
        alert("titlu nul");
    }
    else
    {
        document.title = "Salut, " + titlunou;
        setTimeout(function()
        {
            document.title = titluvechi;
        }, 2000);
    }
    
}
window.onload = function() {
    numeutilizator();
    var titlu = document.getElementById("titlurev");
    titlu.addEventListener("dblclick", functiereverse)
    
    var string1 = document.getElementById("question1").innerHTML;
    var splitString1 = string1.split(" ");
    x1 = splitString1.length;
    var i1 = 0;
    document.getElementById("question1").innerHTML = " ";
    functiestart1(splitString1, i1, x1);

    var string2 = document.getElementById("question2").innerHTML;
    var splitString2 = string2.split(" ");
    x2 = splitString2.length;
    var i2 = 0;
    document.getElementById("question2").innerHTML = " ";
    functiestart2(splitString2, i2, x2);

    var string3 = document.getElementById("question3").innerHTML;
    var splitString3 = string3.split(" ");
    x3 = splitString3.length;
    var i3 = 0;
    document.getElementById("question3").innerHTML = " ";
    functiestart3(splitString3, i3, x3);

    var string4 = document.getElementById("question4").innerHTML;
    var splitString4 = string4.split(" ");
    x4 = 10;
    var i4 = 0;
    document.getElementById("question4").innerHTML = " ";
    functiestart4(splitString4, i4, x4);

    var string5 = document.getElementById("question5").innerHTML;
    var splitString5 = string5.split(" ");
    x5 = 9;
    var i5 = 0;
    document.getElementById("question5").innerHTML = " ";
    functiestart5(splitString5, i5, x5);
    }

function functiestart1(splitString1, i1, x1){
    var x = 0;
    setInterval(function()
    {   
        var rezultat = "";
        for(j = 0; j < i1; ++j)
        {
            rezultat += splitString1[j];
            rezultat += " ";
        }
        x += 1;
        if(x < x1)
        {
            i1 += 1;}
        document.getElementById("question1").innerHTML = rezultat;
       
    }, 300)
}

function functiestart2(splitString2, i2, x2){
    var x = 0;
    setInterval(function()
    {   
        var rezultat = "";
        for(j = 0; j < i2; ++j)
        {
            rezultat += splitString2[j];
            rezultat += " ";
        }
        x += 1;
        if(x < x2)
        {
            i2 += 1;}
        document.getElementById("question2").innerHTML = rezultat;
        
    }, 300)
}


function functiestart3(splitString3, i3, x3){
    var x = 0;
    setInterval(function()
    {   
        var rezultat = "";
        for(j = 0; j < i3; ++j)
        {
            rezultat += splitString3[j];
            rezultat += " ";
        }
        x += 1;
        if(x < x3)
        {
            i3 += 1;}
        document.getElementById("question3").innerHTML = rezultat;
      
    }, 300)
}

function functiestart4(splitString4, i4, x4){
    var x = 0;
    setInterval(function()
    {   
        var rezultat = "";
        for(j = 0; j < i4; ++j)
        {
            rezultat += splitString4[j];
            rezultat += " ";
        }
        x += 1;
        if(x < x4)
        {
            i4 += 1;}
        document.getElementById("question4").innerHTML = rezultat;
        
    }, 300)
}

function functiestart5(splitString5, i5, x5){
    var x = 0;
    setInterval(function()
    {   
        var rezultat = "";
        for(j = 0; j < i5; ++j)
        {
            rezultat += splitString5[j];
            rezultat += " ";
        }
        x += 1;
        if(x < x5)
        {
            i5 += 1;}
        document.getElementById("question5").innerHTML = rezultat;
        
    }, 300)
}
  function functiereverse()
{
    var titlu = document.getElementById("titlurev").innerHTML;
    var splitString = titlu.split(""); 
    
    var reverseArray = splitString.reverse(); 
 
    var joinArray = reverseArray.join(""); 
   
    document.getElementById("titlurev").innerHTML = joinArray; 
}



function getAge() {
    var dateString = document.varsta.myDate.value;
    var now = new Date();
    var today = new Date(now.getYear(),now.getMonth(),now.getDate());
  
    var yearNow = now.getYear();
    var monthNow = now.getMonth();
    var dateNow = now.getDate();
  
    var dob = new Date(dateString.substring(6,10),
                       dateString.substring(3,5) - 1,  
                       dateString.substring(0,2)               
                       );
  
    var yearDob = dob.getYear();
    var monthDob = dob.getMonth();
    var dateDob = dob.getDate();
    var age = {};
    var ageString = "";
    var yearString = "";
    var monthString = "";
    var dayString = "";
  
  
    yearAge = yearNow - yearDob;
  
    if (monthNow >= monthDob)
      var monthAge = monthNow - monthDob;
    else {
      yearAge--;
      var monthAge = 12 + monthNow -monthDob;
    }
  
    if (dateNow >= dateDob)
      var dateAge = dateNow - dateDob;
    else {
      monthAge--;
      var dateAge = 31 + dateNow - dateDob;
  
      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }
  
    age = {
        years: yearAge,
        months: monthAge,
        days: dateAge
        };
  
    if ( age.years > 1 ) yearString = " ani";
    else yearString = " an";
    if ( age.months> 1 ) monthString = " luni";
    else monthString = " luna";
    if ( age.days > 1 ) dayString = " zile";
    else dayString = " zi";
    
    var ageString1 = "Esti pregatit sa dai testul, varsta ta este: "

    if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
      ageString = ageString1 + age.years + yearString + ", " + age.months + monthString + ", " + age.days + dayString;
    else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
      ageString = "Varsta ta este: " + age.days + dayString + ", nu esti pregatit sa dai testul!";
    else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
      ageString = ageString1 + age.years + yearString;
    else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
      ageString = ageString1 + age.years + yearString + " " + age.months + monthString;
    else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
      ageString = ageString1 + age.months + monthString + " " + age.days + dayString;
    else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
      ageString = ageString1 + age.years + yearString + " " + age.days + dayString;
    else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
      ageString = ageString1 + age.months + monthString;
    else ageString = "Din pacate nu am putut calcula varsta, este ora: ";
  
    


    var t = setInterval(function(){
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById("locvarsta").innerHTML = ageString;
        document.getElementById('locvarsta').innerHTML += " "+ h + " ore " + m + " minute si " + s + " secunde";
    }, 500);

function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  return i;
}
  }

  