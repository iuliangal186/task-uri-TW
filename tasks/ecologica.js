function animatie(splitString, i, x1)
{
    var x = 0;
    setInterval(function()
    {
        var rezultat = " ";
        for (j = 0; j < i; ++j)
        {
            rezultat += splitString[j];
        }
        for( j = i; j < x1 - i; ++j)
        {
            rezultat += "&nbsp&nbsp";
        }
        for(j = x1 - i; j < x1; ++j)
        {
            rezultat += splitString[j];
        }
        x += 1;
        if(x < x1 && i < x1 / 2 )
        {
            i += 1;
        }
        document.getElementById("titluanimatie").innerHTML = rezultat;
    }, 100)
}

window.onload = function()
{
    var string = document.getElementById("titluanimatie").innerHTML;
    var splitString = string.split("");
    var x1 = 80;
    var i = 0;
    document.getElementById("titluanimatie").innerHTML = " ";
    animatie(splitString, i, x1);
    
}

