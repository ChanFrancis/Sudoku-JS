var sudokuTable = document.getElementById('sudoku');

// Create a loop for our 2 dimensionnals table
let to_verify = [];
for (i = 0; i < 9; i++) {
    to_verify.push(Array(9));
};

// Transfer our first table 'array_number' to the new table 'to_verify'
function Transfer(tableTransfer) {
    for (i = 0; i < 9; i++) {
        let split_table = tableTransfer[i].split(" ");
        to_verify[i] = split_table.map(Number);
    }
};
Transfer(array_number);

// Save the spot in a new set when value = 0
var initiate = true;
let ChangeableSpot = new Set();

function ContentEdit(table) {
    for (i = 0; i < 9; i++) {
        for (y = 0; y < 9; y++) {
            if (table[i][y] == 0) {
                ChangeableSpot.add(`${i},${y}`)
            }
        }
    }

    initiate = false;
}

if (initiate){
    ContentEdit(to_verify)
}

// Display our table into HTML by creating a HTML table and inserting each number in a boxe
function CreateTable(table) {
    let htmlTable = '<table class="sudoku_table">';

    // Strating to create the content of the table and inserting the numbers
    for (i = 0; i < 9; i++) {
        htmlTable += '<tr>';
        for (y = 0; y < 9; y++) {
            var lign = i+1
            var column = y+1
            
            // Variable to personalize the table
            var right_border = column == 3|| column == 6?' right_border ':'';
            var bottom_border = lign == 3|| lign ==6?' bottom_border ':'';

            // Variable to hide the value 0
            var content = table[i][y] !== 0 ? table[i][y] : "";

            // Variable to check if the spot should be editable or not, if yes then add the class "empty"
            var actualInit = `${i},${y}`
            var Changeable = ChangeableSpot.has(actualInit)? true : false;
            
            htmlTable += '<td  class="'+ right_border + bottom_border+'">';
            htmlTable += '<div id="cell_'+lign+'_'+column+'" class="value '+ (Changeable?'empty':'') +'">'+ content +  '</div>';
            htmlTable += '</td>';
        }
        htmlTable += '</tr>';
    }

    sudokuTable.innerHTML = htmlTable;
}
CreateTable(to_verify);
