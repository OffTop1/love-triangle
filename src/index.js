function getLoveTrianglesCount(spichonees){
   var result = 0;
   spichonees.unshift(0);
   
   for(let a = 1; a < spichonees.length; a++){
       let b = spichonees[a];
       let c = spichonees[b];
       
       result += a == spichonees[c];
   }
   return result/3;
}

let count = getLoveTrianglesCount([2, 3, 1, 5,6,4]);

console.log(count);