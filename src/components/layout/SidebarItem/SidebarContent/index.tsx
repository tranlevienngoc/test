import { Box, BoxProps } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

import routes from '../../../../config/routes';
import BoxRound from '../../../common/BoxRound';
import Divider from '../../../common/Divider';
import TemplateText from '../../../common/Text/TemplateText';

const SidebarContent = ({ ...props }: BoxProps) => {
  const location = useLocation();
  const renderColor = (path: string, disable: boolean) => {
    if (disable) return '#BDBDBF';
    return location.pathname === path ? 'blue.100' : 'text.100';
  };
  const newRoutes = routes.filter(
    (item) =>
      ![
        '/nft',
        '/history',
        '/approvals',
        '/history/send',
        '/history/received',
        '/history/swap',
        '/history/pool',
        '/history/withdraw',
      ].includes(item.path)
  );
  return (
    <Box {...props}>
      {newRoutes.map((item) => (
        <Link key={item.path} to={item.path}>
          {item.path === '/your-wallet' && <Divider mt="20px" />}
          <BoxRound
            h='40px'
            mt='12px'
            display='flex'
            cursor='pointer'
            borderRadius={8}
            alignItems='center'
            _hover={{ background: 'bg.600' }}
            className={
              location.pathname === item.path
                ? item.title.toLocaleLowerCase()
                : ''
            }
          >
            {item.icon}
            <TemplateText
              color={renderColor(item.path, item.disable)}
              txt={item.title}
              ml='12px'
            />
            {item.disable && (
              <BoxRound ml='auto' bg='#E2F4FD' p='4px 8px'>
                <TemplateText
                  txt='Soon'
                  fontSize={12}
                  fontWeight={400}
                  color='#1E1E1E'
                />
              </BoxRound>
            )}
          </BoxRound>
        </Link>
      ))}
    </Box>
  );
};

export default SidebarContent;
