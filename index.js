let account = undefined;

// get ethereum web3 provider
window.addEventListener("load", async () => {
  try {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      ethereum.autoRefreshOnNetworkChange = false;
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      account = accounts && accounts.length > 0 ? accounts[0] : undefined;
    } else if (window.web3) {
      account = window.web3.currentProvider.address;
    } else {
      alert(
        "Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"
      );
      return;
    }

    // render out accounts
    var element = document.getElementById("accounts");
    element.innerHTML = account;
  } catch (error) {
    console.error(error);
  }
});
