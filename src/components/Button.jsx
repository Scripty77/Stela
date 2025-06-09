import React, { useState } from "react";
import Web3 from "web3";

function Button() {
  const [address, setAddress] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAddress(accounts[0]);
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("No se encontró un proveedor Ethereum");
    }
  };

  const disconnectWallet = () => {
    setAddress("");
  };

  return (
    <div className="mt-5 flex items-center justify-center">
      {address ? (
        <div className="flex items-center space-x-4 p-3 rounded-md shadow-lg">
          <p className="bg-white text-purple-700 font-semibold py-2 px-4 rounded">
            {address.slice(0, 6) + "..." + address.slice(-4)}
          </p>
          <button
            onClick={disconnectWallet}
            className="bg-white hover:bg-gray-200 text-purple-700 font-bold py-2 px-4 rounded"
          >
            Desconectar
          </button>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded shadow-xl"
        >
          Conectar Wallet
        </button>
      )}
    </div>
  );
}

export default Button;
