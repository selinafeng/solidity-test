const ethers = require("ethers");

const provider = ethers.getDefaultProvider("ropsten", {
  // Replace the following with your own INFURA API key
  infura: "8183bc3d8fc54c2883cc7a4462d7882e",
});

module.exports = provider;
