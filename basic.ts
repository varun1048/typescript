interface ty{
    model : string,
}
function bike(inner :ty){
return    inner.model
}

let cla = {model:"varun"}
//console.log(bike(cla))

class BikeClass{
    full : string
    constructor(
            public type:string,
            public num : number,
            public name:string
        ){   
    this.full = `Name:${name} model:${type} numner:${num}`; 
    }
}

interface BickInterface{
    type:string,
    name:string
}

function Bick(inner : BickInterface){
    return `Bick model ${inner.name="rx100"} Name ${inner.name}`
}

let customer = new BikeClass("rx100",1,"yamaha")

console.log(customer)