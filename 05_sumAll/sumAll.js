const sumAll = function(beginNum, endNum) {
    let sum = 0;
    if (typeof beginNum == "number" && typeof endNum == "number" &&
        beginNum >= 0 && endNum >= 0) {
        
        let smallerNum = 0;
        let largerNum = 0;
        if (beginNum >= endNum) {
            largerNum = beginNum;
            smallerNum = endNum;
        } else {
            smallerNum = beginNum;
            largerNum = endNum;
        }

        for (let i = smallerNum; i <= largerNum; i++) {
            sum += i;
        }
        return sum;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
