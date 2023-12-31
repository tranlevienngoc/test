import CoinbaseWallet from 'components/svg/CoinbaseWallet';
import CoinsPlusWallet from 'components/svg/CoinsPlusWallet';
import MetaMaskIcon from 'components/svg/MetaMaskIcon';
import StepIcon from 'components/svg/StepIcon';
import WalletConnect from 'components/svg/WalletConnect';

export const TEXT_GUIDE = [
  { content: 'Connecting your wallet is like “logging in” to Web3.' },
  { content: 'Please select your wallet from the options to get started.' },
];

export const STEP_CONNECT_FINISH = [
  {
    icon: <StepIcon color='#106CFF' />,
  },
  {
    icon: <StepIcon color='#106CFF' />,
  },
  {
    icon: <StepIcon color='#D4D4D6' />,
  },
];

export const LIST_OPTION_WALLET = [
  {
    label: 'MetaMask',
    icon: <MetaMaskIcon />,
    disable: false,
  },
  {
    label: 'Coinbase Wallet',
    icon: <CoinbaseWallet />,

    disable: false,
  },
  {
    label: 'WalletConnect',
    icon: <WalletConnect />,

    disable: false,
  },
  {
    label: 'Coins Plus',
    icon: <CoinsPlusWallet />,
    disable: true,
  },
];
