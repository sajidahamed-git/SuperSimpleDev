
// let array1 = [59, 33, 81, 45, 1, 53, 70, 3, 58, 63]
// let array2  = [75, 10, 69, 19, 47, 96, 58, 49]
// let nullarray = []
// let array3 = [3]
// // //11 M
// function minarray(array)
// {
//     if (array == null || array.length === 0) {
//     console.log('null');
//         return}
//     let min = array[0]
// for (let index = 0; index > array.length; index++) {
//     if (array[index]>min)
//         min = array[index]
// }
//     console.log(min);
// }


// minarray(nullarray)
// console.log(Math.min(...nullarray));


// countWords(['apple', 'grape', 'apple', 'apple'])

// function countWords(words) {
//     const result = {}
//     for (let i = 0; i < words.length; i++) {
//         const word = words[i]
//         if(!result[word]) {
//             result[word] = 1
//         }       
//         else {
//             result[word]++
//         }
//     }
//     console.log(result);
// }

//11O


// searchFor(wordsArray,'search')
// function searchFor(array,word) {
//     for (let index = 0; index < array.length; index++) {
//         if (word === array[index])
//             console.log(index);
//         // else 
//         // console.log('-1');
        
//     }

// }

// console.log(wordsArray);
//11q
// array1 = ['apple','banana','cone','pie','scent']
// function findIndex(array,word) {
//     let location = -1
//     for (let index = 0;index<array.length; index++) 
//     {
//         if(word === array[index])
//         {
//             location = index
//             break
//         }   
//     }
//     if (location ==-1) {
//         console.log(location);
//         return
//     }
//     console.log(location);
// }

// findIndex(array1,'snake')

//11s
// removeEgg(['egg','apple','egg','egg','ham'])

// function removeEgg(array){
//     tempArray =[]
//     for (let index = 0; index < array.length; index++) {
//         if (!(array[index] === 'egg')) {
//             tempArray.push(array[index])
//         }        
//     }
//     console.log(tempArray);
// }


//11T
// fdfd = ['egg','apple','egg','egg','fdfd','ham','egg']
// console.log(removeEgg(fdfd));

// function removeEgg(array){
//     console.log(array);
//     let i = 1
//     array = array.reverse()
//     tempArray =[]
//         for (let index = 0; index < array.length; index++) {
//             if (array[index] === 'egg') {
//                 i++
//                 if(i>3){
//                     console.log(i);
//                     tempArray.push(array[index])
//                 }
//             }
//             else 
//             tempArray.push(array[index])
//         }
//         return tempArray.reverse()
//     }

//11v Fizz Buzz
// for (let i = 1; i < 21; i++) {
//     if (i%3 ===0) {
//         if (i%5 ===0) {
//             console.log('fizzbuzz');
            
//         }
//         else {console.log('fizz');}
//     }
   
//     else if (i%5 === 0) {
//         console.log('buzz');
//     }
//     else console.log(i);
    
// }














