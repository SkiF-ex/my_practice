const arrayWithNesting = [
  {
   prop1: 'prop1',
 },
 {
   prop2: 'prop2',
   children1: ['a', {children1:'child1'}, 'b'],
 },
  {
    prop3: 'prop3',
    children2: [
      {child1: 'child1',
        child2: [{child3: 'child3', child4: {child4: 'child4'}}],
        children2: [
          {child1: 'child1',
            child2: [{child3: 'child3', child4: {child4: 'child4'}}],
            children2: [
              {child1: 'child1',
                child2: [{child3: 'child3', child4: {child4: 'child4',children2: [
                  {child1: 'child1',
                    child2: [{child3: 'child3', child4: {child4: 'child4'}}]
                  }
                ]}}]
              }
            ]
          },
        ]
      }
    ],
  },
  {
    prop4: 'prop4',
    child4: {child5: 'child5'}
  }, ['a', 4]
];

let arrayWithoutNesting = [];

const arrayCheck = (array) => {
  array.forEach((arrayElement) => {
    if (typeof(arrayElement) === 'object') {
      const deleteElementIndex = array.indexOf(arrayElement);
      array.splice(deleteElementIndex, 1);
      objectCheck(arrayElement);
    };
  });
};

const objectCheck = (object) => {
  for (var key in object) {
    if (Array.isArray(object[key])) {
      arrayCheck(object[key]);
    };

    if (typeof(object[key]) === 'object' && !Array.isArray(object[key])) {
      objectCheck(object[key])
      delete object[key];
    };
  };
  arrayWithoutNesting.push(object);
};

const elementCheck = (property) => {
  property.forEach(arrayElement => {
    if (typeof(arrayElement) === 'object' && !Array.isArray(arrayElement)) {
      objectCheck(arrayElement);
    };

    if (Array.isArray(arrayElement)) {
      arrayWithoutNesting.push(arrayElement);
    };
  });

  if (typeof(property) !== 'object' || !Array.isArray(property)) {
    console.error('ERROR');
  };
};

const fullStackFunctions = () => {
  elementCheck(arrayWithNesting);

  return arrayWithoutNesting;
};


console.log(fullStackFunctions());