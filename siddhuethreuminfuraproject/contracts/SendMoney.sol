// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
//Main class that will be used to perform operation on our block.
contract SendMoney
{

   // uint public amount = 0;

     event Transfer(address indexed _from, address indexed _to, uint256  _value);

    constructor() {		
	}

function sendCoin(address sender, address receiver, uint amount) public payable returns(bool sufficient) {
    payable(receiver).transfer(amount * (1 ether));
    emit Transfer(sender, receiver, amount);
    return true;
}
    function sendAmount(address _receiver, uint _amount) public  
    {
        payable(_receiver).transfer(_amount * (1 ether));
    }

    function getSenderAmount(address _sender) public view returns(uint)
    {
        return (_sender).balance;
    }    
    function getReceiverAmount(address _receiver) public view returns(uint)
    {
        return (_receiver).balance;
    }     
}