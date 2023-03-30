const removeFromArray = function(...args) {
    /* Extract all values to remove from array, check if values are in array, remove, return array after values are deleted */
    let array = args[0];
    for (let i = 1; i < args.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] === args[i]) {
                array.splice(array.indexOf(args[i]), 1);
                j--;
            }
        }
    }
    console.log(array);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
