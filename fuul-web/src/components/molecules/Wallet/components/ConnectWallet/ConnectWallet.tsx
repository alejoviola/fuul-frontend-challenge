import { Button } from "@components/atoms";
import React, { useEffect } from "react";
import { useWalletStore } from "@store/wallet";

export const ConnectWallet = () => {
  const { metamask, checkMetamask, connectWallet } = useWalletStore(
    (state) => ({
      metamask: state.metamask,
      checkMetamask: state.checkMetamask,
      connectWallet: state.connectWallet,
    })
  );

  useEffect(() => {
    checkMetamask();
  }, []);

  if (!metamask) {
    return <Button onClick={connectWallet}>Download Metamask!</Button>;
  }

  return <Button onClick={connectWallet}>Connect Wallet</Button>;
};
