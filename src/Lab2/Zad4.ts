var array4 = [1, 2, 3, 4, 5, 6];
var threshold = 3;
function greaterThen_(value: number, threshold: number): boolean {
  return value > threshold;
}
var result4 = array4.reduce((acc, curr) => greaterThen_(curr, 5) ? acc + curr : acc, 0);

export { result4 }



