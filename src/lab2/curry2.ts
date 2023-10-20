function curry2<T1, T2, T3>(fn:(arg1:T1, arg2:T2)=>T3) {
    return (a1:T1)=>(a2:T2)=>fn(a1,a2);
}

export { curry2 }