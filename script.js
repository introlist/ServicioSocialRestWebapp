var url = "";
var repo = "areas";
var filter1 = "";
var filter2 = "";
var noInputFilter;
var originalNoFilter;
window.onload = function () {
    opcionesAreas();
    noInputFilter = document.getElementById("cell-filtros").innerHTML;
    originalNoFilter = document.getElementById("cell-filtros").innerHTML;
    generarOpciones();
};
function generarOpciones() {
    var e = document.getElementById("repositorio");
    repo = e.options ? e.options[e.selectedIndex].value : repo;
    url = "http://catalogs.repositorionacionalcti.mx/webresources/" + repo + "cono";
    noFilters();
    if(repo === "area"){
        opcionesAreas();
    }else if (repo === "campo"){
        opcionesCampos();
    }
    else if (repo === "disciplina"){
        opcionesDisciplinas();

    }
    else if (repo === "subdisciplina"){
        opcionesSubdisciplinas();
    }

    generarFiltros()
}
function generarFiltros(){
    if(repo === "area"){
        inputFiltrosArea();
    }else if (repo === "campo"){
        inputFiltrosCampos();
    }
    else if (repo === "disciplina"){
        inputFiltrosDisciplinas();
    }
    else if (repo === "subdisciplina"){
        inputFiltrosSubdisciplinas();
    }
}
function noFilters(){
    filter1 = "";
    filter2 = "";
    document.getElementById("cell-filtros").innerHTML = originalNoFilter;
    setURL();
}

function setFilter1(value) {
    filter1 = "/"+value;
    setURL();
}
function setFilter2(value) {
    filter2 = "/"+value;
    setURL();
}

