function maxSubArr(arr) {

    let tmpMaxSum = arr[0];
    let maxSum = arr[0];
    let maxSubArr = arr[0];

    let tmpStartIndex = 0;
    let startIndex = 0;
    let endIndex = 0;

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > tmpMaxSum + arr[i]) {
            tmpMaxSum = arr[i];
            tmpStartIndex = i;
        } else {
            tmpMaxSum += arr[i];
        }

        if (tmpMaxSum > maxSum) {
            maxSum = tmpMaxSum;
            startIndex = tmpStartIndex;
            endIndex = i;
        }

    }


    maxSubArr = arr.slice(startIndex, endIndex + 1);
    return {
        maxSum,
        maxSubArr
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