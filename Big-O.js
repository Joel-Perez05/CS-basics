const nemo = ["nemo"];

const everone = ["dory", "bruce", "marlin",
"nemo", "gill", "bloat",
"nigel", "squirt", "darla",
"hank"]

const large = new Array(10000).fill("nemo")

const findNemo = (arr) => {
    arr.forEach(i => {
        if (i === "nemo") {
            console.log("found nemo")
        }
    })
}
const findNemo2 = (arr) => {
    for (let fish of arr) {
        if (fish === "nemo") {
            console.log("found nemo")
        }
    }
}

findNemo(everone); // O(n) --> Linear Time
findNemo2(everone); // O(n) --> Linear Time

// const boxes = [0,1,2,3,4,5,6];
// const logAllPairs = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             console.log(arr[i] + arr[j]);
//         }
//     }
// };

// logAllPairs(boxes)

// const boo = (n) => {
//     for (let i = 0; i < n.length; i++) {
//         console.log("boo!");
//     };
// };

// boo([1,2,3,4,5])

// const arrOfTimes = (n) => {
//     let hiArr = [];
//     for (let i = 0; i < n; i++) {
//         hiArr[i] = "hi";
//     }
//     return hiArr;
// }

// console.log(arrOfTimes(8))

// const tweets = [
//     {
//         tweet: "hello",
//         date: 2012
//     }, 
//     {
//         tweet: "my",
//         date: 2014
//     }, 
//     {
//         tweet: "name",
//         date: 2016
//     }];

const array1 = [1,2,3,4];
const array2 = [3,8,6,0];

const containsCommonItems = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }
    }
    return false; 
};

console.log(containsCommonItems(array1, array2))