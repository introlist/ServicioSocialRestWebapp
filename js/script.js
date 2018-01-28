var url = "";
var accSelectsNum = 0;
var cccSelectsNum = 0;
var dccSelectsNum = 0;
var sccSelectsNum = 0;
var accSelects = [];
var cccSelects = [];
var dccSelects = [];
var sccSelects = [];
var responseContents;
var jsonResponse;
const proxyurl =  "http://localhost/ServicioSocialRestWebapp/Webservice.php?ws=";
const urlAreas = "http://catalogs.repositorionacionalcti.mx/webresources/areacono/";


window.onload = function () {
    getAreas();
};

$(document).ready(function () {
    $('select').material_select();
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

    generateInputs(selectedValue, "acc", "areasConocimiento", urlAreas);
}


function selectCampo(camposConocimiento) {
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
    generateInputs(selectedValue, "ccc", "camposConocimiento", "http://catalogs.repositorionacionalcti.mx/webresources/campocono/");

}

function selectDisciplina(disciplina) {
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
    generateInputs(selectedValue, "dcc", "disciplinasConocimiento", "http://catalogs.repositorionacionalcti.mx/webresources/disciplinacono/");
}

function selectSubdisciplina(subdisciplina) {
    var selectedValue = subdisciplina.value;
    generateInputs(selectedValue, "scc", "subdisciplinasConocimiento", "http://catalogs.repositorionacionalcti.mx/webresources/subdisciplinacono/");

}

function generateInputs(selectedValue, dropdown, titulo, jsonURL) {
    var id = dropdown + (getSelectionNumber(dropdown));
    var parent = document.getElementById(dropdown+"Results");
    var select_val = document.getElementById(titulo);
    var item = "";
	var card = "<div class='card-panel-result' style='display: block'>";
    var nombre = "<input id='nombre" + id + "' type='text' class='col s10 small gen-input-small-text' value='" + select_val.options[select_val.selectedIndex].text + "' readonly>";
    var copyNombre = ("<input  class=' gen-input waves-effect waves-light btn'  id=\"copyNombre" + id + "\" type=\"button\" value=\"Copiar\" onclick=\"copyURL('nombre" + id + "')\">\n");

    var dspace = "<input id='dspace" + id + "' type='text' class='col s10 small gen-input-small-text'  value='<dc:subject>" + jsonURL + selectedValue + "</dc:subject>' readonly>";
    var copyDspace = ("<input  class='gen-input waves-effect waves-light btn'  id=\"copyDspace" + id + "\" type=\"button\" value=\"Copiar\" onclick=\"copyURL('dspace" + id + "')\">\n");

	item+=(card);
    item+=(nombre);
    item+=(copyNombre);
    item+=("    ");
    item+=(dspace);
    item+=(copyDspace);
    item+=("    ");
    item+=("</div>");
	console.log(item);
    setSelection(dropdown, item);

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
        return accSelects;
    }
    else if (dropdown === "ccc") {
        return cccSelects;
    }
    else if (dropdown === "dcc") {
        return dccSelects;
    }
    else {
        return sccSelects;
    }
}

function checkResultCards(){
    if(accSelectsNum > 0){
        document.getElementById("accResults").style.display = "block";
    }else {
        document.getElementById("accResults").style.display = "none";
    }

    if(cccSelectsNum > 0){
        document.getElementById("cccResults").style.display = "block";
    }else {
        document.getElementById("cccResults").style.display = "none";
    }

    if(dccSelectsNum > 0){
        document.getElementById("dccResults").style.display = "block";
    }else {
        document.getElementById("dccResults").style.display = "none";
    }

    if(sccSelectsNum > 0){
        document.getElementById("sccResults").style.display = "block";
    }else {
        document.getElementById("sccResults").style.display = "none";
    }

}
function fillFirstCombo(contents) {
    responseContents = contents;
    jsonResponse = JSON.parse("\{\"campos\":" + responseContents + "\}");
    console.log(contents);
    var listItems = '<option selected="selected" value="0">- Áreas de conocimiento -</option>';

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
    var listItems = '<option selected="selected" value="0">- Campos de conocimiento -</option>';

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

    var listItems = '<option selected="selected" value="0">- Disciplinas de conocimiento -</option>';

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
    var listItems = '<option selected="selected" value="0">- Subdisciplinas de conocimiento -</option>';

    for (var i = 0; i < jsonResponse.campos.length; i++) {
        listItems += "<option value='" + jsonResponse.campos[i].idSubdisciplina + "'>" + jsonResponse.campos[i].descripcion + "</option>";
    }

    $("#subdisciplinasConocimiento").html(listItems);
    reloadMaterialSelects();

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
