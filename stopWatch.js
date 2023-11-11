let Hr = 0;
let Min = 0;
let Sec = 0;
let MSec = 0;

let Start = document.getElementById("Start");
let Pause = document.getElementById("Pause");
let Reset = document.getElementById("Reset");

Start.addEventListener('click', function(){
    result = true;
    StartWatch();
});

Pause.addEventListener('click',function(){
    result = false;
});

Reset.addEventListener('click', function(){
    result = false;
    Hr = 0;
    Min = 0;
    Sec = 0;
    MSec = 0;
    document.getElementById("hour").innerHTML = "00";
    document.getElementById("minute").innerHTML = "00";
    document.getElementById("second").innerHTML = "00";
    document.getElementById("milli").innerHTML = "00";
});

function StartWatch()
{
    if(result){
        MSec++;
        if(MSec == 100)
        {
            Sec++;
            MSec = 0;
        }
        if(Sec == 60)
        {
            Min++;
            Sec = 0;
        }
        if(Min == 60)
        {
            Hr++;
            Min = 0;
            MSec = 0;
        }

        let hrs = Hr;
        let mins = Min;
        let secs = Sec;
        let msecs = MSec;

        if(Hr < 10)
        {
            hrs = "0" + hrs;
        }
        if(Min < 10)
        {
            mins = "0" + mins;
        }
        if(Sec < 10)
        {
            secs = "0" + secs;
        }
        if(MSec < 10)
        {
            msecs = "0" + msecs;
        }
        document.getElementById("hour").innerHTML = hrs;
        document.getElementById("minute").innerHTML = mins;
        document.getElementById("second").innerHTML = secs;
        document.getElementById("milli").innerHTML = msecs;

    }
    setTimeout(StartWatch,10);
    // document.getElementById("Print").innerHTML = hrs +" : "+mins+" : "+secs+" : "+msecs;
}

// function Pause()
// {

// }

// function End()
// {

// }