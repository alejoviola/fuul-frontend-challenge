import { ethers } from "ethers";
import { create } from "zustand";

interface WalletState {
  metamask: boolean;
  signer?: any;
  provider?: any;
  address?: string;
  balance?: string;
  chainId?: string;
  network?: string;
  checkMetamask: () => void;
  connectWallet: () => void;
}

export const useWalletStore = create<WalletState>()((set, get) => ({
  metamask: false,
  signer: null,
  provider: null,
  checkMetamask: () => {
    const isInstalled = window.ethereum == null;
    set(() => ({ metamask: isInstalled }));
  },
  connectWallet: async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        set({ signer, provider });
        console.log("Wallet connected:", accounts[0]);
      } catch (error) {
        console.error("Failed to connect wallet", error);
      }
    } else {
      console.error("MetaMask is not installed");
    }
  },
}));
