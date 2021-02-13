console.log(document.getElementById("inputText").value);

function submit() {

    let string = document.getElementById("inputText").value;
    let newString = [];
    for(let i = string.length - 1; i >= 0; i--) {
        newString.push(string[i]);
    }
    newString = newString.join("");
    
    document.getElementById("output").innerText = newString;
    
}
