var btnClicked = document.querySelector('#btn-Clicked');
var inputtxt = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output-div');

var serverurl = 'https://api.funtranslations.com/translate/dothraki.json';

function getTranslationUrl(text) {
    return serverurl + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log(error);
    alert('Something is wrong with server');
}

function clickHandler() {
    var inputText = inputtxt.value;
    
        fetch(getTranslationUrl(inputText))
            .then(response => response.json())
            .then(json => {
                var translatedText = json.contents.translated;
                outputDiv.innerHTML = translatedText;
            })
            .catch (errorHandler) 
}

btnClicked.addEventListener('click', clickHandler);