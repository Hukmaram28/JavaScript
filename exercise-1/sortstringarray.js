var nonSortedArray = ['hi', 'yo', 'whatup', 'bye', 'lol'];
var sortedArray = nonSortedArray.sort(function (a, b) {
      if (a < b) return -1;
      else if (a > b) return 1;
      return 0;
    });
console.log("Ascending order =" + sortedArray); 
var reverseSortedArray = nonSortedArray.sort(function (a, b) {
      if (a > b) return -1;
      else if (a < b) return 1;
      return 0;
    });
console.log("descending order = " + reverseSortedArray);