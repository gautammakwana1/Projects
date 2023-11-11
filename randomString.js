function Random()
{
    let len = document.getElementById("len").value;
    let char = "0123456789 abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // document.getElementById("Print").innerHTML = len;

    let result = "";
    const charLen = char.length;
    for(let i = 0; i < len; i++)
    {
        result = result + char.charAt(Math.floor(Math.random() * charLen));
    }
    // document.write(result);
    document.getElementById("Print").innerHTML = result;
}