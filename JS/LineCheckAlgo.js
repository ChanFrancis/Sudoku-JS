// Check if the inputs are an array of 9
function LineCheck(A) {
   if (A.length !== 9) {
      // console.log("9 inputs necessary");
      return false
   }

   var noDuplicate = new Set();

   for (i = 0; i < 9; i++) {
      var num = A[i];

      // Verify if the inputs are number between 1 and 9, all number must be different 
      // Making sure that the inputs are number and betwween 1 and 9 first
      if (isNaN(A[i]) || A[i] < 0 || A[i] > 9 ) {
         return false;
      }

      // Now check for the duplicate by crossing each element in the array without crossing itself
      if(A[i] !== 0) {
         if (noDuplicate.has(num)) {
            // console.log("Duplicated number : "+ A[i])
            return false;
         }
         noDuplicate.add(num);
      }
      
   }

   // If the array passed the tests, return true
   return true;
}
