var verifyTable = document.getElementById("verify");
var TableContent = document.querySelectorAll(".value");

verifyTable.addEventListener("click", () => {
    let newTable = [];
    let ArrangedTable = [];
    var Full = true;

    // remove the Error styles and messages
    style.innerText = "";
    messages = "";

    TableContent.forEach(content => {
        if (content.innerHTML != "") {
            newTable.push(parseInt(content.innerHTML))
        } else {
            newTable.push(parseInt(0))
            Full = false;
        }
    });

    for (var i = 0; i < newTable.length; i += 9) {
        ArrangedTable.push(newTable.slice(i, i + 9));
    }

    TableLine(ArrangedTable);
    TableColumn(ArrangedTable);
    TableRegion(ArrangedTable);

    if (Full && TableLine(ArrangedTable) && TableColumn(ArrangedTable) && TableRegion(ArrangedTable)) {
        console.log("Congrat ! you won !")
        editableContent.forEach(element => {
            element.style.cssText  = "color: green !important";
            Ongoing = false;
            messages = "Congratulation !! You won !!"
            document.getElementById("Messages").innerHTML = messages;
        })
    }

})
