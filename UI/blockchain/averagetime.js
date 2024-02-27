const Blockchain=require("./Blockchain");
const blockchain=new Blockchain();
blockchain.addBlock({data:"next data"});
console.log(blockchain.chain[blockchain.chain.length - 1]);
let prevTimestamp,nexTimestamp,nextBlock,timediff,averageTime;
const times=[];
for(let i=0;i<1000;i++){
    prevTimestamp=blockchain.chain[blockchain.chain.length - 1].timestamp;
    blockchain.addBlock({ data: `block ${i}` });
    nextBlock=blockchain.chain[blockchain.chain.length - 1];
    nexTimestamp=nextBlock.timestamp;

    timediff=nexTimestamp - prevTimestamp;
    times.push(timediff);
    averageTime=times.reduce((total,num) => (total+num))/times.length;
    console.log(
        `Time to mine block :${timediff}ms,Difficulty:${nextBlock.difficulty},Average time:${averageTime}ms`
      );
}