// SPDX-License-Identifier: MIT
pragma solidity >= 0.4 .21 < 0.7 .0;

contract Shipping {

  enum State {
    Created,
    Pending,
    Shipped,
    Delivered
  }
  State public state;


  address payable public sender;
  address payable public receiver;

  modifier condition(bool _condition) {
    require(_condition);
    _;
  }

  modifier onlySender() {
    require(
      msg.sender == sender,
      "Seule l'envoyeur peut appeler cette fonction"
    );
    _;
  }

  modifier onlyReceiver() {
    require(
      msg.sender == receiver,
      "Seule le receveur peut appeler cette fonction"
    );
    _;
  }

  modifier inState(State _state) {
    require(
      state == _state,
      "Invalid state."
    );
    _;
  }

  event Pending();
  event Shipped();
  event ItemReceived();

  function confirmOrder() public inState(State.Created){
    emit Pending();
    state = State.Pending;
    receiver = msg.sender;
  }

  function confirmShipping() public inState(State.Pending){
    emit Shipped();
    state = State.Shipped;
    sender = msg.sender;
  }

  function confirmReceived() public onlyReceiver inState(State.Shipped){
    emit ItemReceived();
    state = State.Delivered;
  }

  function getStateValue(State _state) internal pure returns (string memory) {
        
     // Loop through possible options
     if (State.Created == _state) return "Created";
     if (State.Pending == _state) return "Pending";
     if (State.Shipped == _state) return "Shipped";
     if (State.Delivered == _state) return "Delivered";
}
// Retrieve Suit of our card
function getState() public view returns (string memory) {
     State _state = state; 
     return getStateValue(_state);
}


}