let i = 0

let x = document.getElementById("display-incrementor")

let increment = document.getElementById("increment");
increment.addEventListener("click", function() {
  i ++;
  console.log(i);
  x.innerHTML = i;
})

let decrement = document.getElementById("decrement");

decrement.addEventListener("click", function() {
  i --;
  console.log(i);
  x.innerHTML = i;
})

