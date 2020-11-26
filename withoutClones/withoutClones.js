const startArray = [1,2,3,1,5,7,8,9,3];

const func = () => {
  
  let completedArray = [];
  
  startArray.forEach((currentElement) => {
    for (let i = startArray.indexOf(currentElement) + 1; i < startArray.length; i++) {
      if (currentElement === startArray[i]) {
        startArray.splice(startArray.indexOf(startArray[i], startArray.indexOf(currentElement) + 1), 1);
      };
    };
    completedArray.push(currentElement);
  });
  
  return completedArray;
};

console.log(func());