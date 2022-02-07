//https://eth-ropsten.alchemyapi.io/v2/nhZGVcFKIw3RkCaXxUt5kkQszb2PwgsR

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.7.0',
  networks:{
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/nhZGVcFKIw3RkCaXxUt5kkQszb2PwgsR',
      accounts: ['612274fada3499ad97f2a5f155c60fd099a158aad0a8b420a8024e90725545b4']
    }
  }
}