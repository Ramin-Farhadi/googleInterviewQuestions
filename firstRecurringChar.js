//Google question
//Given an array = [2,5,1,2,3,5,1,2,4];
//It should return 2

const array1 = [2, 1, 1, 2, 3, 5, 1, 2, 4];

// we make a hashmap then check to see which item will call first.
const func = (arr) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      return obj[arr[i]];
    } else {
      obj[arr[i]] = arr[i];
    }
  }
};

console.log(func(array1));
//Given an array = [2,1,1,2,3,5,1,2,4];
//It should return 1

//Given an array = [2,3,4,5];
//It should return undefined;
