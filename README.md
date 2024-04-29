# Sudoku-JS
<br>
Sudoku game coded mainly with JS.
You have the 9x9 table at the center and a pad next by where you can insert your number into the empty square. The table contains 9 small 3x3 table delimited by the purple line called region. <br>
Each line, column and region should contain the number 1 to 9 without duplication. You can check if you've made some mistake by clicking on "Check Sudoku", it will highligt them for you. <br>
At the left, you have the message box, giving you some indication of your mistake (if any) when clicking on "Check Sudoku". <br>
<br>
This code doesn't require any other components, you can download as is and run the html.
<br> 
Visualize the game here : https://sudoku-js-chx6.onrender.com/ <br> <br>

JS file : <br>
   1) Sudoku_fakeAPI: Simulates receiving the Sudoku puzzle in a 9-array format. <br>
   2) ProcessContentAndDisplay: Transfers the Sudoku content into a two-dimensional table to manage the data and displays the table in the HTML. <br>
   3) LineCheckAlgo: Develops a function to receive the two-dimensional array and checks for issues on each line. <br>
   4) FetchCurrentTable: On demand, these three functions will send the current table to check if the content is correct and send an error message if necessary. <br>
   5) Sudoku_edit: This file allows users to modify empty spots and complete them using the number pad. <br>
   6) Sudoku_Check: When the user clicks on "check", the function gathers the current content to send them to the functions of "FetchCurrentTable". Based on the result, it displays information in the message box. <br>


<br><br>
Answer
<img src="https://github.com/ChanFrancis/Sudoku-JS/assets/108381402/cfd5aa13-acbe-4e58-b344-62dbdfec9bc4">
