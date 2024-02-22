require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

// initialize hardhat-tenderly plugin for automatic contract verification
var tdly = require("@tenderly/hardhat-tenderly");
tdly.setup({automaticVerifications: true});

// we read the private key and tenderly gateway URL 
// from the .env file using the dotenv package.
// The .env file should not be pushed or shared!
// This way, we can push the code to git and/or share publicly. 

// tenderly gateway url (which contains a secret id)
const tenderlyUrl = process.env.TENDERLY_SEPOLIA_URL;

//your private key. Make sure this address has some ETH on sepolia
const privateKey = process.env.ACCOUNT_PRIVATE_KEY; 

module.exports = {
solidity: "0.8.17",
networks: {
  sepolia_via_tenderly: {
    url: tenderlyUrl,
    // this will allow us to use our private key for signing TX later
    accounts: [`0x${privateKey}`],
    
    // this is the sepolia chain id
    // change it if you are using a different network
    chainId: 11155111
   },
},
tenderly: {
  // replace with project slug in Tenderly
  project: "project",
  
  // replace with your Tenderly username
  username: "ritik",
  
  // perform contract verification in private mode
  privateVerification: true,
   }
};