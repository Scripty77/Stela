import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { PRIORITIZED_CONNECTORS } from "./connectors"; 

export function Web3ContextProvider({ children }) {
  return (
    <Web3ReactProvider
      connectors={Object.values(PRIORITIZED_CONNECTORS).map(
        (connectorObject) => [connectorObject.connector, connectorObject.hooks]
      )}
    >
      {children}
    </Web3ReactProvider>
  );
}