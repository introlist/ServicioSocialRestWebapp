var url = "";
var repo = "areas";
var filter1 = "";
var filter2 = "";
var noInputFilter;
var originalNoFilter;
var responseContents;
var jsonResponse;
var jsonString;
const proxyurl = "https://cors-anywhere.herokuapp.com/"; // <- Esta madre hace la magia
const urlCono = "http://catalogs.repositorionacionalcti.mx/webresources/areacono/"
window.onload = function () {
    generateFirstCombo();
};


function setURL() {
    document.getElementById("respuesta").value = url + filter1 + filter2;
    if(document.getElementById("respuesta").value.length > 5){
        document.getElementById("goTo").disabled = false;
        document.getElementById("copy").disabled = false;
    }
    document.getElementById("estatus").innerHTML = "";
}

function showURL(urlCons) {

    document.getElementById("respuesta").value = urlCons;
}


function generateFirstCombo() {
	var responseContents = "";
	fetch(proxyurl + urlCono) 
	.then(response => response.text())
	.then(contents => fillFirstCombo(contents))
	.catch(console.log(""))
}

function generateSecondCombo(areasConocimiento) {
    var selectedText = areasConocimiento.options[areasConocimiento.selectedIndex].innerHTML;
    var selectedValue = areasConocimiento.value;
	var responseContents = "";
	const url = "http://catalogs.repositorionacionalcti.mx/webresources/campocono/byArea/"+selectedValue;
	fetch(proxyurl + url) 
	.then(response => response.text())
	.then(contents => fillSecondCombo(contents))
	.catch(console.log(""))
    
    /*
    var input = document.createElement("input");
    input.value= urlCono + selectedValue
    var parent = document.getElementById("acc");
    parent.appendChild(input);
    
    var input = document.createElement("input");
    var select_val = document.getElementById("areasConocimiento");
    input.value = select_val.options[select_val.selectedIndex].text;
    var parent = document.getElementById("acc");
    parent.appendChild(input);
    */
    
    generateInputs(selectedValue,"acc","areasConocimiento");
}

function generateInputs(selectedValue,urlIn,textIn){
    var input = document.createElement("input");
    input.value= urlCono + selectedValue
    var parent = document.getElementById(urlIn);
    parent.appendChild(input);
    
    var input = document.createElement("input");
    var select_val = document.getElementById(textIn);
    input.value = select_val.options[select_val.selectedIndex].text;
    var parent = document.getElementById("acc");
    parent.appendChild(input);
}

function generateThirdCombo(camposConocimiento) {
    var selectedText = camposConocimiento.options[camposConocimiento.selectedIndex].innerHTML;
    var selectedValue = camposConocimiento.value;
	var responseContents = "";
	const url = "http://catalogs.repositorionacionalcti.mx/webresources/disciplinacono/byCampo/"+selectedValue;
	fetch(proxyurl + url) 
	.then(response => response.text())
	.then(contents => fillThirdCombo(contents))
	.catch(console.log(""))
}
function generateForthCombo(disciplinasConocimiento) {
    var selectedText = disciplinasConocimiento.options[disciplinasConocimiento.selectedIndex].innerHTML;
    var selectedValue = disciplinasConocimiento.value;
    console.log(selectedValue);
    var responseContents = "";
    const proxyurl = "https://cors-anywhere.herokuapp.com/"; // <- Esta madre hace la magia
    const url = "http://catalogs.repositorionacionalcti.mx/webresources/subdisciplinacono/byDisciplina/"+selectedValue;
    console.log(url);
    fetch(proxyurl + url)
        .then(response => response.text())
.then(contents => fillForthCombo(contents))
.catch(console.log("Can’t access " + url + " response. Blocked by browser?"))
    //generateFirstCombo();
    showURL(url);
}

function goToURL() {
	var responseContents = "";
	const proxyurl = "https://cors-anywhere.herokuapp.com/"; // <- Esta madre hace la magia
	const url = document.getElementById("respuesta").value; 
	fetch(proxyurl + url) 
	.then(response => response.text())
	.then(contents => fillFirstCombo(contents))
	.catch(console.log("Can’t access " + url + " response. Blocked by browser?"))
}

/*
*   Fill next select
*/
function fillFirstCombo(contents){
	responseContents = contents
	jsonResponse = JSON.parse("\{\"campos\":"+responseContents+"\}");
    console.log(contents)
     var listItems = '<option selected="selected" value="0">- Áreas de conocimiento -</option>';
 
      for (var i = 0; i < jsonResponse.campos.length; i++) {
             listItems += "<option value='" + jsonResponse.campos[i].idArea + "'>" + jsonResponse.campos[i].descripcion + "</option>";
         }
 
         $("#areasConocimiento").html(listItems);
}

function fillSecondCombo(contents){
	responseContents = contents
	jsonResponse = JSON.parse("\{\"campos\":"+responseContents+"\}");
    console.log(contents)
     var listItems = '<option selected="selected" value="0">- Campos de conocimiento -</option>';
 
      for (var i = 0; i < jsonResponse.campos.length; i++) {
             listItems += "<option value='" + jsonResponse.campos[i].idCampo + "'>" + jsonResponse.campos[i].descripcion + "</option>";
         }
 
         $("#camposConocimiento").html(listItems);
}

function fillThirdCombo(contents){
	responseContents = contents
	jsonResponse = JSON.parse("\{\"campos\":"+responseContents+"\}");
    console.log(contents)
    //console.log("\{\"campos\":"+JSON.stringify(jsonResponse)+"\}");
    //jsonString = "\{\"campos\":"+JSON.stringify(jsonResponse)+"\}";
    var listItems = '<option selected="selected" value="0">- Disciplinas de conocimiento -</option>';

    for (var i = 0; i < jsonResponse.campos.length; i++) {
        listItems += "<option value='" + jsonResponse.campos[i].idDisciplina + "'>" + jsonResponse.campos[i].descripcion + "</option>";
    }

    $("#disciplinasConocimiento").html(listItems);
}


function fillForthCombo(contents){
    responseContents = contents
    //console.log("\{\"campos\":"+responseContents+"\}")
    jsonResponse = JSON.parse("\{\"campos\":"+responseContents+"\}");
    console.log('Subdisciplinas\n' +contents)
    //console.log("\{\"campos\":"+JSON.stringify(jsonResponse)+"\}");
    //jsonString = "\{\"campos\":"+JSON.stringify(jsonResponse)+"\}";
    var listItems = '<option selected="selected" value="0">- Subdisciplinas de conocimiento -</option>';

    for (var i = 0; i < jsonResponse.campos.length; i++) {
        listItems += "<option value='" + jsonResponse.campos[i].idSubdisciplina + "'>" + jsonResponse.campos[i].descripcion + "</option>";
    }

    $("#subdisciplinasConocimiento").html(listItems);
}


function printInConsole(response){
	print(response)
}

function copyURL() {
    document.getElementById("respuesta").select();
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
    document.getElementById("estatus").innerHTML = "Texto copiado";
}
