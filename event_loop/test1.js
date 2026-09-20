let begin = Date.now();

const output = (x) => {
  console.log(`${x} \n elapsed ${Date.now() - begin}`);
};

const blocking = () => {
  let i = 0;
  while (i < 10000000) {
    i++;
  }
  return " all done";
};

output("🐃 synchronous 1");
output(blocking());
output("synchronous 2");
