const SendMoney = artifacts.require("SendMoney");

module.exports = function (deployer) {
  deployer.deploy(SendMoney);
};
