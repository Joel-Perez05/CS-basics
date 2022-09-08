const string = "Hi My name is Joel"

const reverseStr = (str) => {
    if(!str || str.length < 2 || typeof str !== "string") {
        return "hmm thats not a string";
    }
    let strArr = str.split("");
    let left = 0;
    let right = strArr.length-1;
    while (left < right) {
        let temp = strArr[left];
        strArr[left] = strArr[right];
        strArr[right] = temp;
        left++;
        right--;
    }
    return strArr.join("");
};

console.log(reverseStr(string));

const array1 = [2,4,6,9,12];
const array2 = [12,13,13,15];

const mergeSortedArr = (arr1, arr2) => {
    const mergedArr = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 1
    let j = 1
    if (arr1.length === 0) {
        return arr2;
    };
    if (arr2.length === 0) {
        return arr1;
    };

    while (arr1Item || arr2Item) {
        console.log(arr1Item, arr2Item)
        if (!arr2Item || arr1Item < arr2Item) {
            mergedArr.push(arr1Item)
            arr1Item = arr1[i];
            i++;
        } else {
            mergedArr.push(arr2Item);
            arr2Item = arr2[j];
            j++;
        }
    }

    return mergedArr;
}

console.log(mergeSortedArr(array1, array2))