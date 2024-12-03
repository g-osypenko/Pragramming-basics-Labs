
//Итерирование по двумерному массиву

function max(matrix) {
    let maxElement = -Infinity; // Початково ставимо найменше можливе значення
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] > maxElement) {
          maxElement = matrix[i][j];
        }
      }
    }
    return maxElement;
  }
  
  const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  
  console.log(m); // 9