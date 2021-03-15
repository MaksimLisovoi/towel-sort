// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    const even = matrix.map((val, idx) => {
        if (idx % 2 !== 0) {
            val.reverse();
        }
        return val;
    });
    return even.reduce((acc, val) => acc.concat(val), []);
};
