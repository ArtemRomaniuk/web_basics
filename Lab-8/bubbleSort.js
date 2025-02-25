function BubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }

    return arr;
}

const arr1 = [214, 55, 0, 1, 3, -2];
const arr2 = [8, -2, 5, -8];
const arr3 = [-4, -1, 4];

console.log(BubbleSort(arr1));
console.log(BubbleSort(arr2));
console.log(BubbleSort(arr3));

