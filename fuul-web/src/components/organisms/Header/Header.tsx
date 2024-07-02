"use client";
import React from "react";
import Image from "next/image";
import { ConnectWallet } from "@components/molecules/ConnectWallet";

export const Header = () => {
  return (
    <div className="flex w-full items-center justify-between p-6">
      <Image
        src={
          "https://cdn.prod.website-files.com/636fea919b96f729afeb9bf3/636fecb23e9741026fee1b94_fuul-logo-color.webp"
        }
        alt="Fuul logo"
        width={132}
        height={67}
      />

      <ConnectWallet />
    </div>
  );
};
