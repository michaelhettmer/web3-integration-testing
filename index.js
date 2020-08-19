// get ethereum web3 provider
const initEthereum = () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    ethereum.autoRefreshOnNetworkChange = false;
  } else {
    alert(
      "Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"
    );
  }
};

let accounts = undefined;

/**
 * request accounts from ethereum provider and render them on the website
 */
const requestAccounts = async () => {
  try {
    accounts = await ethereum.request({ method: "eth_requestAccounts" });
    var element = document.getElementById("accounts");
    element.innerHTML = accounts.reduce(
      (prev, cur, index) => `${prev}\nAccount ${index + 1}: ${cur}`,
      ""
    );
    return accounts;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

initEthereum();
requestAccounts();
