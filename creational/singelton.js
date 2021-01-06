class DataBase {
    constructor(data) {
        if (DataBase.exist) {
            return DataBase.instance
        }
        DataBase.instance = this
        DataBase.exist = true
        this.data = data
    }

    getData() {
        return this.data
    }
}

const MongoDB = new DataBase('MongoDB')
console.log(MongoDB.getData())

const MySql = new DataBase('MySql')
console.log(MySql.getData())
