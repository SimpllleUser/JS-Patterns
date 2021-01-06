class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    responsBilities(){}

    work(){
        return `${this.name} ${this.responsBilities()}`
    }

    getPaid(){
        return `${this.name} has salary = ${this.salary}`
    }
}

class Developer extends  Employee{
    constructor(name, salary) {
        super(name, salary);
    }

    responsBilities() {
        return `Process Develop program`
    }
}

class Tester extends  Employee{
    constructor(name, salary) {
        super(name, salary);
    }

    responsBilities() {
        return `Testing Develop program`
    }
}

const dev = new Developer('Vitalik', 10000)
console.log(dev.getPaid())
console.log(dev.work())
const  tester = new Tester('Oleg', 5000)
console.log(tester.getPaid())
console.log(tester.work())