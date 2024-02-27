
const express = require("express");
const bodyParser = require("body-parser");

const request = require("request");// for synching process
const Blockchain = require("./Blockchain");
const PubSub = require("./publishsubscribe");




const app = express();

const blockchain = new Blockchain();

const pubsub = new PubSub({ blockchain });



//object

function getBlockchain() {
  return blockchain.chain;
}

const DEFAULT_PORT = 500;//changes port as it become error not file run on same port
const ROOT_NODE_ADDRESS = `http://localhost:${DEFAULT_PORT}`;//root node address
setTimeout(() => pubsub.broadcastChain(), 1000);//call broadcast method

app.use(bodyParser.json());
//const PORT=300;
//app.listen(PORT, () => {
   // console.log(`listening to PORT:${PORT}`);
//});


const synChains = () => {
  request(
    { url: `${ROOT_NODE_ADDRESS}/index` },
    (error, reposnse, body) => {
      if (!error && reposnse.statusCode === 200)//al correct than responce is 200 in browser it is 404
       {
        const rootChain = JSON.parse(body);
        console.log("Replace chain on sync with", rootChain);
        blockchain.replaceChain(rootChain);
      }
    }
  );
};



app.get("./html/castvote", (req, res) => {
  res.json(blockchain.chain);
});
app.post("./html/castvote", (req, res) => {
  const  data  = req.body.test;

  blockchain.addBlock( data );
  pubsub.broadcastChain();
  res.redirect("/castvote");
});
app.post("/recordVote", (req, res) => {
  const data  = req.body.test;

  blockchain.addBlock( data );
  pubsub.broadcastChain();
  res.redirect("/recordVote");
});





let PEER_PORT;

if (process.env.GENERATE_PEER_PORT === "true") {
  PEER_PORT = DEFAULT_PORT + Math.ceil(Math.random() * 1000);//radom select port// ceil not become decimal value
}
const PORT = PEER_PORT || DEFAULT_PORT;
app.listen(PORT, () => {
  console.log(`listening to PORT:${PORT}`);
  synChains();
})
module.exports = { getBlockchain};
