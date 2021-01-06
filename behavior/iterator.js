class MyIterator {
    constructor(data) {
        this.index = 0
        this.data = data
    }

    [Symbol.iterator](){
        return {
            next: () => {
                if (this.index < this.data.length){
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                }else{
                    this.index = 0
                    return {
                        done: true,
                        value: void 0 // undefained
                    }
                }
            }
        }
    }
}
//Generator

function* generator(array){
    let index = 0
    while (index < array.length){
        yield array[index++]
    }
}


const iterator = new MyIterator(['This', 'is', 'iteartor'])
const gen = generator(['This', 'is', 'iteartor'])

// for (const  val of gen){
//     console.log('Value', val)
// }

console.log(gen.next().value)