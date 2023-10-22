class Person {
    constructor(name, age, hairColor,) {
        this.name = name
        this.age = age
        this.hairColor = hairColor
    }

}
class Governor extends Person { 
    constructor(name, age, hairColor, state) {
        super(name, age, hairColor,)
        this.name = name
        this.age = age
        this.hairColor = hairColor
        this.state = state
    }
    
    static hairColors() {
        return ["green", "pink", "grey"];
      }
    static state = true
    
static state(){console.log("Show Authority")}

}
const Gov1 = new Governor("Dre", 52, "grey", "Pennsylvania")
// console.log(Gov1.state)
// console.log(Gov1)


class PostalWorker extends Person {
    constructor(name, age, hairColor, longHours) {
       super (name, age, hairColor)
       this.name = name
       this.age = age
       this.hairColor = hairColor
       this.longHours = longHours
        
    }
    steal() {
     console.log("lets get away!");
    }
    greeting() {
    console.log("Good day sir");
    }      
}

 const worker1 = new PostalWorker("RockyBalboa", 47, "green", 50)
      
// console.log(worker1)
// worker1.steal()
// worker1.greeting()
// console.log(worker1.hairColor)

class Chef extends Person {
    constructor(name, age, hairColor, specialSause) {
        super (name, age, hairColor) 
        this.name = name
        this.age = age
        this.hairColor = hairColor
        this. specialSause = specialSause
    }
    season() {
        console.log("Put my foot in it!");
       }
       tasttest() {
       console.log("That was delicious");
       }      
}

const privateCook = new Chef ("Jarrod", 18, "black", "Grandma's Sause")

console.log(privateCook)
console.log(privateCook.specialSause)
privateCook.season()
privateCook.tasttest()