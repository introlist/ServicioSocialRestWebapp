<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Repositorios Concacyt</title>
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="css/materialize.min.css">
    <link rel="stylesheet" href="css/style.css">
    <!-- Compiled and minified JavaScript -->
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/materialize.js"></script>
    <script type="application/javascript" src="js/script.js"></script>

    <input id="url" style="display: none;">
    <nav>
        <div class="nav-wrapper" style="background: #f0f0f0">


            <a href="http://redi.uady.mx/">
                <img border="0" alt="REDI UADY"  src="https://www.seleccion.uady.mx/posgrado/images/escudo.png" height="100%">
            </a>
            <a href="http://catalogs.repositorionacionalcti.mx/">
                <img border="0" alt="Repositorio CONACYT"  src="http://catalogs.repositorionacionalcti.mx/img/conacyt-logo.png" height="100%">
            </a>


            <ul id="nav-mobile" class="right hide-on-med-and-down" >
                <li><a   href="http://catalogs.repositorionacionalcti.mx/">Repositorio CONACYT</a></li>
                <li><a   href="http://www.uady.mx/">Uady.mx</a></li>
                <li><a   href="http://www.matematicas.uady.mx/">Facultad de Matemáticas</a></li>
            </ul>
        </div>
    </nav>



</head>
<body style="background: #D59F0F">

<br>
<br>


<div id="contenido" class="containter">
    <div class="row">
        <div style="padding-left: 20%; padding-right: 20%; padding-bottom: 10%" >
            <div class="card-panel z-depth-5" style="background: #003D79" onclick="reloadMaterialSelects();">
                <form onload="reloadMaterialSelects()">
                    <table id="tabla-filtros">
                        <tr>
                            <td>
                                <div id="acc" name="acc" class="input-field">

                                    <select id="areasConocimiento" onchange="selectArea(this);">
                                    </select>
                                    <label>Areas</label>
                                </div>
                                <br style="padding-top: 5%">
                                <hr class="hr-repos">
                                <br>
                                <div id="ccc" class="input-field">

                                    <select id="camposConocimiento" onchange="selectCampo(this)" ></select>
                                    <label >Campos</label>
                                </div>
                                <br style="padding-top: 5%">
                                <hr class="hr-repos">
                                <br>
                                <div id="dcc" class="input-field">
                                    <select id="disciplinasConocimiento" onchange="selectDisciplina(this)"></select>
                                    <label >Disc</label>
                                </div>
                                <br style="padding-top: 5%">
                                <hr class="hr-repos">
                                <br>
                                <div id="scc" class="input-field">
                                    <select id="subdisciplinasConocimiento" onchange="selectSubdisciplina(this);"></select>
                                    <label >Subdisc</label>

                                </div>
                                <br style="padding-top: 5%">
                                <hr class="hr-repos">
                                <br>

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