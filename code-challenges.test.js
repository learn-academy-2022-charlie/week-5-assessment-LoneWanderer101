// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

// const secretCodeWord1 = "Lackadaisical"
// // Expected output: "L4ck4d41s1c4l"
// const secretCodeWord2 = "Gobbledygook"
// // Expected output: "G0bbl3dyg00k"
// const secretCodeWord3 = "Eccentric"
// // Expected output: "3cc3ntr1c"

describe ("message", () => {
    it("takes in a string and returns a coded message", () => {
        const secretCodeWord1 = "Lackadaisical"
        const secretCodeWord2 = "Gobbledygook"
        const secretCodeWord3 = "Eccentric"
        expect(message(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(message(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(message(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// b) Create the function that makes the test pass.

    // Create a function called "message" that takes in a string
    // return a new string whith a coded message that replaced 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
    // i tried the code /a/, 4 however, it did not pass. After conducting A LOT of reserach i found the following... The gi modifier is used to do a **case insensitive search** of all occurrences of a regular expression in a string. This worked because it's case INsensitive.

    const message = (string) => {
            return string.replace(/a/gi, 4).replace(/e/gi, 3).replace(/i/gi, 1).replace(/o/gi, 0)
        }
    
        // PASS  ./code-challenges.test.js
        // message
        //     ✓ takes in a string and returns a coded message (3 ms)
        
        //   Test Suites: 1 passed, 1 total
        //   Tests:       1 passed, 1 total
        //   Snapshots:   0 total
        //   Time:        0.403 s, estimated 1 s
        //   Ran all test suites.
        //   ✨  Done in 1.50s.

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

// const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// const letterA = "a"
// // Expected output: ["Apple", "Banana", "Orange"]
// const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// const letterE = "e"
// // Expected output: ["Cherry", "Blueberry", "Peach"]

describe ("partLetter", () => {
    it("takes an array of words and a single letter and returns all the words that contain that particular letter", () => {
        const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
        const letterA = "a"
        const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
        const letterE = "e"
        expect(partLetter(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
        expect(partLetter(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// b) Create the function that makes the test pass.

// Create a function called partLetter that takes in an array of words and a single letter and returns all the words that contain that particular letter.
// it will take two arguments; the array and the particular letter
// use .filter on the array which creates a new array filled with elements that pass a test provided by a function.
// since the array includes the letters provided as capital letters, you have to turn all capital letters to lower case in order to match with the lower case letters provided ('a', 'e')
// then return the value and the new array which should output the new array with the correct words


const partLetter = (arr, LetterA) => {
    let newArray = arr.filter (value => {
        if (value.toLowerCase().includes(LetterA)) {
            return value
        }
    })
        return newArray
}

    // PASS  ./code-challenges.test.js
    // partLetter
    // ✓ takes an array of words and a single letter and returns all the words that contain that particular letter (3 ms)

    // Test Suites: 1 passed, 1 total
    // Tests:       1 passed, 1 total
    // Snapshots:   0 total
    // Time:        0.41 s, estimated 1 s
    // Ran all test suites.
    // ✨  Done in 1.88s.

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// const hand1 = [5, 5, 5, 3, 3]
// // Expected output: true
// const hand2 = [5, 5, 3, 3, 4]
// // Expected output: false
// const hand3 = [5, 5, 5, 5, 4]
// // Expected output: false

describe ("fullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a 'full house'", () => {
        const hand1 = [5, 5, 5, 3, 3]
        const hand2 = [5, 5, 3, 3, 4]
        const hand3 = [5, 5, 5, 5, 4]
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
    })
})

// b) Create the function that makes the test pass.

// Create a function named fullHouse that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind
// find out if any of the numbers match in an array
// if possible write a if else statement that decides if there if 2 and 3 of a kind somewhere in the array
// iterate through the array length. **THIS DID NOT WORK**
// also could try to sort the array then find out if any of the first two and last three match. And then find out if the first three match and the last two match. **THIS WORKS**. A fullhouse is first 3 and last 2 match. Or first 2 and last 3 match. By sorting the array you get all equal numbers together

    // This did NOT work
// const fullHouse = (n1, n2, n3, n4, n5) =>{
//     if (n1 === n2 && n2 === n3 && n4 === n5) {  
//         return (true)
//     } if (n1 === n2 && n2 === n3) {
//         return (false)
//     } if (n1 === n2 && n2 === n3 && n3 === n4)  
//         return (false)
// }

        // const hand1 = [5, 5, 5, 3, 3]
        // const hand2 = [5, 5, 3, 3, 4]
        // const hand3 = [5, 5, 5, 5, 4]
        
        // const hand4 = ['K', 'K', 'K', 'Q', 'Q']
        // const hand5 = [2, 2, 3, 'A', 'A']
        // tried the code with aces, queen, and king cards and it worked.

const fullHouse = (arr) => {
    sortedArr = arr.sort((a,b) => a-b)
        if (sortedArr[0] === sortedArr[1] && sortedArr[2] == sortedArr[3] && sortedArr[3] == sortedArr[4]) {
        return true
        } if (sortedArr[0] === sortedArr[1] && sortedArr[1] == sortedArr[2] && sortedArr[3] == sortedArr[4]) {
        return true
        } else {
        return false
        }
}

    // PASS  ./code-challenges.test.js
    // fullHouse
    // ✓ takes in an array of 5 numbers and determines whether or not the array is a 'full house' (2 ms)

    // Test Suites: 1 passed, 1 total
    // Tests:       1 passed, 1 total
    // Snapshots:   0 total
    // Time:        0.46 s, estimated 1 s
    // Ran all test suites.
    // ✨  Done in 2.20s.