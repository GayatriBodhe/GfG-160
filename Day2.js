class Solution {
    pushZerosToEnd(arr) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 0)
                arr[count++] = arr[i];
        }

        while (count < arr.length)
            arr[count++] = 0;
    }
}

const obj = new Solution();
const arr = [1, 2, 0, 4, 3, 5, 0];
obj.pushZerosToEnd(arr);
console.log(arr); 