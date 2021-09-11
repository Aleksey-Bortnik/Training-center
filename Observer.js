function Observable() {
  const observers = [];


  this.sendMessage = function (message) {
    for (let i = 0, len = observers.length; i < len; i++) {
      observers[i].notify(message);
    }
  };

  this.addObserver = function (observer) {
    observers.push(observer)
  };

  this.deleteObserver = function (observer) {
    observers.pop(observer)
  };
}

async function getData() {
  const data = await fetch('https://swapi.dev/api/starships/9/')
  const json = await data.json();
  return json;
}

function Observer(behavior) {
  this.notify = function (message) {
    behavior(message);
  };
}

let ping = (message) => {
  const name = document.getElementsByClassName('name')
  name[0].innerHTML = message.name;
}

let ping1 = (message) => {
  document.getElementsByClassName('model')[0]
    .innerHTML = message.model;
}

let observable = new Observable();

let observer1 = new Observer(ping);
let observer2 = new Observer(ping1);

observable.addObserver(observer1);
observable.addObserver(observer2);

document.querySelector('button').addEventListener('click', async () => {
  const data = await getData();
  observable.sendMessage(data);
})