function opcionesAreas() {
    document.getElementById("filtros").innerHTML =
        "<optgroup label='FILTROS'>" +
        "<option value=\"0\">\n" +
        "                            Todos los elementos\n" +
        "                        </option>\n" +
        "                        <option value=1>\n" +
        "                            Obtener un elemento\n" +
        "                        </option>\n" +
        "                        <option value=2>\n" +
        "                            Obtener un conjunto de elementos\n" +
        "                         </option>\n" +
        "                        <option value=3>\n" +
        "                            Obtener el numero total de elementos\n" +
        "                        </option>\n" +
        "                        <option value=4>\n" +
        "                            Obtener elementos por su descripcion\n" +
        "                        </option>\n" +
        "                        <option value=5>\n" +
        "                           Obtener elementos por su descripcion en ingl&eacutes\n" +
        "                        </option>" +
        "</optgroup>"

    noInputFilter = document.getElementById("cell-filtros").innerHTML;
}
function opcionesCampos() {
    document.getElementById("filtros").innerHTML =
        "<optgroup label='FILTROS'>" +
        "<option value=\"0\">\n" +
        "                            Todos los elementos\n" +
        "                        </option>\n" +
        "                        <option value=1>\n" +
        "                            Obtener un elemento\n" +
        "                        </option>\n" +
        "                        <option value=2>\n" +
        "                            Obtener un conjunto de elementos\n" +
        "                         </option>\n" +
        "                        <option value=3>\n" +
        "                            Obtener el numero total de elementos\n" +
        "                        </option>\n" +
        "                        <option value=4>\n" +
        "                            Obtener el conjunto de elementos del catálogo asociados a un área\n" +
        "                        </option>\n" +
        "</optgroup>"

    noInputFilter = document.getElementById("cell-filtros").innerHTML;
}
function opcionesDisciplinas() {
    document.getElementById("filtros").innerHTML =
        "<optgroup label='FILTROS'>" +
        "<option value=\"0\">\n" +
        "                            Todos los elementos\n" +
        "                        </option>\n" +
        "                        <option value=1>\n" +
        "                            Obtener un elemento\n" +
        "                        </option>\n" +
        "                        <option value=2>\n" +
        "                            Obtener un conjunto de elementos\n" +
        "                         </option>\n" +
        "                        <option value=3>\n" +
        "                            Obtener el numero total de elementos\n" +
        "                        </option>\n" +
        "                        <option value=4>\n" +
        "                            Obtener el conjunto de elementos del catálogo asociados a un campo\n" +
        "                        </option>\n" +
        "</optgroup>"

    noInputFilter = document.getElementById("cell-filtros").innerHTML;
}
function opcionesSubdisciplinas() {
    document.getElementById("filtros").innerHTML =
        "<optgroup label='FILTROS'>" +
        "<option value=\"0\">\n" +
        "                            Todos los elementos\n" +
        "                        </option>\n" +
        "                        <option value=1>\n" +
        "                            Obtener un elemento\n" +
        "                        </option>\n" +
        "                        <option value=2>\n" +
        "                            Obtener un conjunto de elementos\n" +
        "                         </option>\n" +
        "                        <option value=3>\n" +
        "                            Obtener el numero total de elementos\n" +
        "                        </option>\n" +
        "                        <option value=4>\n" +
        "                            Obtener el conjunto de elementos del catálogo asociados a una disciplina\n" +
        "                        </option>\n" +
        "</optgroup>"

    noInputFilter = document.getElementById("cell-filtros").innerHTML;
}
function inputFiltrosArea() {
    var filtro = document.getElementById("filtros").value;
    if (filtro === "0"){
        document.getElementById("cell-filtros").innerHTML = noInputFilter;
        originalNoFilter = document.getElementById("cell-filtros").innerHTML;
        noFilters();
    }
    else if(filtro === "1"){
        noFilters();
        document.getElementById("cell-filtros").innerHTML = noInputFilter + "" +
            "<input type='number' id='filtro1' value='1' min='0'   onload='setFilter1(this.value)' onchange='setFilter1(this.value)'>";
        document.getElementById("filtros").selectedIndex = 1;
        setFilter1(1);

    }else  if(filtro === "2"){
        noFilters();
        document.getElementById("cell-filtros").innerHTML = noInputFilter + "" +
            "<input type='number' id='filtro1' value='1' min='0' onload='setFilter1(this.value)' onchange='setFilter1(this.value)'>" +
        "<input type='number' id='filtro2' value='2' min='0' onload='setFilter2(this.value)' onchange='setFilter2(this.value)'>"
        document.getElementById("filtros").selectedIndex = 2;
        setFilter1(1);
        setFilter2(2);
    }else if (filtro === "3"){
        noFilters();
        document.getElementById("cell-filtros").innerHTML = noInputFilter;
       setFilter1('count')
    }else if (filtro === "4"){
        noFilters();
        var desc = "byDescripcion/";
        document.getElementById("cell-filtros").innerHTML = noInputFilter + "" +
            "<input type='text' id='filtro1' value='' size='45' onload='setFilter1(\"byDescripcion/\"+this.value)' onchange='setFilter1(\"byDescripcion/\"+this.value)'>";
        document.getElementById("filtros").selectedIndex = 4;
        setFilter1(desc);
    }else if (filtro === "5"){
        noFilters();
        var desc = "byDescription/";
        document.getElementById("cell-filtros").innerHTML = noInputFilter + "" +
            "<input type='text' id='filtro1' value='' size='45'  onload='setFilter1(\"byDescription/\"+this.value)' onchange='setFilter1(\"byDescription/\"+this.value)'>";
        document.getElementById("filtros").selectedIndex = 5;
        setFilter1(desc);
    }

}

