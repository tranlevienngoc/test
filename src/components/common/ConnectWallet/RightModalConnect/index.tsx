import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { Buffer } from 'buffer';
import BoxRound from 'components/common/BoxRound';
import ButtonBase from 'components/common/Buttons/ButtonBase';
import FlexCenter from 'components/common/Flex/FlexCenter';
import SearchInput from 'components/common/Input/SearchInput';
import TemplateText from 'components/common/Text/TemplateText';
import { AppContext } from 'Context/AppContext';
import {
  LIST_OPTION_WALLET,
  TEXT_GUIDE,
} from 'data/connectwallet/connectwalet';
import React, { useCallback, useContext, useEffect, useState } from 'react';

const ConnectCoinbaseWallet = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`,
  appName: 'CoinsPlus',
  supportedChainIds: [1, 3, 4, 5, 42],
});

const ConnectWalletConnect = new WalletConnectConnector({
  rpc: {
    1: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`,
  },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
});

const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

interface props {
  onCloseRightSideBar: () => void;
}

export default function RightModalConnect({
  onCloseRightSideBar = () => ({}),
}: props) {
  window.Buffer = Buffer;
  const { setAddressWallet } = useContext(AppContext);

  const { activate, account } = useWeb3React();

  useEffect(() => {
    setAddressWallet(account || '');
    localStorage.setItem('connected', account || '');
  }, [account]);

  const [valueSearch, setValueSearch] = useState('');
  const handleChangeInput = useCallback((value: string) => {
    setValueSearch(value);
  }, []);
  return (
    <Flex
      flexDirection='column'
      justifyContent={{ base: 'unset', lg: 'space-between' }}
      p={{ base: '0px', lg: '16px' }}
      w='100%'
    >
      <Box>
        <TemplateText txt='Connect Wallet' fontSize='16px' fontWeight={600} />
        <TemplateText
          display={{ base: 'block', lg: 'none' }}
          mt='8px'
          fontSize='13px'
          fontWeight={400}
          txt='Connecting your wallet is like “logging in” to Web3. Please select your wallet from the options to get started.'
        />
        <Box display={{ base: 'none', lg: 'block' }}>
          {TEXT_GUIDE.map((item, index) => (
            <TemplateText
              key={index}
              fontSize='13px'
              fontWeight={400}
              color='black.100'
              txt={item.content}
            />
          ))}
        </Box>
        <SimpleGrid mt='16px' columns={{ base: 2, md: 4, lg: 2 }} gap='10px'>
          {LIST_OPTION_WALLET.map((item, index) => (
            <Box
              key={index}
              textAlign='center'
              display={{ base: 'block', lg: 'flex' }}
              alignItems='center'
              borderRadius='12px'
              border={{ base: 'none', lg: '1px solid #EFF0F2' }}
              p='8px 12px'
              justifyContent={{ base: 'center', lg: 'space-between' }}
              opacity={item.disable ? 0.5 : 1}
              onClick={() => {
                if (item.label === 'MetaMask') {
                  activate(Injected);
                  onCloseRightSideBar();
                }
                if (item.label === 'WalletConnect') {
                  activate(ConnectWalletConnect);
                  onCloseRightSideBar();
                }
                if (item.label === 'Coinbase Wallet') {
                  activate(ConnectCoinbaseWallet);
                  onCloseRightSideBar();
                }
              }}
              cursor='pointer'
            >
              <Box
                display={{ base: 'block', lg: 'flex' }}
                alignItems='center'
                gap='5px'
              >
                <FlexCenter>{item.icon}</FlexCenter>
                <TemplateText
                  fontSize={{ base: '13px', lg: '16px' }}
                  txt={item.label}
                />
              </Box>
              {item.disable && (
                <FlexCenter>
                  <BoxRound
                    bg='#E2F4FD'
                    fontSize='13px'
                    w={{ base: '40%', lg: 'unset' }}
                    p='2px 4px'
                  >
                    soon
                  </BoxRound>
                </FlexCenter>
              )}
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Box mt={{ base: '20px', lg: 'unset' }}>
        <TemplateText txt='Track any wallet' fontSize='16px' fontWeight={600} />
        <TemplateText
          txt='Copy address from any body which you want to figure out their wallet'
          fontSize='13px'
          fontWeight={400}
          color='black.100'
        />
        <Flex gap='5px' alignItems='center' mt='16px'>
          <SearchInput
            h='40px'
            w='100%'
            value={valueSearch}
            backgroundColor='white'
            onChange={(value) => handleChangeInput(value)}
            placeholder='Enter address, domain or identity'
          />
          <ButtonBase
            content='Add'
            bg='white'
            w='20%'
            border='1px solid #D4D4D6'
          />
        </Flex>
      </Box>
    </Flex>
  );
}
