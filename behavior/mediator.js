class User {
    constructor(name) {
        this.name = name
        this.room = null
    }

    send(message, to) {
        this.room.send(message, this, to)
    }

    recive(message, from){
        console.log(`${from.name} => ${this.name} :${message}`)
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user){
        this.users[user.name] = user
        user.room = this
    }

    send(message, from, to){
        if (to){
            to.recive(message, from)
        }else{
            Object.keys(this.users).forEach(key => {
                if (this.users[key] !== from) {
                    this.users[key].recive(message, from)
                }
            })
        }
    }
}

const user1 = new User('User-1')
const user2 = new User('User-2')
const user3 = new User('User-3')

const  room = new ChatRoom()

room.register(user1)
room.register(user2)
room.register(user3)

user1.send('Hello', user3)
user3.send('Hello bro', user1)