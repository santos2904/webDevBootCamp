// 1

function test(x,y) {
  return y - x;
}

test(10, 40);
//output: 30


//2

function test(x) {
  return x*2; // first return
  console.log(x); // not run
  return x/2; // not run
}

test(40);
//output: 80