

let xhr = new XMLHttpRequest();

let json = JSON.stringify({
  name: "Вася",
  surname: "Петров"
});

xhr.open("POST", 'https://jsonplaceholder.typicode.com/posts')
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

xhr.send(json);