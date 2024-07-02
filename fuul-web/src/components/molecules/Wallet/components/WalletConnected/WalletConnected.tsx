import React from "react";
import { Menu, MenuItem } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Button } from "@components/atoms";
import { useWalletStore } from "@store/wallet";
import styles from "./WalletConnected.module.css";
import { truncateWalletAddress } from "@utils/wallet";

export const WalletConnected = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { address, disconnectWallet } = useWalletStore((state) => ({
    address: state.signer?.address,
    disconnectWallet: state.disconnectWallet,
  }));

  const handleDisconnect = () => {
    handleClose();
    disconnectWallet();
  };

  return (
    <div>
      <Button
        id="wallet-button"
        aria-controls={open ? "log-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={styles.Wallet}
      >
        <AccountBalanceWalletIcon />
        {truncateWalletAddress(address)}
      </Button>
      <Menu
        id="log-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "wallet-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        className="mt-2"
      >
        <MenuItem onClick={handleDisconnect}>Disconnect</MenuItem>
      </Menu>
    </div>
  );
};
