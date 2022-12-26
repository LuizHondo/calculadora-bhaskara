function calc() {
    var a = document.getElementById("valor_a").value;
    var b = document.getElementById("valor_b").value;
    var c = document.getElementById("valor_c").value;
    var delta = b * b - 4 * a *c;
    if (delta > 0)
    document.getElementById("resultado1").innerHTML = (-b + Math.sqrt(delta)) / (2 * a);
    if (delta > 0)
    document.getElementById("resultado2").innerHTML = (-b - Math.sqrt(delta)) / (2 * a);
    if (delta < 0) document.getElementById("resultado3").innerHTML = "O valor de delta é negativo, portanto a equação não tem raízes.&nbsp;" ;
    if (delta < 0) document.getElementById("delta").innerHTML = "Delta ="+ delta;
}