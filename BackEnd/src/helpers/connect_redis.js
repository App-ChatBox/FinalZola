const redis = require("redis");
const client = redis.createClient({
  url:"redis://redis-17678.c1.ap-southeast-1-1.ec2.cloud.redislabs.com:17678",
  auth_user:"Aluwas",
  auth_pass:"Anhviet6jklz!"
});
client.ping((err, pong) => {
  console.log(pong);
});
client.on("error", (error) => {
  console.log(error);
});
client.on("connect", (error) => {
  console.log("connected");
});
client.on("ready", (error) => {
  console.log("Redis to ready");
});
module.exports = client;
