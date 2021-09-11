const obj = {
    login: 'lars',
    email: 'email@gmail.com'
}

function validate(data) {
    return true
}

function validator(data) {
    validate(data)
}

function parseData(data) {
    data.forEach(el => console.log(el))
}

function stringDecorator(data) {
    return `${data.login}, ${data.email}`
}

function arrayDecorator(data) {
    return Object.values(data)
}

validator(stringDecorator(obj))

parseData(arrayDecorator(obj))
