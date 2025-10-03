var elementosP = document.getElementsByTagName("p");
for (let item of elementosP) {
    console.log(item.id);
}

for (let item of elementosP) {
    if (item.classList.contains("parrafos")) {
        item.remove();
    }
}

for (let item of elementosP) {
    console.log(item.id);
}
