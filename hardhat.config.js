require('@nomiclabs/hardhat-waffle');
require("dotenv").config({ path: ".env" });

module.exports = {
  solidity: '0.8.1',
  networks: {
    goerli: {
      url: process.env.ALCHEMY_API_KEY_URL,
      accounts: [process.env.GOERLY_PRIVATE_KEY],
    },
  },
};
