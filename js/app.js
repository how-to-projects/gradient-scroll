const ul = document.querySelector('#list');
const length = 30;
const loremArray = [
    'Lorem, ipsum dolor.',
    'Lorem ipsum dolor sit amet consectetur.',
    'Lorem ipsum dolor sit.'
    ]
let listArray = [];

// https://stackoverflow.com/questions/30228902/duplicate-an-array-an-arbitrary-number-of-times-javascript
function replicateArray(array, n) {
   let arrays = Array.apply(null, new Array(n));
    
   arrays = arrays.map(() => {
       return array;
   });

   return [].concat.apply([], arrays);
}

listArray = replicateArray(loremArray, 20);

for (let i = 0; i < listArray.length; i++) {
    let li = document.createElement('li');
    let name = i;
    li.appendChild(document.createTextNode(listArray[i]));
    ul.appendChild(li);
}

// console.log(listArray);
// list.innerHTML = listArray;