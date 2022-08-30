var btnClicked=document.querySelector('#btn-Clicked');
var inputtxt=document.querySelector('#txt-input');
var outputDiv=document.querySelector('#output-div');

var serverurl='https://api.funtranslations.com/translate/dothraki.json';

function getTranslationUrl(text){
    return serverurl+"?"+"text="+text;
}

function errorHandler(error){
    alert('Something is wrong with server');
}

function clickHandler(){
    var inputText=inputtxt.value;
    
    fetch(getTranslationUrl(inputText))
    .then(resonse=>response.json)
    .then(json=>{
        var translatedText=json.content.translated;
        outputDiv.innerHTML=translatedText;
    })
    .catch(errorHandler)
}

btnClicked.addEventListener('click',clickHandler);