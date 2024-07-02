export const truncateWalletAddress = (
  walletAddress: string | undefined
): string => {
  if (!walletAddress) {
    return "";
  }

  if (walletAddress.length <= 10) {
    return walletAddress;
  }

  const start = walletAddress.slice(0, 5);
  const end = walletAddress.slice(-3);
  return `${start}...${end}`;
};
