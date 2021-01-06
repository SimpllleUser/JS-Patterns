const car = {
    wheels: 4,
    init(){
        console.log(`I hvae ${this.wheels} wheels , and my owner ${this.owner}`)
    }
}

const carWithOwner = Object.create(car, {
    owner:{
        value: "Дима"
    }
})

console.log(carWithOwner.__proto__ === car)

carWithOwner.init()
