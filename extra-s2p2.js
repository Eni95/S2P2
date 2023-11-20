//! M1 - Epicode - JavaScript Extra Training (Marco Longo)

//* ARRAY:
//? Ex.1 (Easy) - Realizzare un programma che costruisca un array di 20 elementi. Ogni elemento dev'essere pari al proprio indice nell'array.
// Es. [0, 1, 2, 3, 4, 5 ... 19]

let arrayTest = [];

for (let index = 0; index < 20; index++) {
   // console.log(index);
    arrayTest.push (index); 
}

// console.log(arrayTest);


//? Ex.2 (Medium) - Realizzare un programma che, dato un array di numeri interi, stampi in console la media di tutti i valori.
// N.B. Utilizza solo i concetti visti a lezione, niente scorciatoie!
let media = 0;
for (let index = 0; index < arrayTest.length; index++) {
    media = media + arrayTest [index];   
    // console.log (arrayTest[index]);
    // console.log(media)
}
media = media / arrayTest.length;
//console.log (media);

//? Ex.3 (Medium) - Realizzare un programma che rimuova i multipli dispari di 3 dall'array riportato sotto.
// N.B. 18 è un multiplo pari di 3, 21 è un multiplo dispari di 3.
let arrayThird = [20, 31, 15, 78, 48, 27, 61, 51]; 
//console.log(arrayThird);
for (let index = 0; index < arrayThird.length; index++) {
    if (arrayThird[index] % 3 === 0 && arrayThird[index] % 2 === 1) {
        //console.log('Eliminato ' + arrayThird[index]);
        arrayThird.splice (index,1);
    }
    
}
//console.log (arrayThird);


//? Ex.4 (Hard) - Dato un array di numeri interi (nums) ed un numero intero (target), ritornare i 2 indici degli elementi nell’array nums che, sommati, restituiscano il numero target.
//? Assumere che ogni nums fornito in input accetti solo una soluzione e che questo contenga solo numeri diversi fra loro.
// Esempio:
// Input: nums = [4, 9, 11, 13] , target = 22
// Output: [1,3]
let nums = [4, 9, 11, 13];
let target = 22;
// nums [0, 1, 2, 3, 4, 5, 6]
// Suggerimento: Sapevi che i cicli for possono essere innestati?

let index1 = 0;
let index2 = 0;
for (let index = 0; index < nums.length; index++) {
    for (let x = 0; x < nums.length; x++) {
       if (nums[index] + nums[x] === target) {
        index1 = index;
        index2 = x;
        console.log (index,x);
       }
        
    }
    
}


