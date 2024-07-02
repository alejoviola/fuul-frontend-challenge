"use client";
import React, { useEffect } from "react";
import Fuul from "fuul-sdk";

export default function Home() {
  useEffect(() => {
    Fuul.init("API_KEY");
    Fuul.showReferralModal("0xqwioejqoiwjeoiqw");
  }, []);

  return <main></main>;
}
