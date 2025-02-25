function bigNumsSum(num1, num2) {

    num1.length > num2.length ? num2 = num2.padStart(num1.length, "0") : num1 = num1.padStart(num2.length, "0");
    let num1Arr = [...num1].map(Number);
    let num2Arr = [...num2].map(Number);
    let result = [];
    let remainder = 0;

    for (let i = num1.length - 1; i >= 0; i--) {
        result.unshift(String((num1Arr[i] + num2Arr[i] + remainder) % 10));
        remainder = Math.floor((num1Arr[i] + num2Arr[i] + remainder) / 10);
    }
    if (remainder != 0) result.unshift(String(remainder));

    return result.join("");
}

let num1 = "45190309435274236581049376598";
let num2 = "412432895470324975903246580934809";
console.log("Сума двох великих чисел: ", bigNumsSum(num1, num2));