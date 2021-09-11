
class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance
    }
    Database.instance = this
    Database.exists = true
    this.data = data
  }

  getData() {
    return this.data
  }
}

const banana = new Database('banana data base')
console.log(banana.getData())

const tsnoc = new Database('something With base')

console.log(tsnoc.getData()) //show "banana data base"
console.log(banana.getData()) //show "banana data base"
