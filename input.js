let connection;

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const handleUserInput = (data) => {
  //console.log(`you got here ${data}`);
  if (data === '\u0003') {
    connection.end();
    process.exit();
  }

  let direction = 0;
  let directions = ['up', 'right', 'down', 'left'];

  if (data === 'w') {
    direction = 0;
    connection.write(`Move: ${directions[direction]}`);
    console.log(directions[direction]);

  }
  if (data === 's') {
    direction = 2;
    connection.write(`Move: ${directions[direction]}`);
    console.log(directions[direction]);
    
  }
  if (data === 'a') {
    direction = 3;
    connection.write(`Move: ${directions[direction]}`);
    console.log(directions[direction]);
    
    
  }
  if (data === 'd') {
    direction = 1;
    connection.write(`Move: ${directions[direction]}`);
    console.log(directions[direction]);

  }
  if (data === 'u') {
    console.log('do a u-turn!');
    let delay = 0;
    for (let i = 0; i < 2; i++) {
      direction ++;
      if (direction > directions.length - 1) {
        direction -= directions.length;
      }

      setTimeout(() => {
        connection.write(`Move: ${directions[direction]}`);
        console.log(`Move: ${directions[direction]}`);
      }, delay);

      delay += 50;
    }
  }

};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = {setupInput};