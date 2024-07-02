"use client";
import React from "react";
import { useWalletStore } from "@store/wallet";
import { ConnectWallet, WalletConnected } from "./components";

export const Wallet = () => {
  const { signer } = useWalletStore((state) => ({
    signer: state.signer,
  }));

  if (!signer) {
    return <ConnectWallet />;
  }

  return <WalletConnected />;
};
