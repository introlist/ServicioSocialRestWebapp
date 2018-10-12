var url = "";
var accSelectsNum = 0;
var cccSelectsNum = 0;
var dccSelectsNum = 0;
var sccSelectsNum = 0;
var accDeletes = 0;
var cccDeletes = 0;
var dccDeletes = 0;
var sccDeletes = 0;
var accSelects = [];
var cccSelects = [];
var dccSelects = [];
var sccSelects = [];
var responseContents;
var jsonResponse;
var lastSelection = [];
const proxyurl =  "http://" + document.location.host + "/ssrwa/Webservice.php?ws=";
const urlAreas = "http://catalogs.repositorionacionalcti.mx/webresources/areacono/";


window.onload = function () {
    getAreas();
};

$(document).ready(function () {
    $('select').material_select();
    $('.tooltipped').tooltip({delay: 50});
});


function reloadMaterialSelects() {
    $('select').material_select();
}



function getAreas() {
    console.log(proxyurl + urlAreas);
    fetch(proxyurl + urlAreas)
        .then(function (response) {
            response.text().then(function (contents) {
                fillFirstCombo(contents)
            })
                .catch(function (reason) {
                    console.log(reason + "Can’t access " + url + " response. Blocked by browser?")
                });
        })

}

function selectArea(areasConocimiento) {
    shineAddButton();
    var selectedValue = areasConocimiento.value;
    const url = "http://catalogs.repositorionacionalcti.mx/webresources/campocono/byArea/" + selectedValue;
    console.log(url);
    fetch(proxyurl + url)
        .then(function (response) {
            response.text().then(function (contents) {
                fillSecondCombo(contents)
            })
                .catch(function (reason) {
                    console.log(reason + "Can’t access " + url + " response. Blocked by browser?")
                });
        });

    lastSelection = [selectedValue, "acc", "areasConocimiento", urlAreas];
}


function selectCampo(camposConocimiento) {
    shineAddButton();
    var selectedValue = camposConocimiento.value;
    const url = "http://catalogs.repositorionacionalcti.mx/webresources/disciplinacono/byCampo/" + selectedValue;
    console.log(url);
    fetch(proxyurl + url)
        .then(function (response) {
            response.text().then(function (contents) {
                fillThirdCombo(contents)
            })
                .catch(function (reason) {
                    console.log(reason + "Can’t access " + url + " response. Blocked by browser?")
                });
        });
    lastSelection = [selectedValue, "ccc", "camposConocimiento", "http://catalogs.repositorionacionalcti.mx/webresources/campocono/"];

}

function selectDisciplina(disciplina){
    shineAddButton();
    var selectedValue = disciplina.value;
    const url = "http://catalogs.repositorionacionalcti.mx/webresources/subdisciplinacono/byDisciplina/" + selectedValue;
    console.log(url);
    fetch(proxyurl + url)
        .then(function (response) {
            response.text().then(function (contents) {
                fillForthCombo(contents)
            })
                .catch(function (reason) {
                    console.log(reason + "Can’t access " + url + " response. Blocked by browser?")
                });
        });
    lastSelection = [selectedValue, "dcc", "disciplinasConocimiento", "http://catalogs.repositorionacionalcti.mx/webresources/disciplinacono/"];
}

function selectSubdisciplina(subdisciplina) {
    shineAddButton();
    var selectedValue = subdisciplina.value;
    lastSelection = [selectedValue, "scc", "subdisciplinasConocimiento", "http://catalogs.repositorionacionalcti.mx/webresources/subdisciplinacono/"];

}

function getInput() {
    if (lastSelection.length > 0){
        generateInputs(lastSelection[0],lastSelection[1],lastSelection[2],lastSelection[3]);
    }else {
        Materialize.toast('Debe seleccionar alguna lista para obtener su información.', 2200); // 4000 is the duration of the toast
    }

    lastSelection = [];
}

function generateInputs(selectedValue, dropdown, titulo, jsonURL) {
    var addNumber = getSelectionNumber(dropdown);
    var id = dropdown + (addNumber);
    var parent = document.getElementById(dropdown+"Results");
    var select_val = document.getElementById(titulo);
    var item = "";

    var nombre = "<input id='nombre" + id + "' type='text' class='results col s10 small gen-input-small-text' value='" + select_val.options[select_val.selectedIndex].text + "' readonly>";
    var copyNombre = ("<input  class=' gen-input waves-effect waves-light btn'  id=\"copyNombre" + id + "\" type=\"button\" value=\"Copiar\" onclick=\"copyURL('nombre" + id + "')\">\n");

    var dspace = "<input id='dspace" + id + "' type='text' class='results col s10 small gen-input-small-text'  value='<dc:subject>" + jsonURL + selectedValue + "</dc:subject>' readonly>";
    var copyDspace = ("<input  class='gen-input waves-effect waves-light btn'  id=\"copyDspace" + id + "\" type=\"button\" value=\"Copiar\" onclick=\"copyURL('dspace" + id + "')\">\n<br>");

    var deleteRepo = "<br><input id='delete" + id + "' type='button' value='Eliminar' class=\"waves-effect waves-teal btn-flat\" onclick='deleteRepo(\""+dropdown.toString()+"\","+addNumber+")' >";

    item+=(nombre);
    item+=(copyNombre);
    item+=("    ");
    item+=(dspace);
    item+=(copyDspace);
    item+=("    ");
    item+=(deleteRepo);
	console.log(item);


    setSelection(dropdown, item);

    parent.innerHTML = (getSelections(dropdown));
    checkResultCards();
}

