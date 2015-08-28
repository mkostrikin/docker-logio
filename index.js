#!/usr/bin/env node

var net = require('net');
var program = require('commander');
var os = require("os");

program
  .version('0.1.0')
  .option('-h, --host [host]', 'LogIo server host', 'localhost')
  .option('-p, --port [port]', 'LogIo server port', 28777)
  .option('-n, --name [name]', 'LogIo node name', os.hostname())
  .parse(process.argv);



function connect() {
  var stream = net.createConnection(program.port, program.host);
  return stream;
}
var s = connect();

process.stdin.pipe(s);
