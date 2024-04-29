var editableContent = document.querySelectorAll(".empty");
var NumberBox = document.getElementById("numberedButton");
var clickedElement = "";

// Une fois cette variable "false", ne plus lancer le code
var Ongoing = true;

// For all the editable spot on the table, fetch the id when clicked
editableContent.forEach(content => {
    content.addEventListener("click", () => {
        if (!Ongoing) {
            return
        }
        
        clickedElement = content.id;
        clickedElementValue = content.innerText

        var Selected = document.querySelector(".Selected")
        if (Selected) {
            Selected.classList.remove("Selected")
        }

        content.classList.add("Selected");
        NumberBox.classList.add("Activate");
    });
});

// Remove the Select animation if the user click outside the table or the Number pad
document.body.addEventListener("click", (event)=> { 
    var NumberBoxClicked = NumberBox.contains(event.target);
    var sudokuTableClicked = sudokuTable.contains(event.target);
    var Selected = document.querySelector(".Selected")

    if(Selected && !NumberBoxClicked && !sudokuTableClicked) {
        Selected.classList.remove("Selected")
        NumberBox.classList.remove("Activate");
        clickedElement = ""
    }
}) 

// When the table spot is selected, change the content with Number pad
var NumberButton = document.querySelectorAll("[class^='button-']");

NumberButton.forEach(button => {
    button.addEventListener("click", () => {
        var getClickedElementID = document.getElementById(clickedElement);
        if (getClickedElementID) {
            getClickedElementID.innerHTML = button.innerText;
        }
    })
})

// When the table spot is selected, remove the content if user click on the remove div
var Remove = document.getElementById("remove");

Remove.addEventListener("click", ()=> {
    var getClickedElementID = document.getElementById(clickedElement);
    if (getClickedElementID) {
        getClickedElementID.innerHTML = "";
    }
})