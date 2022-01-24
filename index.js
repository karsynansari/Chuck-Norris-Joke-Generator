fetch('http://api.icndb.com/jokes/random')
.then (res => res.json())
.then (data => console.log(data))