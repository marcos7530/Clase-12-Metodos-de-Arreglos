//Hay un arreglo con varios números donde todos son iguales excepto uno. 
//Haga una función que encuentre qué número es el distinto.

const array=[1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,];

function findUniqueNumber(arr) {
    const uniqueArr = arr.filter(elemen => arr.indexOf(elemen) === arr.lastIndexOf(elemen));
    return uniqueArr[0];
  }
  
  console.log(findUniqueNumber(array));