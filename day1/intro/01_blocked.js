var cycle = true;
var counter = 0;

function firstCallback() {
  console.log('firstCallback')
  while(cycle) {
    counter ++;
  }
}

setTimeout(firstCallback, 100);

function secondCallback() {
  console.log('secondCallback')
  cycle = false;
}

setTimeout(secondCallback, 200);
