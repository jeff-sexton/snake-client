let connection;
let moveInvervalID;
let direction = 0;
const directions = ['up', 'right', 'down', 'left'];

const autoMove = (direction) => {

  return setInterval((inst)=> {
    connection.write(`Move: ${inst}`);
    console.log(`Move: ${inst}`);
  }, 75, direction);

};

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

  if (data === 'w') {
    direction = 0;
    clearInterval(moveInvervalID);
    moveInvervalID = autoMove(directions[direction]);
    //connection.write(`Move: ${directions[direction]}`);
    console.log(directions[direction]);
    
  }
  if (data === 's') {
    direction = 2;
    clearInterval(moveInvervalID);
    moveInvervalID = autoMove(directions[direction]);

    //connection.write(`Move: ${directions[direction]}`);
    console.log(directions[direction]);
    
  }
  if (data === 'a') {
    direction = 3;
    clearInterval(moveInvervalID);
    moveInvervalID = autoMove(directions[direction]);
    //connection.write(`Move: ${directions[direction]}`);
    console.log(directions[direction]);
    
    
  }
  if (data === 'd') {
    direction = 1;
    clearInterval(moveInvervalID);
    moveInvervalID = autoMove(directions[direction]);
    //connection.write(`Move: ${directions[direction]}`);
    console.log(directions[direction]);

  }
  if (data === 'h') {
    connection.write(`Say: u-turn!`);
    clearInterval(moveInvervalID);
    moveInvervalID = autoMove(directions[direction]);
    //connection.write(`Move: ${directions[direction]}`);
    console.log(directions[direction]);

  }
  if (data === 'u') {
    console.log('do a u-turn!');
    connection.write(`Say: u-turn!`);
    clearInterval(moveInvervalID);

    let delay = 0;
    for (let i = 0; i < 2; i++) {
      direction += 1;
      console.log(direction);
      if (direction > directions.length - 1) {
        direction -= directions.length;
      }

      setTimeout((inst) => {
        connection.write(`Move: ${inst}`);
        console.log(`Move: ${inst}`);
      }, delay, directions[direction]);

      delay += 50;
    }

    //go back to autoMove
    setTimeout((inst) => {
      moveInvervalID = autoMove(inst);
    }, delay, directions[direction]);
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