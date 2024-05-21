// //gets the http built in module from node using commonJS notation
// const http = require("node:http");

// //creates a server
// //function here is called once for every request to this server
// const server = http.createServer((req, res) => {
//   const { method, url, headers } = req;

//   //When an error is present in the request
//   req.on('error', (err) => {
//     console.error(err.stack)
//   })

//   console.log(headers)
//     console.log("server reached");

//   res.setHeader('Content-Type', 'application/json')
//   res.statusCode = 200

//   res.end('<html><body><h1>Hello, World!</h1></body></html>')

//   res.on('error', (err) => {
//     console.error(err.stack)
//   })
// });

// server.listen(8080);

// const EventEmitter = require('node:events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();

// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });

// myEmitter.emit('event');

// const EventEmitter = require('node:events');
// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();

// When 'event' event is emmitted
// myEmitter.on('event', function(a, b) {
//   console.log(a, b, this, this === myEmitter);
//   // Prints:
//   //   a b MyEmitter {
//   //     _events: [Object: null prototype] { event: [Function (anonymous)] },
//   //     _eventsCount: 1,
//   //     _maxListeners: undefined,
//   //     [Symbol(shapeMode)]: false,
//   //     [Symbol(kCapture)]: false
//   //   } true
// });

//Passes these arguments to the callback function above
// myEmitter.emit('event', 'a', 'b');

let http = require("node:http");

let fs = require("node:fs");
const { error } = require("node:console");

// let server = http.createServer((req, res) => {
//   let { headers, method, httpVersion, url } = req;

//   //console.log(headers, method, httpVersion, url);

//   //The req parameter is basically an
//   // http.IncomingMessage object under the hood.
//   //which is an extension of class readable strem
//   console.log("request recieved");

//   let body = [];

//   // Plugging into the readable stream Events
//   req.on("error", (err) => {
//     console.error(err);
//   });

//   req.on("data", (chunk) => {
//     body.push(chunk);
//   });

//   req.on("end", () => {
//     body = Buffer.concat(body).toString();

//     // console.log(body)

//     // The res parameter is an http.serverResponse
//     //which extends http.outgoingMessage
//     // which is an extension of class Stream

//     res.on('error', (err) => {
//       console.error(err)
//     })

//     res.statusCode = 200

//     res.setHeader('Content-Type', 'application/json')

//     //Object construction
//     let responseBody = { headers, method, url, body }
    
//     res.write(JSON.stringify(responseBody))

//     res.end()

//   });


//   //This statement returns an empty array
//   // because the emmitters are asynchronous
//   // console.log(body);

// });

//filesystem next
//fs.readFile('./home.html', 'utf-8' ,callback)




// for some reason this code using PIPE
// does not listen for the emitter end for 
// both response and request
let server = http
  .createServer((request, response) => {
    request.on('error', err => {
      console.error(err);
      response.statusCode = 400;
      response.end();
    });
    response.on('error', err => {
      console.error(err);
    });

    if (request.method === 'POST' && request.url === '/echo') {
      request.pipe(response);
    } else {
      response.statusCode = 404;
      response.end();
    }
  })

server.listen(8080);

//This is the event emmited when a request is recieved
// THe arrow function i passed in create server
// is called a listener function because it is passed
// to this event automatically so i dont write this
//again

// server.on('request', () => {

//   console.log('request recieved')
// })

// function callback(err,data) {
//   if (err) throw err;
//   console.log('File is being read')

//   console.log(data)
// }
