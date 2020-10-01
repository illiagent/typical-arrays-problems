exports.min = function min(array) {
    if (!array || !array.length) {
        return 0;
    } else {
        let minimal = Math.min(...array);
        return minimal;
    }
};

exports.max = function max(array) {
    if (!array || !array.length) {
        return 0;
    } else {
        let maximum = Math.max(...array);
        return maximum;
    }
};

exports.avg = function avg(array) {
    if (!array || !array.length) {
        return 0;
    } else {
        return array.reduce((a, b) => a + b) / array.length;
    }
};
