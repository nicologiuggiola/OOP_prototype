class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
    let tempNum = undefined;
  while (true) {
      try {
          tempNum = primitiveMultiply(a, b);
          return tempNum;
      } catch (error) {
          if (error instanceof MultiplicatorUnitFailure) {
              console.log(error.message);
          }
      }
  }
}

console.log(reliableMultiply(8, 8));
// → 64