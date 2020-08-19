if (window.ethereum) {
  window.web3 = new Web3(window.ethereum);
  ethereum.autoRefreshOnNetworkChange = false;
} else {
  alert(
    "Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"
  );
}

const requestAccounts = async () => {
  try {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    console.log(accounts);
    return accounts;
  } catch (error) {
    console.log(error);
  }
};

requestAccounts();
