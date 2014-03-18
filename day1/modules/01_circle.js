var pi = Math.PI;

module.exports = function(radius) {

  function diameter() {
    return 2 * radius;
  }

  function circumference() {
    return pi * diameter();
  }

  function area() {
    return pi * Math.pow(radius, 2);
  }

  return {
    area: area,
    circumference: circumference
  };
}