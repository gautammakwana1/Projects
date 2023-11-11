function Calc(val)
{
    let Num = document.getElementById('ans');
    Num.value += val;
}
function SIGN(val)
{
    let Num = document.getElementById('ans');
    Num.value += val;
}
function CLEAR()
{
    let Num = document.getElementById('ans');
    Num.value = "";
}
function ANSWER()
{
    let first = document.getElementById('ans').value;
    let secnd = eval(first);
    document.getElementById('ans').value = secnd;
}
function BACK()
{
    let back = document.getElementById('ans');
    back.value = back.value.slice(0,-1);
}