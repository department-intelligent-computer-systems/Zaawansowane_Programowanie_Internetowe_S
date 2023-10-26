const strings = ["Ala", "1", "Ewa", "12.4"];

const sum = strings.reduce((accumulator, currentValue) => {
    const numberValue = parseFloat(currentValue);

    if (!isNaN(numberValue)) {
        return accumulator + numberValue;
    } else {
        return accumulator;
    }
}, 0);

export { sum }