const redis = require("redis");

const CHANNELS = {
  TEST: "TEST",
  
  BLOCKCHAIN: "BLOCKCHAIN",
};
class PubSub {
   // constructor(){
  constructor({  blockchain }) {
    this.blockchain = blockchain;
    
    this.publisher = redis.createClient();
    this.subscriber = redis.createClient();

    this.subscriber.subscribe(CHANNELS.TEST);
    this.subscriber.subscribe(CHANNELS.BLOCKCHAIN);

    this.subscriber.on("message", (channel, message) =>
      this.handleMessage(channel, message)
    );
  }
  handleMessage(channel, message) {
    console.log(`Message recieved.Channel: ${channel} Message:${message}`);
    const parseMessage = JSON.parse(message);

    if (channel === CHANNELS.BLOCKCHAIN)//chck the chain is longer than replace
     {
    this.blockchain.replaceChain(parseMessage);
    }
  }
  publish({ channel, message }) {
    this.publisher.publish(channel, message);
  }
  broadcastChain() {
   this.publish({
   channel: CHANNELS.BLOCKCHAIN,
     message: JSON.stringify(this.blockchain.chain),//beacause it is in array form
   });
}
}

/*const checkPubSub = new PubSub();
setTimeout(
  () => checkPubSub.publisher.publish(CHANNELS.TEST, "Hellloooo"),
  1000
);*/

console.log("halloo3");
module.exports = PubSub;