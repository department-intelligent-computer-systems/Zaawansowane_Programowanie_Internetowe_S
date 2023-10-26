var array3: number[] = [1, 2, 3, 4, 5, 6];
var threshold = 3;
var result3 = array3.reduce((acc, curr) => curr > threshold ? acc + curr : acc, 0);
export { result3 }