// there will be given number simple sumbstract the sum of digits from product of digits 

/**
 * @param {number} number
 * @return {number}
 */

function productAndSumDifferance(number) {
    let results = getProductAndSum(number)
    return results.product - results.sum;
}

function getProductAndSum(number) {
    let product = 1; let sum = 0;
    while (number > 0) {
        let lastIndexNumber = number % 10;
        number = parseInt(number / 10);
        product *= lastIndexNumber;
        sum += lastIndexNumber;
    }
    return { product: product, sum: sum };
}