function inputFiltrosCampos() {
    var filtro = document.getElementById("filtros").value;
    if (filtro === "0"){
        document.getElementById("cell-filtros").innerHTML = noInputFilter;
        originalNoFilter = document.getElementById("cell-filtros").innerHTML;
        noFilters();
    }
    else if(filtro === "1"){
        noFilters();
        document.getElementById("cell-filtros").innerHTML = noInputFilter + "" +
            "<input type='number' id='filtro1' value='1' min='0'   onload='setFilter1(this.value)' onchange='setFilter1(this.value)'>";
        document.getElementById("filtros").selectedIndex = 1;
        setFilter1(1);

    }else  if(filtro === "2"){
        noFilters();
        document.getElementById("cell-filtros").innerHTML = noInputFilter + "" +
            "<input type='number' id='filtro1' value='1' min='0' onload='setFilter1(this.value)' onchange='setFilter1(this.value)'>" +
            "<input type='number' id='filtro2' value='2' min='0' onload='setFilter2(this.value)' onchange='setFilter2(this.value)'>"
        document.getElementById("filtros").selectedIndex = 2;
        setFilter1(1);
        setFilter2(2);
    }else if (filtro === "3"){
        noFilters();
        document.getElementById("cell-filtros").innerHTML = noInputFilter;
        setFilter1('count')
    }else if (filtro === "4") {
        noFilters();
        document.getElementById("cell-filtros").innerHTML = noInputFilter + "" +
            "<input type='number' id='filtro1' value='' min='0' onload='setFilter1(\"byArea/\"+this.value)' onchange='setFilter1(\"byArea/\"+this.value)'>";
        document.getElementById("filtros").selectedIndex = 4;
        setFilter1("byArea/"+1);
    }

}
function inputFiltrosDisciplinas() {
    var filtro = document.getElementById("filtros").value;
    if (filtro === "0"){
        document.getElementById("cell-filtros").innerHTML = noInputFilter;
        originalNoFilter = document.getElementById("cell-filtros").innerHTML;
        noFilters();
    }
    else if(filtro === "1"){
        noFilters();
        document.getElementById("cell-filtros").innerHTML = noInputFilter + "" +
            "<input type='number' id='filtro1' value='1' min='0'   onload='setFilter1(this.value)' onchange='setFilter1(this.value)'>";
        document.getElementById("filtros").selectedIndex = 1;
        setFilter1(1);

    }else  if(filtro === "2"){
        noFilters();
        document.getElementById("cell-filtros").innerHTML = noInputFilter + "" +
            "<input type='number' id='filtro1' value='1' min='0' onload='setFilter1(this.value)' onchange='setFilter1(this.value)'>" +
            "<input type='number' id='filtro2' value='2' min='0' onload='setFilter2(this.value)' onchange='setFilter2(this.value)'>"
        document.getElementById("filtros").selectedIndex = 2;
        setFilter1(1);
        setFilter2(2);
    }else if (filtro === "3"){
        noFilters();
        document.getElementById("cell-filtros").innerHTML = noInputFilter;
        setFilter1('count')
    }else if (filtro === "4") {
        noFilters();
        document.getElementById("cell-filtros").innerHTML = noInputFilter + "" +
            "<input type='number' id='filtro1' value='' min='0' onload='setFilter1(\"byCampo/\"+this.value)' onchange='setFilter1(\"byCampo/\"+this.value)'>";
        document.getElementById("filtros").selectedIndex = 4;
        setFilter1("byCampo/"+1);
    }

}
function inputFiltrosSubdisciplinas() {
    var filtro = document.getElementById("filtros").value;
    if (filtro === "0"){
        document.getElementById("cell-filtros").innerHTML = noInputFilter;
        originalNoFilter = document.getElementById("cell-filtros").innerHTML;
        noFilters();
    }
    else if(filtro === "1"){
        noFilters();
        document.getElementById("cell-filtros").innerHTML = noInputFilter + "" +
            "<input type='number' id='filtro1' value='1' min='0'   onload='setFilter1(this.value)' onchange='setFilter1(this.value)'>";
        document.getElementById("filtros").selectedIndex = 1;
        setFilter1(1);

    }else  if(filtro === "2"){
        noFilters();
        document.getElementById("cell-filtros").innerHTML = noInputFilter + "" +
            "<input type='number' id='filtro1' value='1' min='0' onload='setFilter1(this.value)' onchange='setFilter1(this.value)'>" +
            "<input type='number' id='filtro2' value='2' min='0' onload='setFilter2(this.value)' onchange='setFilter2(this.value)'>"
        document.getElementById("filtros").selectedIndex = 2;
        setFilter1(1);
        setFilter2(2);
    }else if (filtro === "3"){
        noFilters();
        document.getElementById("cell-filtros").innerHTML = noInputFilter;
        setFilter1('count')
    }else if (filtro === "4") {
        noFilters();
        document.getElementById("cell-filtros").innerHTML = noInputFilter + "" +
            "<input type='number' id='filtro1' value='' min='0' onload='setFilter1(\"byDisciplina/\"+this.value)' onchange='setFilter1(\"byDisciplina/\"+this.value)'>";
        document.getElementById("filtros").selectedIndex = 4;
        setFilter1("byDisciplina/"+1);
    }

}

function setURL() {

    document.getElementById("respuesta").value = url + filter1 + filter2;
    if(document.getElementById("respuesta").value.length > 5){
        document.getElementById("goTo").disabled = false;
        document.getElementById("copy").disabled = false;
    }
    document.getElementById("estatus").innerHTML = "";
}

function goToURL() {
    window.open(document.getElementById("respuesta").value);

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
