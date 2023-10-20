//z1
const tab :number[]=[1,2,3,4,5]


const suma=(tab:number[]):number=>{
let sum:number=tab.reduce((a,x)=>(a+x),0)
    return sum
}

//z2

const suma2=(tab:number[]):number=>{
    let sum:number=tab.filter(x=>x%2).reduce((a,x)=>(a+x),0)
        return sum
    }
//zad3
const suma3=(tab:number[],num:number):number=>{
    let sum:number=tab.filter(x=>x>num).reduce((a,x)=>(a+x),0)
        return sum
    }
//zad4
const greaterThen=(x:number,y:number):boolean=>{
if (x>y){
    return true

}else{return false}
}

const suma4=(tab:number[],num:number,f:((x:number,y:number)=>boolean)):number=>{
    let sum:number=tab.filter(x=>f(x,num)).reduce((a,x)=>(a+x),0)
        return sum
    }

//zad5    

const curry2=<T1, T2, T3>(fn:(arg1:T1, arg2:T2)=>T3)=> {
    return (a1:T1)=>(a2:T2)=>fn(a1,a2);
    }
const suma5=(tab:number[],num:number,f:((x:number,y:number)=>boolean),f2:(arg1:number[], arg2:number)=>number):number=>{
        let sum:number=f2(tab.filter(x=>f(x,num)),tab.reduce((a,x)=>(a+x),0))
            return sum
        }
    

//zad6

let tab2:string[]=["ala","1","ad","2"]

let sumZad6:number=tab2.filter( (elmt)=> 
     elmt.match(/\d/)
).map(x=>parseFloat(x)).reduce((a,x)=>(a+x),0)
console.log(sumZad6)