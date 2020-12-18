let i = 0

// this is targeting the value which I want to change - which is the place where the numbers are
let x = document.getElementById("display-incrementor")

// incrementor section 
let increment = document.getElementById("increment");
increment.addEventListener("click", function() {
  i ++;
  console.log(i);
  x.innerHTML = i;
  
  // changes font size randomly
  x.style.fontSize = Math.floor((Math.random() * 12) + 10)+"px";

  x.style.color = changeColor();
})

// decrementor section
let decrement = document.getElementById("decrement");

decrement.addEventListener("click", function() {
  i --;
  console.log(i);
  x.innerHTML = i;

  // changes font size randomly
  x.style.fontSize = Math.floor((Math.random() * 12) + 10)+"px";
  
  // changes color size randomly 
  x.style.color = changeColor();
})


// the function that actually gets a random color from the hex system
function changeColor() {
  return '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
}