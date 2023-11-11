setInterval(Clock,1000);

function Clock()
{
    let result = new Date();
    // document.write(result);
    let hour = result.getHours();
    let Min = result.getMinutes();
    let Sec = result.getSeconds();
    let Zone = "";
    
    if(hour >= 12)
    {
        Zone = "PM";
    }
    else
    {
        Zone = "AM";
    }
    document.getElementById("clock").innerHTML = hour + " : " + Min + " : " + Sec + " : " + Zone;
    // document.getElementById("clock").innerHTML = result;
}