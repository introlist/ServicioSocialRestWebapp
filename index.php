<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Repositorios Concacyt</title>
    <link rel="stylesheet" type="text/css" href="Elegancia.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="application/javascript" src="script.js"></script>
    <input id="url" style="display: none;">
</head>
<body>
<!--?php
$página_inicio = file_get_contents('http://catalogs.repositorionacionalcti.mx/webresources/');
echo "<div id=\"urlContent\" style=\"display: none;\">". $página_inicio;
?-->
<p>
<a href="http://catalogs.repositorionacionalcti.mx/">
<img border="0" alt="Repositorio CONACYT" src="http://catalogs.repositorionacionalcti.mx/img/conacyt-logo.png" width="200" height="100">
</a>
</p>

<a href="http://catalogs.repositorionacionalcti.mx/">Repositorio CONACYT</a>

<div id="contenido">
    <form>
        <table id="tabla-filtros" onchange="setURL()" class="paleBlueRows">
            <tr>
                <td class="styled-select blue semi-square">
                    <div id="acc">
                        <select id="areasConocimiento" onchange="generateSecondCombo(this)" style='width:100%;'></select>
                    </div>
                    <div id="ccc">
                        <select id="camposConocimiento" onchange="generateThirdCombo(this)" style='width:100%;'></select>
                    </div>
                    <div id="dcc">
                        <select id="disciplinasConocimiento" onchange="generateForthCombo(this)" style='width:100%;'></select>
                    </div>
                    <div id="scc">
                        <select id="subdisciplinasConocimiento" onchange="generateLastInputs(this);" style='width:100%;'></select>
                    </div>
                </td>
            </tr>
        </table>
    </form>
    <p id="estatus"></p>
</div>

<div id="inputs">
    <input id="respuesta" name="respuesta"  type="text" readonly="true" placeholder="Resultado.">
    <input id="goTo" type="button" value="Navegar" disabled="disabled" onclick="goToURL()">
    <input id="copy" type="button" value="Copiar" disabled="disabled" onclick="copyURL()">
</div>
    
</body>
</html>