pragma solidity 0.5.17;


contract Counter {
    uint256 public value;

    constructor(uint256 initVal) public {
        value = initVal;
    }

    function increase() public {
        value += 1;
    }

    function decrease() public {
        value -= 1;
    }

    function set(uint256 x) public {
        value = x;
    }

    function get() public view returns (uint256 retVal) {
        return value;
    }
}
