function SandS(array) {
    for (var i = 1; i < arr.length; i++) {
      var x = array[i];
      var j = i - 1;
      
      while (j >= 0 && array[j] > x) {
        array[j + 1] = array[j];
        j--;
      }
      
      array[j + 1] = x;
    }
    
    return array;
  }
  