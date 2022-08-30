const SendMoney = artifacts.require('SendMoney');

//   contract('SendMoney', function(accounts) {
   
//     it('calling a SendMoney', async function () {
//       const contract = await SendMoney.deployed();
//         await contract.sendAmount(accounts[1], 1);
//     });
   
//   });
  
  contract("SendMoney", (accounts) => {
   it("should send coin correctly", async () => {
      const SendMoneyInstance = await SendMoney.deployed();
  
      // Setup 2 accounts.
      const accountOne = accounts[0];
      const accountTwo = accounts[1];
  
      // Get initial balances of first and second account.
      const accountOneStartingBalance = (
        await SendMoneyInstance.getSenderAmount(accountOne));
      const accountTwoStartingBalance = (
        await SendMoneyInstance.getReceiverAmount(accountTwo));
        console.log('accountSenderStartingBalance-----------'+accountOneStartingBalance) ;
        console.log('accountReceiverStartingBalance -----------'+accountTwoStartingBalance) ;       
      // Make transaction from first account to second.
      const amount = 1;
      await SendMoneyInstance.sendCoin(accountOne, accountTwo, amount, { value: web3.utils.toWei('1000000000000000000', 'wei'), from: accountOne });
  
      // Get balances of first and second account after the transactions.
      const accountOneEndingBalance = (
        await SendMoneyInstance.getSenderAmount(accountOne));
      const accountTwoEndingBalance = (
        await SendMoneyInstance.getReceiverAmount(accountTwo));
       console.log('accountSenderEndingBalance-----------'+accountOneEndingBalance) ;
       console.log('amount -----------'+amount) ;
       console.log('accountSenderEndingBalance - amount -----------'+(accountOneStartingBalance - amount));
      assert.equal(
        accountOneEndingBalance,
        accountOneStartingBalance - amount,
        "Amount wasn't correctly taken from the sender"
      );
      console.log('accountReceiverEndingBalance -----------'+accountTwoEndingBalance) ;
      console.log('amount -----------'+amount) ;
      console.log('accountReceiverStartingBalance - amount -----------'+(accountTwoStartingBalance - amount));
      assert.equal(
        accountTwoEndingBalance,
        accountTwoStartingBalance + amount,
        "Amount wasn't correctly sent to the receiver"
      );
    });
  });