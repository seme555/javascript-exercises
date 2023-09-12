const convertToCelsius = function(f) {

 let c_rounded;
 c_rounded= Math.round(5*(f-32)*10/9)/10
 
return c_rounded

};

const convertToFahrenheit = function(c) {

  let f_rounded;
 f_rounded= Math.round((9*c/5+32)*10)/10
 
return f_rounded

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
