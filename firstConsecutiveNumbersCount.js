function getConsecutiveNumbersCount(vector) {
    const length = vector[0];
    let result = 0;
    let current = 0;

    for (let i = 1; i <= length; i++) {
        if (vector[i] === 1) {
            current++;
            if (i === length && current > result) {
                result = current;
            }
        } else {
            if (current > result) {
                result = current;
            }
            current = 0;
        }
    }

    return result;
}

console.log(getConsecutiveNumbersCount([5,1,0,1,0,1]));
console.log(getConsecutiveNumbersCount([5,1,1,1,1,1]));
console.log(getConsecutiveNumbersCount([4,1,0,1,1]));
console.log(getConsecutiveNumbersCount([3,0,0,0]));
