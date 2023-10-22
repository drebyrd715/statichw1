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

const worker2 = new PostalWorker("Fried Chicken", 82, "white", 72)
      
console.log(worker2)
worker2.steal()
worker2.greeting()
console.log(worker2.hairColor)

class Chef extends Person {
    constructor(name, age, hairColor, specialSause) {
        super (name, age, hairColor) 
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

// console.log(privateCook)
// console.log(privateCook.specialSause)
// privateCook.season()
// privateCook.tasttest()

const privateCook2 = new Chef ("Alex", 23, "grey", "It's a Secret")

console.log(privateCook2)
console.log(privateCook2.specialSause)
privateCook2.season()
privateCook2.tasttest()