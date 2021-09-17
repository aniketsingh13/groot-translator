var buttonTranslate = document.querySelector("#button-txt");
var txtInputs = document.querySelector("#input-txts");
var divOutputs = document.querySelector("#outputs");
 
var serverURL ="https://api.funtranslations.com/translate/groot.json";

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input;
}
function errorHandler(error) {
    alert("something wrong with server!,please try after sometime..");
}
function clickHandler() {
    
    var inputText = txtInputs.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        divOutputs.innerText = translatedText;

    })
    .catch(errorHandler);
}


buttonTranslate.addEventListener("click",clickHandler);