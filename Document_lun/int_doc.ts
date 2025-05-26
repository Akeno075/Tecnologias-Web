(()=>{
type Hero= {
    name:string;
    age?:number;
    power:number[];
    getName?:()=>string;
}

let flash: Hero ={
    name:'Barry Allen',
    age:30,
    power:[1,2]
}

let superman: Hero ={
    name:'Clark Kent',
    power:[1,2,3],
    getName(){
        return this.name;
    }
}


});