const removeFromArray = function () {

        let array = arguments[0];
        let location;

        for (let i = 1; i < arguments.length; i++) {

                if (array.includes(arguments[i])) {


                        location = array.indexOf(arguments[i]);
                        array.splice(location, 1);
                } else {
                        continue;
                }
        }

        return array;


};

// Do not edit below this line
module.exports = removeFromArray;
