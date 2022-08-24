const repeatString = function (message, number) {

    stringMessage = message;

    if (number < 0) {
        return "ERROR";
    } else if (number ===0) {
        return "";


    } else {


        for (let i = 1; i < number; i++) {
            stringMessage = stringMessage.concat(message);
        }
        return stringMessage;

    }
    
};

// Do not edit below this line
module.exports = repeatString;
