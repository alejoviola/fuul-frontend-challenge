"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@components";
import { useWalletStore } from "@store/wallet";
import Fuul from "fuul-sdk";

import Pedro from "../assets/pedro.gif";

export default function Home() {
  const { signer, provider } = useWalletStore((state) => ({
    provider: state.provider,
    signer: state.signer,
  }));

  useEffect(() => {
    // Init Fuul
    Fuul.init("API_KEY");
  }, []);

  const mintNft = async () => {
    if (!signer || !provider) {
      throw new Error("No connected");
    }

    const message = "We love Pedro the mapache <3";
    const sig = await signer.signMessage(message);

    if (sig) {
      Fuul.showReferralModal(signer.address);
    }
  };

  return (
    <main className="flex w-full justify-center py-10">
      <div className="shadow p-6 w-[400px] text-center rounded">
        <h2 className="text-lg font-bold">PEDRO NFT COLLECTION</h2>
        <div className="flex justify-center my-4">
          <Image
            src={Pedro}
            alt="Pedro dances for the rol position"
            width={300}
          />
        </div>
        {signer ? (
          <>
            <span className="text-center">Free Mint Now!!!</span>
            <div>
              <Button onClick={mintNft}>Mint</Button>
            </div>
          </>
        ) : (
          <span>Please, connect your wallet</span>
        )}
      </div>
    </main>
  );
}