function deleteRepo(dropdown, number) {
    var parent = document.getElementById(dropdown+"Results");
    if (dropdown === "acc") {
        accDeletes++;
        accSelects[number-1] = "";
    }
    else if (dropdown === "ccc") {
        cccDeletes++;
        cccSelects[number-1] = "";
    }
    else if (dropdown === "dcc") {
        dccDeletes++;
        dccSelects[number-1] = "";
    }
    else {
        sccDeletes++;
        sccSelects[number-1] = "";
    }
    parent.innerHTML = (getSelections(dropdown));
    checkResultCards();
}


function getSelectionNumber(dropdown) {
    if (dropdown === "acc") {
        accSelectsNum++;
        return accSelectsNum;
    }
    else if (dropdown === "ccc") {
        cccSelectsNum++;
        return cccSelectsNum;
    }
    else if (dropdown === "dcc") {
        dccSelectsNum++;
        return dccSelectsNum;
    }
    else {
        sccSelectsNum++;
        return sccSelectsNum;
    }
}

function setSelection(dropdown, item) {
    shineAddButton();
    if (dropdown === "acc") {
        accSelects.push(item);
    }
    else if (dropdown === "ccc") {
        cccSelects.push(item);
    }
    else if (dropdown === "dcc") {
        dccSelects.push(item);
    }
    else {
        sccSelects.push(item);
    }
}

function getSelections(dropdown) {
    if (dropdown === "acc") {
        return accSelects.join("");
    }
    else if (dropdown === "ccc") {
        return cccSelects.join("");
    }
    else if (dropdown === "dcc") {
        return dccSelects.join("");
    }
    else {
        return sccSelects.join("");
    }
}


function checkResultCards(){
    if(accSelectsNum - accDeletes > 0){
        document.getElementById("accResults").style.display = "block";
    }else {
        document.getElementById("accResults").style.display = "none";
    }

    if(cccSelectsNum - cccDeletes  > 0){
        document.getElementById("cccResults").style.display = "block";
    }else {
        document.getElementById("cccResults").style.display = "none";
    }

    if(dccSelectsNum - dccDeletes > 0){
        document.getElementById("dccResults").style.display = "block";
    }else {
        document.getElementById("dccResults").style.display = "none";
    }

    if(sccSelectsNum - sccDeletes > 0){
        document.getElementById("sccResults").style.display = "block";
    }else {
        document.getElementById("sccResults").style.display = "none";
    }

}
function fillFirstCombo(contents) {
    responseContents = contents;
    jsonResponse = JSON.parse("\{\"campos\":" + responseContents + "\}");
    console.log(contents);
    var listItems = '<option selected="selected" disabled="disabled" value="0">Seleccione un área de conocimiento.</option>';

    for (var i = 0; i < jsonResponse.campos.length; i++) {
        listItems += "<option value='" + jsonResponse.campos[i].idArea + "'>" + jsonResponse.campos[i].descripcion + "</option>";
    }

    $("#areasConocimiento").html(listItems);
    reloadMaterialSelects();
}

function fillSecondCombo(contents) {
    responseContents = contents;
    jsonResponse = JSON.parse("\{\"campos\":" + responseContents + "\}");
    console.log(contents);
    var listItems = '<option selected="selected" disabled="disabled" value="0">Seleccione un campo de conocimiento.</option>';

    for (var i = 0; i < jsonResponse.campos.length; i++) {
        listItems += "<option value='" + jsonResponse.campos[i].idCampo + "'>" + jsonResponse.campos[i].descripcion + "</option>";
    }

    $("#camposConocimiento").html(listItems);
    reloadMaterialSelects();

}

function fillThirdCombo(contents) {
    responseContents = contents;
    jsonResponse = JSON.parse("\{\"campos\":" + responseContents + "\}");
    console.log(contents);

    var listItems = '<option selected="selected" disabled="disabled" value="0">Seleccione una disciplina de conocimiento</option>';

    for (var i = 0; i < jsonResponse.campos.length; i++) {
        listItems += "<option value='" + jsonResponse.campos[i].idDisciplina + "'>" + jsonResponse.campos[i].descripcion + "</option>";
    }

    $("#disciplinasConocimiento").html(listItems);
    reloadMaterialSelects();

}


function fillForthCombo(contents) {
    responseContents = contents;
    jsonResponse = JSON.parse("\{\"campos\":" + responseContents + "\}");
    console.log('Subdisciplinas\n' + contents);
    var listItems = '<option selected="selected" disabled="disabled" value="0">Seleccione una subdisciplina de conocimiento</option>';

    for (var i = 0; i < jsonResponse.campos.length; i++) {
        listItems += "<option value='" + jsonResponse.campos[i].idSubdisciplina + "'>" + jsonResponse.campos[i].descripcion + "</option>";
    }

    $("#subdisciplinasConocimiento").html(listItems);
    reloadMaterialSelects();

}


function   shineAddButton(){
    console.log("shining");
    $("#add-button").animate({opacity:0.5}, 250, function () {
        console.log("shined");
        $("#add-button").animate({opacity:1}, 100);
    });
}

function copyURL(elementID) {
    document.getElementById(elementID).select();
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
    Materialize.toast('Texto copiado al portapapeles.', 500) // 4000 is the duration of the toast
}
