function add() {
    var number = parseInt(document.getElementsByName('input1')[0].value);
    var result = number.toString(2);
    result = "00000000".substr(result.length) + result;
    document.getElementsByName('display')[0].value= result;
}

// Language: javascript
// Path: script.js
// This function is called when the user clicks the "Convert" button.