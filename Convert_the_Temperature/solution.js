/**
 * @param {number} celsius
 * @return {number[]}
 */
 var convertTemperature = function(celsius) {
    const ans =[];
    const kelvin = celsius+273.15
    const Fahrenheit= celsius*1.80 +32
    ans.push(kelvin,Fahrenheit)
    return ans
};

console.log(convertTemperature(122.11));