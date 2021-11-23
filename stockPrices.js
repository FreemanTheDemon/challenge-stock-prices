let best = (arr) => {
    // set a profit variable
    let profit = 0;
    // iterate over the array we're given
    for (let i = 0; i < arr.length; i++) {
        // iterate again starting one index greater than where we are with the other iteration
        for (let j = i + 1; j < arr.length; j++) {
            // if subtracting the greater number from the smaller number generates a greater profit
            if ((arr[j] - arr[i]) > profit) {
                // then reset the profit variable to this new profit
                profit = arr[j] - arr[i];
            }
        }
    }
    return profit;
}

// [15, 10, 20, 22, 1, 9]
//       ^       ^
// profit === 12

console.log(best([15, 10, 20, 22, 1, 9]));
console.log(best([1, 2, 3, 4, 5]));
console.log(best([2, 3, 10, 6, 4, 8, 1]));
console.log(best([7, 9, 5, 6, 3, 2]));
console.log(best([0, 100]));
console.log(best([5, 4 , 3, 2, 1]));
console.log(best([100]));
console.log(best([100, 0]));
