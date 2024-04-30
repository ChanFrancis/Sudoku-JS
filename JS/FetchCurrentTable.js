var messages = "";
var SudokuTable = document.getElementById("sudoku_table");
var style = document.getElementById("style-id");

// Check all line of the table and identify if there is an error
function TableLine(table) {
    // Checking if each array is correct
    var results = [];

    // If not error, then return true
    var result = true;

    table.forEach(element => {
        results.push(LineCheck(element));
    });

    // Identify if the array have an error. If there is an error, log it and specify the concerned line.
    for (i = 0; i < 9; i++) {
        if (!results[i]) {
            var line = i + 1

            // In case of error, show the error and send the message
            var styleError = ".sudoku_table tr:nth-child("+ line +") { color: red; background-color: lightgray;}"
            var Error = ("<div>There is an issue on the line " + line + ".</div>")

            style.innerText += styleError;
            messages += Error

            result = false
        }
    }

    if (result) {
        return true
    }
}


// Check all the column of the table en identify if there is as error
function TableColumn(table) {
    //Transposing the table to be suitable for the function LineCheck checking
    var transpose = [];
    var result = true;

    for (i = 0; i < 9; i++) {
        var columns = [];
        for (x = 0; x < 9; x++) {
            columns.push(table[x][i])
        }
        transpose.push(columns)
    }

    // Checking the columns
    transpose.forEach(function (e, i) {
        var Column_result = LineCheck(e);
        i++;

        var Error = "<div>There is an issue on the column " + i + ".</div>"
        var styleError = ".sudoku_table tr td:nth-child("+ i +") { color: red; background-color: lightgray;}"

        if (!Column_result) {
            style.innerText += styleError;
            messages += Error

            result = false
        }
    })

    if (result) {
        return true
    }
}


// Check all the region of the table en identify if there is as error
function TableRegion(table) {
    // Making the data suitable for checking
    var groupArray = [];

    //Saving the regions IDs 
    var CellID = [];

    var result = true;

    // Creating an array for each region and pushing it to groupArray
    for (i = 0; i < 3; i++) {
        for (p = 0; p < 3; p++) {
            var region = [];
            var CellRegion = [];
            for (x = 0; x < 3; x++) {
                for (z = 0; z < 3; z++) {
                    region.push(table[x + (i * 3)][z + (p * 3)])
                    CellRegion.push("cell_"+[x + (i * 3) + 1]+"_"+[z + (p * 3) + 1])
                }
            }
            groupArray.push(region);
            CellID.push(CellRegion);
        }
    }

    // Checking the regions
    groupArray.forEach(function (e, i) {
        var Column_result = LineCheck(e);

        var Error = "<div>There is an issue on the region " + i + ".</div>"
        
        if (!Column_result) {
            // The regions are sorted in CellID, calling the specified region to get all the ID
            CellID[i].forEach(cell => {
                var styleError = "#"+ cell + "{ color: red; background-color: lightgray;}"
                style.innerText += styleError;
            })

            messages += Error

            result = false;
        }
        i++;
    })

    // Send the error messages
    document.getElementById("Messages").innerHTML = messages;

    if (result) {
        return true
    }
}

TableLine(to_verify);
TableColumn(to_verify);
TableRegion(to_verify);
