const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function(name) {

  let initials = '';
  if (name.length > 3) {
    initials = name.slice(0, 3);
  } else {
    initials = name;
  }
  

  const conn = net.createConnection({
    host: '192.168.88.177',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log(`Connection Established.`);
    conn.write(`Name: ${initials}`);

  });

  // conn.on('connect', () => {
  //   conn.write(`Move: up`);
  //   setTimeout(() => {
  //     conn.write(`Move: up`);
  //   }, 50);
  //   setInterval(() => {
  //     conn.write(`Move: left`);

  //   }, 50);


  // });

  conn.on('data', (data) => {
    console.log(data);

  });

  return conn;
};

module.exports = {connect};