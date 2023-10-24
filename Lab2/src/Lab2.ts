export function zad1(a:number[]){
 return a.reduce((a,b)=>a+b,0);
}

export function zad2(a:number[]){
    return a.filter((a)=>a%2==0).reduce((a,b)=>a+b,0);
   }

export function zad3(a:number[],b:number){
    return a.filter((a)=>a>b).reduce((a,b)=>a+b,0);
}

export function greaterThen(a:number[],b:number){
    return a.filter((a)=>a>b).reduce((a,b)=>a+b,0);
}