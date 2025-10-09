let primerLi = document.getElementById("primerElemento");

do {
    alert(primerLi.nodeName);
    alert(primerLi.nodeType);
    alert(primerLi.nodeValue);
    alert(primerLi.textContent);
}
while (primerLi = primerLi.nextElementSibling);