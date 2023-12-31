import { Box, Flex, Image } from '@chakra-ui/react';
import ButtonBase from 'components/common/Buttons/ButtonBase';
import TemplateText from 'components/common/Text/TemplateText';
import Ethereum from 'components/svg/Ethereum';
import HeartIcon from 'components/svg/HeartIcon';
import { ProductItem } from 'constants/types';

interface props {
  product: ProductItem;
}

export default function ProductCard({ product }: props) {
  return (
    <Box
      borderRadius='16px'
      w='100%'
      h='95%'
      p='16px'
      border='1px solid #EFF0F2'
      _hover={{ boxShadow: '0px 8px 16px rgba(16, 108, 255, 0.25)' }}
      position='relative'
    >
      <Image w='100%' src={product.image} />
      <Box position='absolute' top='20px' right='20px'>
        <HeartIcon />
      </Box>
      <Box mt='16px'>
        <TemplateText fontSize='16px' fontWeight={600} txt={product.name} />
        <TemplateText
          color='#93989A'
          fontSize='12px'
          fontWeight={400}
          txt={product.author}
        />
      </Box>
      <Box mt='16px'>
        <TemplateText fontSize='10' color='#93989A' txt={product.label} />
        <Flex alignItems='center' justifyContent='space-between'>
          <Flex alignItems='center' gap='6px'>
            <Ethereum />
            <TemplateText fontSize='16px' txt={product.price} />
          </Flex>
          <ButtonBase
            w='85px'
            h='28px'
            bg='#106CFF'
            colorText='white'
            content='Sell now'
          />
        </Flex>
      </Box>
    </Box>
  );
}
