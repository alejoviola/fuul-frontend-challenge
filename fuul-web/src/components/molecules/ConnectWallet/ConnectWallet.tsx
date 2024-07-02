import { Button } from "@components/atoms";
import React, { useEffect } from "react";
import { useWalletStore } from "../../../store/wallet";

export const ConnectWallet = () => {
  const { checkMetamask, connectWallet } = useWalletStore((state) => ({
    checkMetamask: state.checkMetamask,
    connectWallet: state.connectWallet,
  }));

  useEffect(() => {
    checkMetamask();
  }, []);

  return <Button onClick={connectWallet}>Connect Wallet</Button>;
};
