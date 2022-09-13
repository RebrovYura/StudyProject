// function fizzBuzz(n) {
//     let output = [];
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             output.push("FizzBuzz");
//         } else if (i % 3 == 0) {
//             output.push("Fizz");
//         } else if (i % 5 == 0) {
//             output.push("Buzz");
//         } else output.push(i.toString());
//     }
//     return output
// }

// console.log(fizzBuzz(15));

// function middleNode(head) {
//     let output = [];
//     let middleElement = Math.floor(head.length / 2);
//     for (let i = middleElement; i <= head.length - 1; i++) {
//         output.push(head[i])
//     }
//     return output
// }

// console.log(middleNode([1,2,3,4,5,6]));


// class LinkedList {
//     constructor() {
//         this.data = null;
//         this.tail = null;
//     }

//     append(data) {
//         const node = {data, next: null}

//         if (this.tail) {
//             this.tail.next = node
//         }

//         this.tail = node
//     }
// }

// ['a', 'a'] > letter = a    hasLetter = false  
// ['', 'b', 'a']

// function canConstruct(ransomNote, magazine) {
//     const ransomLetters = ransomNote.split('');
//     for (let i = 0; i < ransomLetters.length; i++) {
//         const letter = ransomLetters[i];
//         const hasLetter = magazine.includes(letter);

//         if (!hasLetter) return false;

//         magazine = magazine.replace(letter, '');
//     }
//     return true
// }

// console.log(canConstruct('aa', 'aba'))

// Создаем пустой массив
// Идем по строке и записываем символы в переменную, 
// пока символы не повторяются 
// При повторении переменная заноситься в массив
// Далее цикл продолжает идти начиная с индекса символа,
// на котором закончился прошлый обход

// function lengthOfLongestSubstring(s) {
//     let maxLength = 0;
//     let substring = '';
//     let substringsArray = [];

//     for (let i = 0; i < s.length; i++) {
//         substring = s[i];

//     }

//     return maxLength
// }

// let user = {
//     name: "John",
//     age: 31,
// };

// user.isAdmin = true;

// console.log(user);  

// function firstTask() {
//     for (let i = 5; i <= 10; i++) {
//         console.log(i);
//     }
// }


function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    // for (let i = 0; i <= data.length; i++) {
    //     if (typeof(data[i]) == 'string') {
    //         data[i] += ' - done';
    //     }
    //     if (typeof(data[i]) == 'number') {
    //         data[i] *= 2;
    //     }
    // }
    data.forEach(el => {
        if (typeof (el) == 'string') {
            el += ' - done';
        }
        if (typeof (el) == 'number') {
            el *= 2;
        }
    });
    const result = [];

    // for (let i = data.length - 1; i >= 0; i--) {
    //     result.push(data[i]);
    // }

    return data;
}

console.log(secondTask());