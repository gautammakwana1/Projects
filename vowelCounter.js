function Vowel()
{
    let string = document.getElementById("string").value;
    let char = "aeiouAEIOU";
    let count = 0;
    for(let i=0; i < string.length;i++)
    {
        if(char.indexOf(string[i]) !== -1)
        {
            count += 1;
        }
    }
    document.getElementById("print").innerHTML = count;
}