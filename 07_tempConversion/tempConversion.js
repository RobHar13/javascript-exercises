const ftoc = function(temp) {
  newTemp = (temp - 32) * (5/9);
  return parseFloat(newTemp.toFixed(1));
  
};

const ctof = function(temp) {
    
  newTemp = (temp * (9/5)) + 32;
  return parseFloat(newTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
