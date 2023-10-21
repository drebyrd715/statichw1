class Governor { 
    static control = true
    static intelligence = true 
    

static showAuthority(){console.log("Show Authority")}

static outSmartYou(){console.log("I play chess not checkers")}

}
// const auth = new Governor()
// console.log(Governor.control)
// console.log( Governor.intelligence)
// Governor.showAuthority()
// Governor.outSmartYou()



class Person {
    constructor(name, age, hairColor,) {
        this.name = name
        this.age = age
        this.hairColor = hairColor
    }
  static hairColors() {
    return ["green", "pink", "grey"];
  }

}

class Worker extends Person {

}

const postalWorker = new Worker(
  "Rocky Balboa",
  47,
  Person.hairColors()[2],
  "grey"
);

console.log(postalWorker)

class privateCook extends Person {

}

const chef = new privateCook(
  "Clark Kent",
  30,
  Person.hairColors()[0],
  "green"
);

console.log(chef)