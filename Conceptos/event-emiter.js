const http = require("http");
const server = http.createServer();

const EventEmitter = require("events");

//TODO: Create a class that extends EventEmitter
class PaymentEvent extends EventEmitter {
  pay(callback) {
    console.log("Payment processing...");

    this.emit("Start", callback);

    callback();

    this.emit("Payment Completed", callback);

    console.log("Finalizing payment...");
  }
}

//TODO: Create a new instance of the class PaymentEvent
const payment = new PaymentEvent();


//TODO: Create a listener for the event 'Start'
payment.on("Start", (callback) => {
  console.log("Making payment, please wait...");
  callback();
});


//TODO: Create a listener for the event 'Payment Completed'
payment.on("Payment Completed", (callback) => {
  console.log("Payment Completed... Thanks!!");
  // callback();
});


//TODO: Call the method pay of the instance payment
payment.pay(() => {
  return setTimeout(() => {
    payment.emit("Payment Completed");
    console.log("====================================");
    console.log("Thanks for your purchase...");
    console.log("====================================");
  }, 3000);
});

module.exports = { PaymentEvent };
