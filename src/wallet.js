const ethers = require("ethers");

// Replace the following with your own mnemonic
const mnemonic =
  "able earn athlete benefit victory point convince this true copper race snow";
const wallet = ethers.Wallet.fromMnemonic(mnemonic);

console.log(`Mnemonic: ${wallet.mnemonic.phrase}`);
console.log(`Address: ${wallet.address}`);

module.exports = wallet;
