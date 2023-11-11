var textInput = document.getElementById("result");

textInput.addEventListener("input", function () 
    {
        var text = textInput.value;
        var words = text.split(' ');
        document.getElementById("print").innerHTML = words.length;
    }
);