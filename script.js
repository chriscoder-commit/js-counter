let i = 0

// incrementor section 
let x = document.getElementById("display-incrementor")

let increment = document.getElementById("increment");
increment.addEventListener("click", function() {
  i ++;
  console.log(i);
  x.innerHTML = i;
  
  x.style.fontSize = Math.floor((Math.random() * 12) + 10)+"px";
})

// decrementor section
let decrement = document.getElementById("decrement");

decrement.addEventListener("click", function() {
  i --;
  console.log(i);
  x.innerHTML = i;

  x.style.fontSize = Math.floor((Math.random() * 12) + 10)+"px";
})

