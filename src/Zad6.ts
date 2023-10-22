const array = ["Ala", "1", "Ewa", "12.4"];

const sumNumber = (array: string[]) => {
  return array.reduce((sum, element) => {
    return !Number.isNaN(Number(element)) ? sum + Number(element) : sum;
  }, 0);
};

export const isNumberSum = sumNumber(array);
