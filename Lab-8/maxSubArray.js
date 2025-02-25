function maxSubArr(arr) {
    let maxSum = 0;
    let startIndex = 0;
    let endIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        let subArrSum = 0;
        for (let j = i; j < arr.length; j++) {
            subArrSum += arr[j];
            if (subArrSum > maxSum) {
                maxSum = subArrSum;
                startIndex = i;
                endIndex = j;
            }
        }
    }

    return {
        maxSum,
        maxSubArr: arr.slice(startIndex, endIndex + 1)
    }
}

const arr1 = [214, 55, 0, 1, 3, -2];
const arr2 = [8, -2, 5, -8];
const arr3 = [-4, -1, 4];

let result = maxSubArr(arr1);
console.log("Максимальна сума: ", result.maxSum);
console.log("Неперервний підмасив із максимальною сумою: ", result.maxSubArr);
console.log();

result = maxSubArr(arr2);
console.log("Максимальна сума: ", result.maxSum);
console.log("Неперервний підмасив із максимальною сумою: ", result.maxSubArr);
console.log();

result = maxSubArr(arr3);
console.log("Максимальна сума: ", result.maxSum);
console.log("Неперервний підмасив із максимальною сумою: ", result.maxSubArr);
console.log();