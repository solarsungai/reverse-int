module.exports = function reverse (n) {

    const absNumber = Math.abs(n);
    const firstDigit = String(absNumber)[0];
    const secondDigit = String(absNumber)[1];
    const lastDigit = absNumber % 10;

    const string = String(lastDigit) + secondDigit + firstDigit;

    return Number(string);
};
