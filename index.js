// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  blocks -= 42;
  return Math.abs(blocks);
}
function distanceFromHqInFeet(feet) {
  feet = distanceFromHqInBlocks(feet) * 264;
  return feet;
}
function distanceTravelledInFeet(initialBlock, finalBlock) {
  let traveled = Math.abs(initialBlock - finalBlock);
  return traveled * 264;
}
function calculatesFarePrice(start, destination) {
  let traveled = distanceTravelledInFeet(start, destination);
  if (traveled < 400) {
    return 0;
  } else if (traveled > 400 && traveled <= 2000) {
    return (traveled - 400) * 0.02;
  } else if (traveled > 2000 && traveled <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
console.log(calculatesFarePrice(50, 55));
