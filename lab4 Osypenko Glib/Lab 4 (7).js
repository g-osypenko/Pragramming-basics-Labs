
//Итерирование объектов-справочников

function ages(persons) {
    const result = {}; 
    for (const person in persons) { 
      const { born, died } = persons[person]; 
      result[person] = died - born; 
    }
    return result; // Повертаємо результат
  }
  
  const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
  };
  
  console.log(ages(persons));
  // {
  //   lenin: 54,
  //   mao: 83,
  //   gandhi: 79,
  //   hirohito: 88,
  // }