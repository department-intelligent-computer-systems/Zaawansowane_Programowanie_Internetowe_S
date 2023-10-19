export class Counter{
    constructor(
       private count: number = 0
    ){}
    increase(){
        this.count++;
    }
    decrease(){
        this.count--;
    }
    getCount(){
        return this.count.toString();
    }
}