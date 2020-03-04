const readline = require('readline');
const readLine = readline.createInterface({ input: process.stdin });
let vector = [];

readLine.on('line', (number) => {
    vector.push(+number);
}).on('close', () => {
    let result = 0;
    let current = 0;

    for (let i = 1; i <= vector[0]; i++) {
        if (vector[i] === 1) {
            current++;
            result = Math.max(current, result);
        } else {
            current = 0;
        }
    }

    process.stdout.write(result.toString());
});
