function getJewels(jewels, stones) {
    let result = 0;

    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones[i])) {
            result++;
        }
    }

    return result;
}

console.log(getJewels("ab", "aabbccd"));
