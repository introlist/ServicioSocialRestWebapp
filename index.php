<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Repositorios Concacyt</title>
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="css/materialize.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Compiled and minified JavaScript -->
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/materialize.js"></script>
    <script type="application/javascript" src="js/script.js"></script>

    <input id="url" style="display: none;">
    <nav>
        <div class="nav-wrapper" style="background: #444444" >
			<!-- #f0f0f0 -->

            <a href="http://redi.uady.mx/">
				<!-- <img border="0" alt="REDI UADY"  src="https://www.seleccion.uady.mx/posgrado/images/escudo.png" height="100%"> -->
                <img border="0" alt="REDI UADY"  src="resources/images/uady-logo.png" height="100%">
            </a>
            <a href="http://catalogs.repositorionacionalcti.mx/">
			<!-- <img border="0" alt="Repositorio CONACYT"  src="http://catalogs.repositorionacionalcti.mx/img/conacyt-logo.png" height="100%"> -->
                <img border="0" alt="Repositorio CONACYT"  src="resources/images/conacyt-logo.png" height="100%">
            </a>


            <ul id="nav-mobile" class="right hide-on-med-and-down" >
                <li><a   href="http://catalogs.repositorionacionalcti.mx/">Repositorio CONACYT</a></li>
                <li><a   href="http://www.uady.mx/">UADY</a></li>
                <li><a   href="http://www.matematicas.uady.mx/">Facultad de Matemáticas</a></li>
            </ul>
        </div>
    </nav>



</head>
<body style="background: #F0F0F0">
<!-- #D59F0F -->
<br>
<br>
<div class="fixed-action-btn" >
    <a onclick="getInput()" class="btn-floating btn-large waves-effect waves-light red tooltipped" data-position="left" data-delay="20" data-tooltip="Insertar los datos de la última selección">
        <i class="material-icons">add</i>
    </a>
</div>
<div id="contenido" class="containter">
    <div class="row">
        <div style="padding-left: 20%; padding-right: 20%; padding-bottom: 10%" >
            <div class="card-panel z-depth-5" style="background: #003D79" onclick="reloadMaterialSelects();">
                <form onload="reloadMaterialSelects()">
                    <table id="tabla-filtros">
                        <tr>
                            <td>
                                <div id="acc" name="acc" class=" row input-field">
                                    <div class="card-panel-card" id="accResults-card" style="display: block">
									<select id="areasConocimiento" class="selects"  onchange="selectArea(this);">
                                    </select>
                                    <label for="areasConocimiento">Áreas de conocimiento</label>
									<div class="card-panel-result" id="accResults" style="display: none"></div>
									</div>
                                </div>
                                <hr class=" row hr-repos">
                                <div id="ccc" class="row input-field">
									<div class="card-panel-card" id="ccsResults-card" style="display: block">
                                    <select id="camposConocimiento" class="selects"  onchange="selectCampo(this)" ></select>
                                    <label for="camposConocimiento">Campos de conocimiento</label>
                                    <div class="card-panel-result" id="cccResults" style="display: none"></div>
									</div>
                                </div>
                                <hr class=" row hr-repos">
                                <div id="dcc" class=" row input-field">
									<div class="card-panel-card" id="dccResults-card" style="display: block">
                                    <select id="disciplinasConocimiento" class="selects"  onchange="selectDisciplina(this)"></select>
                                    <label for="disciplinasConocimiento">Disciplinas de conocimiento</label>
                                    <div class="card-panel-result" id="dccResults" style="display: none"></div>
									<div>
                                </div>
                                <hr class="row hr-repos">
                                <div id="scc" class=" row input-field">
									<div class="card-panel-card" id="sccResults-card" style="display: block">
                                    <select id="subdisciplinasConocimiento" class="selects" onchange="selectSubdisciplina(this);"></select>
                                    <label for="subdisciplinasConocimiento">Subdisciplina de conocimiento</label>
                                    <div class="card-panel-result" id="sccResults" style="display: none"></div>
									<div>
                                </div>
                                <hr class=" row hr-repos">

                            </td>
                        </tr>
                    </table>
                </form>
            </div>

        </div>

    </div>
</div>


</body>
</html>