const strings: string[] = ["Ala", "1", "Ewa", "12.4"];


let sum = 0

for (const str of strings){
    const number = parseFloat(str)

    if(!isNaN(number)){
        sum += number;
    }
}

export {sum}


