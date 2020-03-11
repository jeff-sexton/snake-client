const net = require('net');
const { connect } = require('./client');

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const handleUserInput = (data) => {
  //console.log(`you got here ${data}`);
  if (data === '\u0003') {
    process.exit();
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  return stdin;
};



console.log('Connecting ...');
connect('jeff');

setupInput().on('data', handleUserInput);

